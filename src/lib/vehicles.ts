export type PriceOptions = {
  manual?: number;
  matic?: number;
  withDriver?: number;
};

export type VehicleBrand =
  | "Toyota"
  | "Mitsubishi"
  | "Suzuki"
  | "Honda"
  | "Daihatsu"
  | "Isuzu"
  | "All";

export interface Vehicle {
  id: string;
  name: string;
  brand: VehicleBrand;
  type: "Sedan" | "SUV" | "MPV" | "Hatchback" | "Luxury" | "Van" | "Pick-up";
  transmission: "Automatic" | "Manual" | "Automatic & Manual";
  seats: number;
  price: PriceOptions;
  image: string;
  badge?: "Premium" | "Luxury";
}

export const vehicleBrands: VehicleBrand[] = ["All", "Toyota", "Mitsubishi", "Suzuki", "Honda", "Daihatsu", "Isuzu"];

export const vehicles: Vehicle[] = [
  // ===== TOYOTA =====
  {
    id: "hiace-premio-luxury",
    name: "Hiace Premio Luxury",
    brand: "Toyota",
    type: "Luxury",
    transmission: "Manual",
    seats: 10,
    price: { withDriver: 2500000 },
    image: "/armada/hiace-premio.webp",
    badge: "Luxury",
  },
  {
    id: "toyota-alphard-new",
    name: "Toyota Alphard New",
    brand: "Toyota",
    type: "Luxury",
    transmission: "Automatic",
    seats: 6,
    price: { withDriver: 3000000 },
    image: "/armada/toyota-alphard-new.webp",
    badge: "Luxury",
  },
  {
    id: "toyota-innova-reborn",
    name: "Toyota Innova Reborn",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 550000, matic: 600000, withDriver: 900000 },
    image: "/armada/toyota-innova-reborn.webp",
    badge: "Premium",
  },
  {
    id: "toyota-hiace-premio",
    name: "Toyota Hiace Premio",
    brand: "Toyota",
    type: "Van",
    transmission: "Manual",
    seats: 12,
    price: { withDriver: 1500000 },
    image: "/armada/hiace-premio.webp",
    badge: "Premium",
  },
  {
    id: "toyota-hiace-commuter",
    name: "Toyota Hiace Commuter",
    brand: "Toyota",
    type: "Van",
    transmission: "Manual",
    seats: 15,
    price: { withDriver: 1300000 },
    image: "/armada/toyota-hiace-commuter.webp",
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    type: "SUV",
    transmission: "Automatic",
    seats: 7,
    price: { withDriver: 1300000 },
    image: "/armada/toyota-fortuner.webp",
    badge: "Premium",
  },
  {
    id: "toyota-avanza",
    name: "Toyota All New Avanza",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/toyota-all-new-avanza.webp",
  },
  {
    id: "toyota-rush",
    name: "Toyota Rush",
    brand: "Toyota",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/toyota-rush.webp",
  },
  {
    id: "toyota-hilux",
    name: "Toyota Hilux Double Cabin",
    brand: "Toyota",
    type: "Pick-up",
    transmission: "Manual",
    seats: 5,
    price: { withDriver: 1600000 },
    image: "/armada/toyota-hilux-double-cabin.webp",
    badge: "Premium",
  },
  {
    id: "toyota-agya",
    name: "Toyota Agya",
    brand: "Toyota",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/toyota-agya.webp",
  },
  {
    id: "toyota-calya",
    name: "Toyota Calya",
    brand: "Toyota",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/toyota-calya.webp",
  },

  // ===== MITSUBISHI =====
  {
    id: "mitsubishi-xpander",
    name: "Mitsubishi Xpander",
    brand: "Mitsubishi",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/mitsubishi-xpander.webp",
  },
  {
    id: "mitsubishi-pajero",
    name: "Mitsubishi Pajero",
    brand: "Mitsubishi",
    type: "SUV",
    transmission: "Automatic",
    seats: 7,
    price: { withDriver: 1500000 },
    image: "/armada/mitsubishi-pajero.webp",
    badge: "Luxury",
  },

  // ===== SUZUKI =====
  {
    id: "suzuki-ertiga-hybrid",
    name: "Suzuki Ertiga Hybrid",
    brand: "Suzuki",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/suzuki-ertiga-hybrid.webp",
  },
  {
    id: "suzuki-xl7",
    name: "Suzuki XL7",
    brand: "Suzuki",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/suzuki-xl7.webp",
  },

  // ===== HONDA =====
  {
    id: "honda-brio",
    name: "Honda Brio",
    brand: "Honda",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/honda-brio.webp",
  },

  // ===== DAIHATSU =====
  {
    id: "daihatsu-terios",
    name: "Daihatsu Terios",
    brand: "Daihatsu",
    type: "SUV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 400000, matic: 450000, withDriver: 700000 },
    image: "/armada/daihatsu-terios.webp",
  },
  {
    id: "daihatsu-ayla",
    name: "Daihatsu Ayla",
    brand: "Daihatsu",
    type: "Hatchback",
    transmission: "Automatic & Manual",
    seats: 5,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/daihatsu-ayla.webp",
  },
  {
    id: "daihatsu-sigra",
    name: "Daihatsu Sigra",
    brand: "Daihatsu",
    type: "MPV",
    transmission: "Automatic & Manual",
    seats: 7,
    price: { manual: 300000, matic: 350000, withDriver: 600000 },
    image: "/armada/daihatsu-sigra.webp",
  },

  // ===== ISUZU =====
  {
    id: "isuzu-elf-minibus",
    name: "Isuzu Elf Minibus",
    brand: "Isuzu",
    type: "Van",
    transmission: "Manual",
    seats: 18,
    price: { withDriver: 1400000 },
    image: "/armada/isuzu-elf-minibus.webp",
  },
];