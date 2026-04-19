  "use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Cog, UserCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Vehicle, PriceOptions } from "@/lib/vehicles";
import { Badge } from "./ui/badge";
import { useLightbox } from "@/hooks/use-lightbox";

interface CarCardProps {
  vehicle: Vehicle;
}

const PriceBox = ({
  label,
  price,
  hari = true,
}: {
  label: string;
  price?: number | null;
  hari?: boolean;
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="border rounded-lg p-2 text-center bg-background/50 flex-1">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-bold text-primary text-sm">
        {price ? (
          <>
            {formatPrice(price)}
            {hari && (
              <span className="text-xs font-normal text-muted-foreground">
                /hari
              </span>
            )}
          </>
        ) : (
          "-"
        )}
      </p>
    </div>
  );
};

export function CarCard({ vehicle }: CarCardProps) {
  const { openLightbox } = useLightbox();

  const phoneNumber = "6282313680519";
  const message = `Halo, saya tertarik untuk menyewa mobil ${vehicle.name}. Apakah unit ini tersedia?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group bg-card">
      <CardHeader className="p-0">
          <button
          className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] xl:h-[500px] overflow-hidden block flex items-center justify-center bg-muted/50"
          onClick={() => openLightbox(vehicle.image)}
        >
          <Image
            src={vehicle.image}
            data-ai-hint={`${vehicle.type.toLowerCase()} ${vehicle.name.toLowerCase()}`}
            alt={`Rental mobil ${vehicle.name} di Semarang`}
            fill
            className="object-contain sm:object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 flex gap-1">
            {vehicle.badge && (
              <Badge variant="destructive" className="capitalize">
                {vehicle.badge}
              </Badge>
            )}
            <Badge variant="secondary" className="capitalize">
              {vehicle.type}
            </Badge>
          </div>
        </button>
      </CardHeader>
      <CardContent className="flex-grow p-5 space-y-4">
        <CardTitle className="text-xl font-bold text-foreground">
          {vehicle.name}
        </CardTitle>
        <div className="flex justify-between items-center text-sm text-muted-foreground border-t border-b py-3">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>{vehicle.seats} Kursi</span>
          </div>
          <div className="flex items-center gap-2">
            <Cog className="h-5 w-5 text-primary" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase">
            Harga Sewa (Lepas Kunci)
          </p>
          <div className="flex gap-2">
            <PriceBox label="Manual" price={vehicle.price.manual} />
            <PriceBox label="Matic" price={vehicle.price.matic} />
          </div>
          {vehicle.price.withDriver && (
            <div className="pt-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase flex items-center gap-1.5">
                <UserCheck className="w-3 h-3" /> Dengan Supir
              </p>
              <div className="flex gap-2 mt-1">
                <PriceBox
                  label="All In"
                  price={vehicle.price.withDriver}
                  hari={false}
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full" size="lg">
          <Link href={whatsappUrl} target="_blank">
            Booking Sekarang
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
