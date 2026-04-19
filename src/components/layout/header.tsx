"use client";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ThemeToggle } from "../common/theme-toggle";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/armada", label: "Armada" },
  { href: "/layanan", label: "Layanan" },

  { href: "/galeri", label: "Galeri" },
  { href: "/faq", label: "FAQ" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phoneNumber = "6282313680519";
  const message =
"Halo, saya dari website PT.VRN SEMARANG dan ingin bertanya.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Navbar>
      <NavBody>
        <Link href="/" className="relative z-20 flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80} // Ukuran baru
            height={80} // Ukuran baru
            className="h-10 w-10" // Kelas Tailwind yang sesuai
          />
          <span className="font-bold text-xl text-primary">
            PT.VRN SEMARANG
          </span>
        </Link>
        <NavItems
          items={navLinks.map((link) => ({
            name: link.label,
            link: link.href,
          }))}
        />
        <div className="flex items-center gap-2">
          <NavbarButton
            as="a"
            href={whatsappUrl}
            target="_blank"
            variant="primary"
          >
            Hubungi Kami
          </NavbarButton>
          <ThemeToggle />
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={66} // Ukuran baru
              height={66} // Ukuran baru
              className="h-9 w-9" // Kelas Tailwind yang sesuai
            />
            <span className="font-bold text-lg text-primary">
              PT.VRN SEMARANG
            </span>
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-lg text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="block">{link.label}</span>
            </Link>
          ))}
          <div className="flex w-full items-center gap-4 pt-4">
            <NavbarButton
              onClick={() => {
                window.open(whatsappUrl, "_blank");
                setIsMobileMenuOpen(false);
              }}
              variant="primary"
              className="flex-grow"
            >
              Hubungi Kami
            </NavbarButton>
            <ThemeToggle />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
