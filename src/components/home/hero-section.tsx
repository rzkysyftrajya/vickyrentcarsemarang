"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLightbox } from "@/hooks/use-lightbox";

export function HeroSection() {
  const { openLightbox } = useLightbox();
  const imageUrl = "/hero-section.webp";

  return (
    <section className="relative bg-background overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-muted">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-muted">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-muted">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="container px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
          {"SELAMAT DATANG DI PT.VRN SEMARANG"

            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-red-500"
                style={{ textShadow: "0 0 10px rgba(239, 68, 68, 0.6)" }}
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 pt-8 text-center text-lg font-normal text-muted-foreground"
        >
Perjalanan aman dan nyaman dengan harga rental mobil termurah di
          Semarang. Kami menyediakan armada berkualitas, lepas kunci atau dengan
          supir untuk segala kebutuhan Anda.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="group">
            <Link href="/armada">
              Lihat Semua Armada{" "}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/kontak">Hubungi Kami</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            ease: "easeInOut",
          }}
          className="relative z-0 mt-14 md:mt-20 rounded-3xl border bg-secondary p-2 shadow-2xl"
        >
          <button
            className="w-full overflow-hidden rounded-xl border block"
            onClick={() => openLightbox(imageUrl)}
          >
            <Image
              src={imageUrl}
              width={1920}
              height={1080}
              className="aspect-[16/9] h-auto w-full object-cover"
              alt="Video placeholder"
              data-ai-hint="car driving scenic"
              priority
              fetchPriority="high"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
