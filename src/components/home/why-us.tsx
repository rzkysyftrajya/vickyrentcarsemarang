"use client";

import { Box, Car, KeyRound, Rocket, ShieldCheck, UserCheck } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Alasan Memilih Kami</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Kami memberikan lebih dari sekadar mobil. Kami memberikan kepastian, keamanan, dan kenyamanan untuk setiap rental mobil di Semarang.
            </p>
        </div>
        <ul className="grid grid-cols-1 grid-rows-none gap-8 md:grid-cols-2 lg:grid-cols-3">
          <GridItem
            icon={<Rocket className="h-8 w-8 text-primary" />}
            title="Harga Murah & Transparan"
            description="Tidak ada biaya tersembunyi. Dapatkan harga sewa mobil Semarang murah, jujur, dan bersaing."
          />
          <GridItem
            icon={<ShieldCheck className="h-8 w-8 text-primary" />}
            title="Armada Terawat & Berasuransi"
            description="Semua mobil kami dalam kondisi prima, bersih, dan dilindungi asuransi untuk ketenangan pikiran Anda."
          />
          <GridItem
            icon={<UserCheck className="h-8 w-8 text-primary" />}
            title="Layanan Profesional 24/7"
            description="Tim kami, termasuk sopir berpengalaman, siap melayani Anda kapan saja dengan ramah dan responsif."
          />
          <GridItem
            icon={<Car className="h-8 w-8 text-primary" />}
            title="Pilihan Mobil Terlengkap"
            description="Dari Avanza, Innova, Hiace, hingga Alphard untuk sewa mobil pengantin. Kami punya mobil untuk setiap kebutuhan."
          />
          <GridItem
            icon={<KeyRound className="h-8 w-8 text-primary" />}
            title="Proses Booking Sangat Mudah"
            description="Pemesanan cepat dan tidak berbelit-belit. Tersedia rental mobil lepas kunci atau dengan supir via WhatsApp."
          />
          <GridItem
            icon={<Box className="h-8 w-8 text-primary" />}
            title="Antar-Jemput Bandara Semarang"
            description="Layanan antar-jemput di bandara, hotel, atau lokasi pilihan Anda di Semarang untuk kemudahan maksimal."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="list-none">
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-background/50">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={128}
          inactiveZone={0.01}
          borderWidth={1}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-card p-6 shadow-lg">
          <div className="relative flex flex-1 flex-col justify-start gap-4">
            <div className="w-fit rounded-lg bg-primary/10 p-3">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="-tracking-tighter pt-0.5 font-sans text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="font-sans text-base text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
