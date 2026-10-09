import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { QuoteRequestForm } from "@/components/safari/QuoteRequestForm";

export function PackageQuoteButton({ name, destination, duration }: { name: string; destination?: string; duration?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-auto min-h-11 rounded-full border-safari-line px-4 py-2.5 text-sm">Request a Quote</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[85svh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl">
        <DialogTitle className="font-display text-2xl">Plan your safari</DialogTitle>
        <DialogDescription>{name}</DialogDescription>
        <QuoteRequestForm safariName={name} {...(destination ? { destination } : {})} {...(duration ? { duration } : {})} />
      </DialogContent>
    </Dialog>
  );
}