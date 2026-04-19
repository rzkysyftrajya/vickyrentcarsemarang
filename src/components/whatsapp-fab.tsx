import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export function WhatsAppFAB() {
const phoneNumber = "6282313680519";
  const message =
    "Halo, saya ingin bertanya tentang layanan rental mobil di PT.VRN SEMARANG. Apakah ada unit yang tersedia?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 rounded-full h-12 w-12 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg z-40 transition-transform duration-300 hover:scale-110 overflow-hidden animate-fab-bounce animate-fab-pulse"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat di WhatsApp"
      >
        <Image src="/wa-float.png" alt="WhatsApp" width={32} height={32} />
      </Link>
    </Button>
  );
}
