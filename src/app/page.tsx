 "use client";

import { HeroSection } from "@/components/home/hero-section";
import { AboutSummary } from "@/components/home/about-summary";
import { FeaturedCars } from "@/components/home/featured-cars";
import { WhyUs } from "@/components/home/why-us";
import { Testimonials } from "@/components/home/testimonials";
import { VisionMission } from "@/components/home/vision-mission";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <WhyUs />
      <FeaturedCars />
      <VisionMission />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
