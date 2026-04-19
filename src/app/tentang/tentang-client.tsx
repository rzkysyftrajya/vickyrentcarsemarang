"use client";

import Image from "next/image";
import { PageHeader } from "@/components/common/page-header";
import {
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VisionMission } from "@/components/home/vision-mission";
import { useLightbox } from "@/hooks/use-lightbox";

const whyUs = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Armada Terawat & berasuransi",
    description:
      "Semua kendaraan kami dalam kondisi prima dan dilindungi asuransi untuk keamanan dan kenyamanan Anda.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Sopir Profesional",
    description:
      "Tim sopir kami berpengalaman, ramah, dan menguasai rute perjalanan untuk memastikan Anda sampai tujuan dengan aman.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Layanan Pelanggan 24/7",
    description:
      "Kami siap melayani Anda kapan saja, memastikan semua kebutuhan perjalanan Anda terpenuhi dengan respons cepat.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Harga Terbaik & Transparan",
    description:
      "Kami menawarkan harga sewa yang kompetitif tanpa biaya tersembunyi, memberikan nilai terbaik untuk Anda.",
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Booking Mudah & Cepat",
    description:
      "Proses pemesanan yang simpel dan cepat melalui WhatsApp, telepon, atau platform online kami.",
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Kepuasan Pelanggan Utama",
    description:
      "Kami berkomitmen untuk memberikan pengalaman terbaik yang melebihi ekspektasi Anda.",
  },
];

export function TentangPageClient() {
  const { openLightbox } = useLightbox();

  const teamImageUrl = "/testimoni/testimoni-2.webp";
  const fleetImageUrl = "/testimoni/testimoni-4.webp";

  return (
    <>
      <PageHeader
        title="Tentang Kami"
        breadcrumb="Beranda / Tentang"
        imageUrl="/background.webp"
        imageHint="office building modern"
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
            <button
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl col-span-1 transition-all duration-500 hover:scale-105 hover:shadow-cyan-200 block"
              onClick={() => openLightbox(teamImageUrl)}
            >
              <Image
                src={teamImageUrl}
                alt="Tim PT.VRN SEMARANG di depan kantor Semarang"
                data-ai-hint="team portrait professional"
                fill
                className="object-cover"
              />
            </button>
            <button
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl col-span-1 mt-12 transition-all duration-500 hover:scale-105 hover:shadow-rose-200 block"
              onClick={() => openLightbox(fleetImageUrl)}
            >
              <Image
                src={fleetImageUrl}
                alt="Armada mobil PT.VRN SEMARANG"
                data-ai-hint="car fleet modern"
                fill
                className="object-cover"
              />
            </button>
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Selamat Datang di PT.VRN SEMARANG
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kami adalah partner terpercaya untuk semua kebutuhan transportasi Anda di Semarang dan sekitarnya. Dengan komitmen pada kualitas,
              keamanan, dan pelayanan pelanggan, kami menyediakan armada mobil
              yang terawat baik untuk perjalanan pribadi, liburan keluarga,
              maupun kebutuhan bisnis.
            </p>
            <p className="mt-4 text-muted-foreground">
              Didukung oleh tim profesional dan sopir berpengalaman, kami
              memastikan setiap perjalanan Anda berjalan lancar, aman, dan
              menyenangkan. Terima kasih telah memilih kami sebagai partner
              perjalanan Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Mengapa Memilih Kami?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Kami tidak hanya menyewakan mobil, kami memberikan ketenangan
              pikiran dan jaminan kualitas dalam setiap perjalanan.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-card p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                  <div className="mx-auto w-fit bg-primary/10 p-4 rounded-full">
                    {item.icon}
                  </div>
                  <CardHeader className="p-0 pt-4">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisionMission />
    </>
  );
}
