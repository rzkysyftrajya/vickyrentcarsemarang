
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useLightbox } from "@/hooks/use-lightbox";

export function ImageLightbox() {
  const { isOpen, closeLightbox, imageUrl } = useLightbox();

  return (
    <AnimatePresence>
      {isOpen && imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative max-w-4xl max-h-[90vh] w-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <Image
              src={imageUrl}
              alt="Tampilan gambar diperbesar"
              width={1600}
              height={900}
              className="object-contain w-full h-full rounded-lg shadow-2xl"
              sizes="100vw"
            />
          </motion.div>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors z-50"
            aria-label="Tutup gambar"
          >
            <X className="h-6 w-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
