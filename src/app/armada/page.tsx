"use client";

import { useState } from "react";
import { vehicles, vehicleBrands, VehicleBrand } from "@/lib/vehicles";
import { CarCard } from "@/components/car-card";
import { PageHeader } from "@/components/common/page-header";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Helper function untuk mendapatkan path logo yang benar
const getLogoPath = (brand: VehicleBrand): string => {
  if (brand === "All") {
    // Logo untuk tombol "All"
    return "/icon-filter/all.png";
  }
  // Menggunakan nama merek sebagai nama file logo (contoh: "toyota.png")
  return `/icon-filter/${brand.toLowerCase()}.png`;
};

export default function ArmadaPage() {
  const [activeFilter, setActiveFilter] = useState<VehicleBrand>("All");

  const filteredVehicles =
    activeFilter === "All"
      ? vehicles
      : vehicles.filter((v) => v.brand === activeFilter);

  return (
    <>
      <PageHeader
        title="Pilihan Armada"
        breadcrumb="Beranda / Armada"
        imageUrl="/background.webp"
        imageHint="car lineup showroom"
      />
      <div className="container py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Pilihan Mobil Terbaik Untuk Anda
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Temukan mobil yang paling sesuai dengan kebutuhan perjalanan Anda,
            dari mobil keluarga yang nyaman hingga sedan mewah untuk perjalanan
            bisnis.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {vehicleBrands.map((brand) => (
            <button
              key={brand}
              className={cn(
                "h-16 w-16 lg:h-20 lg:w-20 rounded-lg flex items-center justify-center transition-all duration-300 border-2 overflow-hidden",
                "bg-card/50 backdrop-blur-sm",
                activeFilter === brand
                  ? "border-primary shadow-lg scale-110"
                  : "border-border hover:border-primary hover:scale-105"
              )}
              onClick={() => setActiveFilter(brand)}
              aria-label={`Filter mobil ${brand}`}
            >
              <Image
                src={getLogoPath(brand)}
                alt={`Logo ${brand}`}
                data-ai-hint={`${brand.toLowerCase()} logo`}
                width={80}
                height={80}
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CarCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
