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
      notation: "compact",
    }).format(price);
  };

  return (
    <div className="border rounded-lg p-1.5 text-center bg-background/50 flex-1 min-w-[110px]">
      <p className="text-xs text-muted-foreground line-clamp-1">{label}</p>
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
<Card className="w-full h-full overflow-hidden hover:shadow-xl transition-all flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{vehicle.name}</CardTitle>
          {vehicle.badge && <Badge variant="secondary">{vehicle.badge}</Badge>}
        </div>
      </CardHeader>
<CardContent className="p-0 flex-1 flex flex-col">
        <div className="w-full aspect-[4/5] overflow-hidden">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            className="object-contain cursor-pointer hover:brightness-105 transition-all p-4"
            onClick={() => openLightbox(vehicle.image)}
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {vehicle.seats} seats
            </div>
              <div className="flex items-center gap-1">
                <Cog className="w-4 h-4" />
                {vehicle.transmission}
              </div>
              {vehicle.price.withDriver && (
                <div className="flex items-center gap-1">
                  <UserCheck className="w-4 h-4" />
                  With Driver
                </div>
            )}
          </div>
          {Object.keys(vehicle.price).length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Info lebih lanjut silahkan hubungi kami
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {vehicle.price.manual && (
                <PriceBox label="Manual" price={vehicle.price.manual} />
              )}
              {vehicle.price.matic && (
                <PriceBox label="Matic" price={vehicle.price.matic} />
              )}
              {vehicle.price.withDriver && (
                <PriceBox label="Dengan Sopir" price={vehicle.price.withDriver} hari={false} />
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6">
        <Button asChild size="lg" className="w-full">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Pesan via WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
