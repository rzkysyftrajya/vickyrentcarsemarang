
"use client";

import { createContext, useState, ReactNode } from 'react';
import { ImageLightbox } from './image-lightbox';

interface LightboxContextType {
  isOpen: boolean;
  imageUrl: string | null;
  openLightbox: (url: string) => void;
  closeLightbox: () => void;
}

export const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const openLightbox = (url: string) => {
    setImageUrl(url);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    // Delay clearing the URL to allow for exit animation
    setTimeout(() => setImageUrl(null), 300);
  };

  return (
    <LightboxContext.Provider value={{ isOpen, imageUrl, openLightbox, closeLightbox }}>
      {children}
      <ImageLightbox />
    </LightboxContext.Provider>
  );
};
