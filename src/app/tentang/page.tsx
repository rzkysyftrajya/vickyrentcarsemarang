import type { Metadata } from 'next';
import { TentangPageClient } from './tentang-client';

export const metadata: Metadata = {
  title: 'Tentang Kami - Profil PT.VRN SEMARANG | Rental Mobil Semarang Terpercaya',
  description: 'Kenali lebih dalam tentang PT.VRN SEMARANG, partner perjalanan terpercaya Anda di Semarang. Kami berkomitmen pada armada berkualitas, layanan profesional, dan kepuasan pelanggan.',
};

export default function TentangPage() {
  return <TentangPageClient />;
}
