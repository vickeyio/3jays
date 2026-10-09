import { Button } from "@/components/ui/button";

export const WHATSAPP_NUMBER = "254791239939";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppFloat({ message }: { message?: string }) {
  const text =
    message ??
    "Hello 3jay Tour & Safari, I would like to enquire about your safari packages.";

  return (
    <Button asChild variant="ghost" className="whatsapp-float fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-whatsapp p-0 text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp hover:text-whatsapp-foreground sm:w-auto sm:px-5">
    <a
      href={whatsappLink(text)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="!h-6 !w-6" aria-hidden="true"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.79 1.48h.01c6.58 0 11.94-5.35 11.94-11.93a11.85 11.85 0 0 0-3.48-8.43ZM12.06 21.83a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.38a9.88 9.88 0 0 1-1.51-5.27c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.01 2.9 9.85 9.85 0 0 1 2.9 7.01c0 5.47-4.45 9.91-9.95 9.91Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.79-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.48.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" /></svg>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
    </Button>
  );
}
