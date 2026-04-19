import Link from 'next/link';
import { vehicles } from "@/lib/vehicles";
import { CarCard } from "../car-card";
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function FeaturedCars() {
  const featuredVehicles = vehicles.filter(v => v.badge).slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in-up">
            <p className="font-semibold text-primary uppercase tracking-wider">PILIHAN ARMADA</p>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-foreground">Armada Populer Kami</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Pilihan mobil yang paling sering dipesan oleh pelanggan setia kami. Kualitas dan kenyamanan terjamin.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredVehicles.map((vehicle, index) => (
            <div key={vehicle.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CarCard vehicle={vehicle} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="group">
                <Link href="/armada">Lihat Semua Armada <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
