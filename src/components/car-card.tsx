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
import { cn } from "@/lib/utils";
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
      notation: "compact",
    }).format(price);
  };

  return (
    <div className="rounded-xl p-3 text-center bg-secondary/40 backdrop-blur-sm flex flex-col justify-center h-full transition-colors hover:bg-secondary/60">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mb-1">{label}</p>
      <p className="font-bold text-primary text-xs md:text-sm truncate">
        {price ? (
          <>
            {formatPrice(price)}
            {hari && (
              <span className="text-xs font-normal text-muted-foreground ml-1">
                /hari
              </span>
            )}
          </>
        ) : (
"Info lebih lanjut hubungi kami"
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
    <Card className="group w-full h-full overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col bg-card">
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-muted/10">
        {vehicle.badge && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-lg px-3 py-1 text-[10px] font-bold uppercase tracking-wider border-none">
              {vehicle.badge}
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-contain cursor-pointer p-0 transition-transform duration-700 scale-110 group-hover:scale-125"
            onClick={() => openLightbox(vehicle.image)}
          />
        </div>
      </div>

      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{vehicle.brand}</p>
          <CardTitle className="text-xl md:text-2xl font-bold line-clamp-1">{vehicle.name}</CardTitle>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground/80 mb-6 pb-4 border-b">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{vehicle.seats} Kursi</span>
            </div>
            <div className="flex items-center gap-1">
              <Cog className="w-4 h-4" />
              <span>{vehicle.transmission}</span>
            </div>
            {vehicle.price.withDriver && (
              <div className="flex items-center gap-1">
                <UserCheck className="w-4 h-4" />
                <span>Sopir Tersedia</span>
              </div>
            )}
          </div>
          {Object.keys(vehicle.price).length === 0 ? (
            <div className="text-center py-6 text-muted-foreground text-sm border rounded-lg border-dashed">
              Info lebih lanjut silahkan hubungi kami
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {vehicle.price.manual && (
                <PriceBox label="Manual" price={vehicle.price.manual} />
              )}
              {vehicle.price.matic && (
                <PriceBox label="Matic" price={vehicle.price.matic} />
              )}
              {vehicle.price.withDriver && (
                <div className={cn(
                  "col-span-1",
                  (vehicle.price.manual && vehicle.price.matic) ? "col-span-2" : ""
                )}>
                  <PriceBox label="Dengan Sopir" price={vehicle.price.withDriver} hari={false} />
                </div>
              )}
            </div>
          )}
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button asChild size="lg" className="w-full rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Pesan via WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
