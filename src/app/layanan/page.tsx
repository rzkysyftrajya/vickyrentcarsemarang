import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Calendar,
  Users,
  Plane,
  ShieldCheck,
  KeyRound,
  Briefcase,
  Car,
} from "lucide-react";

const servicesList = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Sewa Harian, Mingguan & Bulanan",
    description:
      "Fleksibilitas penuh untuk kebutuhan jangka pendek maupun panjang dengan harga sewa mobil bulanan yang lebih ekonomis.",
    features: [
      "Pilihan mobil beragam",
      "Termasuk biaya perawatan rutin",
      "Tersedia mobil pengganti",
      "Ideal untuk kebutuhan personal atau korporat",
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Layanan Sopir Profesional",
    description:
      "Nikmati perjalanan tanpa lelah dengan sewa mobil dengan supir. Sopir kami berpengalaman, ramah, dan menguasai area.",
    features: [
      "Bebas lelah menyetir",
      "Keamanan dan kenyamanan ekstra",
      "Sopir menguasai rute terbaik",
      "Cocok untuk perjalanan bisnis atau wisata",
    ],
  },
  {
    icon: <Plane className="h-8 w-8 text-primary" />,
    title: "Antar-Jemput Bandara Ahmad Yani",
    description:
      "Layanan rental mobil dari dan ke Bandara Ahmad Yani dengan penjemputan yang tepat waktu.",
    features: [
      "Tanpa perlu antri taksi",
      "Armada nyaman untuk istirahat setelah penerbangan",
      "Harga tetap tanpa biaya tersembunyi",
      "Penjemputan 24/7",
    ],
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Sewa Mobil Korporat",
    description:
      "Solusi transportasi efisien untuk kebutuhan perusahaan dengan kontrak jangka panjang dan layanan premium.",
    features: [
      "Harga korporat yang kompetitif",
      "Manajemen armada yang mudah",
      "Layanan pelanggan prioritas",
      "Pilihan mobil sesuai kebutuhan bisnis",
    ],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Sewa Mobil Pengantin",
    description:
      "Sediakan transportasi terbaik untuk hari spesial Anda. Rental mobil wedding kami hadir dengan pilihan Alphard dan mobil mewah lainnya.",
    features: [
      "Pilihan mobil mewah dan elegan",
      "Termasuk dekorasi standar (opsional)",
      "Sopir profesional berbusana rapi",
      "Jadwal yang fleksibel",
    ],
  },
  {
    icon: <KeyRound className="h-8 w-8 text-primary" />,
    title: "Rental Lepas Kunci",
    description:
"Nikmati kebebasan penuh menjelajahi kota dengan sistem sewa mobil lepas kunci Semarang yang mudah dan aman.",
    features: [
      "Privasi dan kebebasan maksimal",
      "Proses verifikasi cepat dan mudah",
      "Tersedia 24 jam",
      "Pilihan mobil bervariasi",
    ],
  },
  {
    icon: <Car className="h-8 w-8 text-primary" />,
    title: "Paket Wisata & Perjalanan",
    description:
      "Kami juga menyediakan paket wisata dan rental mobil ke Danau Toba, Berastagi, Bukit Lawang, dan destinasi lainnya.",
    features: [
      "Termasuk mobil dan supir",
      "Itinerary fleksibel",
      "Rekomendasi tempat terbaik",
      "Harga paket yang kompetitif",
    ],
  },
];

const phoneNumber = "6282313680519";

export default function LayananPage() {
  return (
    <>
      <PageHeader
        title="Layanan Kami"
        breadcrumb="Beranda / Layanan"
        imageUrl="/background.webp"
        imageHint="customer service smiling"
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Solusi Lengkap Kebutuhan Transportasi Anda
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Kami menawarkan berbagai layanan rental mobil di Semarang yang
              dirancang untuk memberikan kenyamanan, keamanan, dan
              fleksibilitas, apa pun tujuan perjalanan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => {
              const message = `Halo, saya tertarik dengan layanan '${service.title}' dari PT.VRN SEMARANG. Bisa jelaskan lebih detail?`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`;
              return (
                <Card key={index} className="flex flex-col bg-secondary/50">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-background rounded-lg shadow">
                      {service.icon}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardDescription>{service.description}</CardDescription>
                    <ul className="mt-4 space-y-2 text-sm flex-grow">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-1 text-green-600 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6 w-full">
                      <Link href={whatsappUrl} target="_blank">
                        Pesan Layanan Ini
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
