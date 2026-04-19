import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    name: "Pak Santoso",
    title: "Pengusaha",
    quote:
"Layanan PT.VRN SEMARANG sangat profesional. Mobilnya bersih, terawat, dan proses booking-nya cepat. Perjalanan bisnis saya di Semarang menjadi sangat lancar.",
    avatar: "/testimoni/testimoni-1.webp",
    hint: "male portrait businessman",
    rating: 5,
  },
  {
    name: "Ahmad Yahya",
    title: "",
    quote:
      "Menyewa mobil untuk liburan keluarga, unitnya sangat nyaman. Sopirnya ramah dan tahu banyak tempat wisata bagus. Anak-anak senang, kami pun tenang. Terima kasih!",
    avatar: "/testimoni/testimoni-3.webp",
    hint: "family portrait tourist",
    rating: 5,
  },
  {
    name: "Ahmad Yani",
    title: "Event Organizer",
    quote:
      "Memesan All new avanza untuk klien VVIP. Mereka sangat puas dengan kondisi mobil yang mewah dan pelayanan kelas satu. Koordinasi dengan tim juga mudah. Pasti jadi langganan.",
    avatar: "/testimoni/testimoni-2.webp",
    hint: "male portrait suit",
    rating: 5,
  },
  {
    name: "Pak Heru",
    title: "Dosen",
    quote:
      "Butuh mobil mendadak untuk acara kampus, untungnya responnya cepat sekali. Harga sewanya juga ramah di kantong mahasiswa. Mobil Zenix-nya Bagus dan irit. Mantap!",
    avatar: "/testimoni/testimoni-4.webp",
    hint: "female portrait student",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-0 animate-fade-in-up">
          <p className="font-semibold text-primary uppercase tracking-wider">
            TESTIMONI
          </p>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-foreground">
            Apa Kata Mereka
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Kisah dari ribuan pelanggan yang telah mempercayakan perjalanannya
            kepada kami.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}

