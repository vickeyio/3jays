import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  destination: z.string().min(2).max(80),
  days: z.number().int().min(1).max(30),
  budget: z.string().min(1).max(40),
  travellers: z.number().int().min(1).max(20),
  interests: z.string().max(300).optional(),
});

const planSchema = z.object({
  title: z.string(),
  summary: z.string(),
  days: z.array(
    z.object({
      day: z.number(),
      title: z.string(),
      activities: z.array(z.string()),
      hotel: z.string(),
      meals: z.string().optional(),
    }),
  ),
  estimatedBudget: z.object({
    perPerson: z.string(),
    total: z.string(),
    notes: z.string().optional(),
  }),
  tips: z.array(z.string()).optional(),
});

export type TripPlan = z.infer<typeof planSchema>;

export const generateTripPlan = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured for this project yet.");

    const prompt = `Plan a ${data.days}-day trip to ${data.destination} in East Africa for ${data.travellers} traveller(s) with a ${data.budget} budget.${
      data.interests ? ` They are especially interested in: ${data.interests}.` : ""
    } Use realistic lodges, parks and driving times. Prices in USD.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash",
        messages: [
          {
            role: "system",
            content:
              "You are a senior East Africa safari planner for 3 Jays Tours & Safaris. Return concise, realistic, day-by-day itineraries. Always call the return_plan tool.",
          },
          { role: "user", content: prompt },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "return_plan",
              description: "Return the finished itinerary",
              parameters: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  summary: { type: "string" },
                  days: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        day: { type: "number" },
                        title: { type: "string" },
                        activities: { type: "array", items: { type: "string" } },
                        hotel: { type: "string" },
                        meals: { type: "string" },
                      },
                      required: ["day", "title", "activities", "hotel"],
                      additionalProperties: false,
                    },
                  },
                  estimatedBudget: {
                    type: "object",
                    properties: {
                      perPerson: { type: "string" },
                      total: { type: "string" },
                      notes: { type: "string" },
                    },
                    required: ["perPerson", "total"],
                    additionalProperties: false,
                  },
                  tips: { type: "array", items: { type: "string" } },
                },
                required: ["title", "summary", "days", "estimatedBudget"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "return_plan" } },
      }),
    });

    if (response.status === 429) {
      throw new Error("Too many requests right now — please try again in a minute.");
    }
    if (response.status === 402) {
      throw new Error("AI credits are exhausted. Please top up to keep planning trips.");
    }
    if (!response.ok) {
      const body = await response.text();
      throw new Error(`Trip planner failed [${response.status}]: ${body}`);
    }

    const json = await response.json();
    const args =
      json?.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments ??
      json?.choices?.[0]?.message?.content;
    if (!args) throw new Error("The planner returned an empty itinerary. Try again.");

    return planSchema.parse(typeof args === "string" ? JSON.parse(args) : args);
  });
