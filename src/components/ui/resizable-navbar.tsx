"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  isScrolled?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  isScrolled?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(true); // Default to true so it's visible on load
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // Show navbar when scrolling up or at the top
    if (latest < previous && latest > 100) {
      setVisible(true);
    } else if (latest <= 100) { // at the top
      setVisible(true);
    } else { // scrolling down
      setVisible(false);
    }
    setIsScrolled(latest > 20);
  });

  return (
    <motion.div
      ref={ref}
      animate={{
        y: visible ? 0 : -100,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "pt-0" : "pt-4 md:pt-6",
        className,
      )}
    >
      <div className="container px-4">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ isScrolled?: boolean }>,
                { isScrolled },
              )
            : child,
        )}
      </div>
    </motion.div>
  );
};

export const NavBody = ({ children, className, isScrolled }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: isScrolled ? "rgba(var(--background), 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" : "none",
        width: "100%",
        borderRadius: isScrolled ? "9999px" : "0px",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };


  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3 py-2"
          key={`link-${idx}`}
          href={item.link}
        >
          <motion.div
            layoutId="hovered"
            className={cn(
              "absolute -inset-1 rounded-full bg-card/80 backdrop-blur-sm shadow-lg border",
              !(hovered === idx || isActive(item.link)) && "hidden"
            )}
            style={{zIndex: 10}}
          />
          <span className={cn(
            "relative z-30 transition-colors",
            isActive(item.link) ? "text-primary" : "text-foreground hover:text-primary"
          )}>
            {item.name}
          </span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, isScrolled }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backgroundColor: isScrolled ? "rgba(var(--background), 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" : "none",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-lg px-4 py-2 lg:hidden",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-background p-4 shadow-lg",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="relative z-50 p-2">
        <AnimatePresence initial={false} mode="wait">
            <motion.div
                key={isOpen ? "x" : "menu"}
                initial={{ rotate: isOpen ? -90 : 0, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: isOpen ? 0 : -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {isOpen ? 
                    <IconX className="h-6 w-6 text-foreground" /> : 
                    <IconMenu2 className="h-6 w-6 text-foreground" />
                }
            </motion.div>
        </AnimatePresence>
    </button>
  );
};

export const NavbarLogo = ({ children }: { children?: React.ReactNode }) => {
  return (
     <div className="relative z-20 flex items-center gap-2">
      {children}
    </div>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-sm font-medium relative cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 inline-block text-center z-20";

  const variantStyles = {
    primary: "bg-primary text-primary-foreground shadow-md",
    secondary: "bg-transparent text-foreground",
    dark: "bg-black text-white",
    gradient: "bg-gradient-to-r from-primary to-accent text-white shadow-lg",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
