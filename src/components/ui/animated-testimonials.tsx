"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLightbox } from "@/hooks/use-lightbox";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  hint: string;
  rating: number;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials.length]);


  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [active, autoplay]);

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 items-center">
        <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 20,
                    rotate: rotations[index] || 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.95,
                    y: isActive(index) ? 0 : 40,
                    rotate: isActive(index) ? 0 : rotations[index] || 0,
                    zIndex: isActive(index)
                      ? testimonials.length
                      : testimonials.length - Math.abs(active - index),
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: -20,
                    rotate: rotations[index] || 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <button onClick={() => openLightbox(testimonial.avatar)} className="block w-full h-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      data-ai-hint={testimonial.hint}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover shadow-2xl"
                    />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
        </div>
        <div className="flex flex-col justify-between py-4">
            <AnimatePresence mode="wait">
                 <motion.div
                    key={active}
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -20,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col justify-between"
                  >
                    <div>
                        <motion.p 
                          className="mt-8 text-lg text-muted-foreground"
                          initial={{ opacity: 0, y: 10}}
                          animate={{ opacity: 1, y: 0}}
                          transition={{ duration: 0.5, delay: 0.2}}
                        >
                          "{testimonials[active].quote}"
                        </motion.p>
                         <motion.div 
                           initial={{ opacity: 0, y: 10}}
                           animate={{ opacity: 1, y: 0}}
                           transition={{ duration: 0.5, delay: 0.4}}
                         >
                            <h3 className="text-xl font-bold text-foreground mt-8">
                            {testimonials[active].name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                            {testimonials[active].title}
                            </p>
                        </motion.div>
                    </div>
                  </motion.div>
            </AnimatePresence>

          <div className="flex gap-4 pt-12 md:pt-8">
            <button
              onClick={handlePrev}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-foreground transition-transform duration-300 group-hover/button:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-foreground transition-transform duration-300 group-hover/button:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
