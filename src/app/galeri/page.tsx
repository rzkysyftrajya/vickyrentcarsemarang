"use client";

import { PageHeader } from "@/components/common/page-header";
import Image from "next/image";
import { useLightbox } from "@/hooks/use-lightbox";

const TOTAL_GALLERY_IMAGES = 52; // <--- Ganti angka setiap nambah gambar

// Buat array gambar secara dinamis
const galleryImages = Array.from({ length: TOTAL_GALLERY_IMAGES }, (_, i) => {
  const imageNumber = i + 1;
  return {
    id: `galeri-${imageNumber}`,
    src: `/galeri/galeri${imageNumber}.webp`,
    alt: `Gambar galeri ${imageNumber}`,
    hint: `galeri-image-${imageNumber}`,
  };
});

export default function GaleriPage() {
  const { openLightbox } = useLightbox();

  return (
    <>
      <PageHeader
        title="Galeri Armada"
        breadcrumb="Beranda / Galeri"
        imageUrl="/HERO-SECTION.webp"
        imageHint="car photography studio"
      />
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Detail Visual Armada Kami
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Lihat lebih dekat setiap detail mobil yang kami tawarkan. Kami
              memastikan setiap unit dalam kondisi terbaik untuk kenyamanan
              Anda.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                className="relative aspect-square group overflow-hidden rounded-lg block w-full"
                onClick={() => openLightbox(image.src)}
                aria-label={`Lihat gambar ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  data-ai-hint={image.hint}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold">
                    {image.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
