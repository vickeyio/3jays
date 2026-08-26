import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "254700000000";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppFloat({ message }: { message?: string }) {
  const text =
    message ??
    "Hello, I am interested in booking a safari and would like more information.";

  return (
    <a
      href={whatsappLink(text)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with 3jay Tour & Safari on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#128C4A] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safari-gold"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
