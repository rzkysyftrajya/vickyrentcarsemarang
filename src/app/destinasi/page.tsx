import { PageHeader } from "@/components/common/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const destinations = [
  {
    title: "Danau Toba",
    description:
      "Danau vulkanik terbesar di dunia dengan pemandangan yang menakjubkan dan Pulau Samosir di tengahnya. Wajib dikunjungi saat berada di Sumatera Utara.",
    imageUrl: "/destinasi/destinasi2.webp",
    imageHint: "lake toba landscape",
    mapsUrl: "https://maps.app.goo.gl/FgB7DzVdTqiAVFym8",
  },
  {
    title: "Istana Maimun",
    description:
"Ikon Kota Semarang, Lawang Sewu ini memadukan arsitektur kolonial yang unik. Kenali sejarah kota melalui kemegahan bangunan ini.",
    imageUrl: "/destinasi/destinasi3.webp",
    imageHint: "lawang sewu architecture",
    mapsUrl: "https://maps.app.goo.gl/DicqTpMZy7Bec3Ty5",
  },
  {
    title: "Masjid Raya Al-Mashun",
    description:
"Masjid Agung Jawa Tengah yang megah dengan arsitektur unik. Sebuah simbol keharmonisan dan peninggalan sejarah Jawa Tengah.",
    imageUrl: "/destinasi/destinasi5.webp",
    imageHint: "grand mosque semarang",
    mapsUrl: "https://maps.app.goo.gl/eECTyhjTjdr3VAPt6",
  },
  {
    title: "Berastagi",
    description:
      "Dataran tinggi yang sejuk dengan pemandangan Gunung Sibayak dan Sinabung. Terkenal dengan pasar buah dan bunga yang segar.",
    imageUrl: "/destinasi/destinasi1.webp",
    imageHint: "berastagi highland market",
    mapsUrl: "https://maps.app.goo.gl/8a8JiDdLk6T55Z6L9",
  },
  {
    title: "Taman Alam Lumbini",
    description:
      "Temukan pagoda emas megah yang merupakan replika dari Pagoda Shwedagon di Myanmar. Tempat yang tenang untuk berfoto dan refleksi.",
    imageUrl: "/destinasi/destinasi4.webp",
    imageHint: "lumbini park pagoda",
    mapsUrl: "https://maps.app.goo.gl/hgwsyrRrKWxG5W5W8",
  },
  {
    title: "Air Terjun Sipiso-piso",
    description:
      "Salah satu air terjun tertinggi di Indonesia yang jatuh ke kaldera Danau Toba. Pemandangan dari gardu pandang sangat spektakuler.",
    imageUrl: "/destinasi/destinasi6.webp",
    imageHint: "sipiso piso waterfall",
    mapsUrl: "https://maps.app.goo.gl/iKZNvt7q47sMwsNp8",
  },
];

export default function DestinasiPage() {
  return (
    <>
      <PageHeader
        title="Destinasi Populer"
        breadcrumb="Beranda / Destinasi"
        imageUrl="/background.webp"
        imageHint="tourist map adventure"
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Jelajahi Pesona Semarang & Sekitarnya
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Berikut adalah beberapa destinasi favorit yang bisa Anda kunjungi
              dengan nyaman menggunakan armada kami. Rencanakan perjalanan Anda
              sekarang!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card
                key={index}
                className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group bg-card/50"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={destination.imageUrl}
                      alt={`Gambar ${destination.title}`}
                      data-ai-hint={destination.imageHint}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {destination.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground flex-grow">
                    {destination.description}
                  </CardDescription>
                  <Button asChild className="mt-6 w-full" variant="outline">
                    <Link
                      href={destination.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" /> Lihat di Peta
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
