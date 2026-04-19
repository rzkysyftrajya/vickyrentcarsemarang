import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

export function CtaBanner() {
  const phoneNumber = "6282313680519";
  const message = "Halo, saya siap memulai perjalanan saya dengan PT.VRN SEMARANG. Bisa bantu saya untuk booking?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <section className="bg-gray-900 relative overflow-hidden">
      <BackgroundRippleEffect />
      <div className="container py-16 lg:py-20 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
          Siap Menjelajahi Semarang?
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300/80">
          Tim kami siap membantu Anda 24/7 untuk menemukan mobil yang paling sesuai dengan kebutuhan perjalanan Anda. Jangan ragu untuk menghubungi kami dan dapatkan penawaran terbaik hari ini.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-red-600 hover:from-primary/90 hover:to-red-600/90 text-white rounded-full text-lg px-10 py-7 shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href={whatsappUrl} target="_blank">Hubungi Kami Sekarang</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
