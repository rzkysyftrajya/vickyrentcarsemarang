import { PageHeader } from "@/components/common/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Apa saja syarat untuk menyewa mobil lepas kunci?",
    answer:
      "Untuk sewa lepas kunci, Anda perlu menyediakan dokumen berikut: e-KTP, SIM A yang masih berlaku, dan bukti domisili (tagihan listrik/PBB). Kami juga mungkin akan meminta akun media sosial aktif untuk verifikasi tambahan.",
  },
  {
    question: "Apakah harga sewa sudah termasuk bahan bakar?",
    answer:
      "Tidak, harga sewa yang tertera belum termasuk bahan bakar. Mobil akan kami serahkan dengan kondisi bahan bakar penuh dan harus dikembalikan dalam kondisi yang sama.",
  },
  {
    question: "Bagaimana jika terjadi kerusakan pada mobil selama masa sewa?",
    answer:
      "Segera hubungi tim kami 24/7. Kerusakan ringan akibat pemakaian normal akan kami tanggung, namun kerusakan berat akibat kelalaian penyewa akan menjadi tanggung jawab penyewa. Semua unit kami dilindungi asuransi untuk ketenangan Anda.",
  },
  {
    question: "Bisakah saya menyewa mobil untuk perjalanan ke luar kota?",
    answer:
      "Tentu saja. Kami melayani perjalanan ke luar kota dengan atau tanpa sopir. Mohon informasikan tujuan Anda saat booking agar kami dapat memberikan penawaran terbaik dan memastikan kondisi kendaraan prima untuk perjalanan jauh.",
  },
  {
    question: "Apakah ada layanan antar-jemput mobil ke lokasi saya?",
    answer:
      "Ya, kami menyediakan layanan antar-jemput mobil di area Kota Semarang, termasuk Bandara Ahmad Yani, stasiun kereta, hotel, atau alamat rumah Anda dengan sedikit biaya tambahan yang disesuaikan dengan jarak.",
  },
  {
    question: "Bagaimana sistem pembayaran yang diterima?",
    answer:
      "Kami menerima pembayaran melalui transfer bank (BCA, Mandiri) dan pembayaran tunai. Diperlukan pembayaran DP (Down Payment) sebesar 50% saat booking untuk mengunci jadwal, dan pelunasan dilakukan saat serah terima kendaraan.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Pertanyaan Umum"
        breadcrumb="Beranda / FAQ"
        imageUrl="/background.webp"
        imageHint="question mark neon"
      />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ada Pertanyaan?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kami telah merangkum beberapa pertanyaan yang paling sering
              diajukan oleh pelanggan kami. Jika jawaban Anda tidak ada di sini,
              jangan ragu untuk menghubungi kami.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/50 rounded-lg mb-4 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
