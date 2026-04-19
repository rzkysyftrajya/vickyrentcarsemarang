import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
alt="Logo PT.VRN SEMARANG"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-bold text-xl text-white">
                PT.VRN SEMARANG
              </span>
            </Link>
            <p>
              Pusat rental mobil Semarang murah, lepas kunci atau dengan supir.
              Armada lengkap dan terawat untuk perjalanan wisata dan bisnis
              Anda.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
href="https://www.tiktok.com/@wijayarentcarsemarang?_t=ZS-8wnCs0wRzFq&_r=1"
                target="_blank"
                rel="noopener noreferrer"
aria-label="TikTok PT.VRN SEMARANG"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Image
                  src="/icon-footer/tiktok.png"
                  alt="Ikon TikTok"
                  width={24}
                  height={24}
                />
              </a>
              <a
href="https://www.youtube.com/@ptvickyrentalnusantara"
                target="_blank"
                rel="noopener noreferrer"
aria-label="Youtube PT.VRN SEMARANG"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Image
                  src="/icon-footer/youtube.png"
                  alt="Ikon YouTube"
                  width={24}
                  height={24}
                />
              </a>
              <a
href="https://www.instagram.com/wijayarentcarsemarang?igsh=OHZiZWJlMXFhM2o2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
aria-label="Instagram PT.VRN SEMARANG"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Image
                  src="/icon-footer/instagram.png"
                  alt="Ikon Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
href="https://www.facebook.com/ptvickyrentalnusantara"
                target="_blank"
                rel="noopener noreferrer"
aria-label="Facebook PT.VRN SEMARANG"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Image
                  src="/icon-footer/facebook.png"
                  alt="Ikon Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/armada"
                  className="hover:text-primary transition-colors"
                >
                  Pilihan Mobil
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-primary transition-colors"
                >
                  Layanan Kami
                </Link>
              </li>
              <li>\n                <Link
                  href="/galeri"
                  className="hover:text-primary transition-colors"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h3 className="font-semibold text-lg text-white tracking-wider">
              Lokasi Kami
            </h3>
            <div className="mt-4 rounded-lg overflow-hidden h-48 shadow-lg">
              <iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.60605291769!2d110.449066!3d-7.020862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c674e49fd99%3A0x5027a76e356db60!2sTandang%2C%20Kec.%20Tembalang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1776340345896!5m2!1sid!2sid"

                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:grayscale dark:invert"
              ></iframe>
            </div>
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-footer/maps.png"
                  alt="Ikon lokasi"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span>
              Jl. Tandang, Kec. Tembalang, Kota Semarang, Jawa Tengah

                </span>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-footer/whatsapp.png"
                  alt="Ikon telepon"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+6282313680519"
                  className="hover:text-primary transition-colors block"
                >
                  +62 823-1368-0519
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-footer/email.png"
                  alt="Ikon email"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <a
href="mailto:ptvrnsemarang@gmail.com"
                  className="hover:text-primary transition-colors"
                >
ptvrnsemarang@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/icon-footer/clock.png"
                  alt="Ikon jam buka"
                  width={20}
                  height={20}
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span>Senin - Minggu: 24 Jam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-950/50 py-4">
        <div className="container text-center text-sm text-gray-500">
© {currentYear} PT.VRN SEMARANG. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
}
