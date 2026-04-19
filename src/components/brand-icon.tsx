import { Square } from "lucide-react";
import type { VehicleBrand } from "@/lib/vehicles";

interface BrandIconProps extends React.SVGProps<SVGSVGElement> {
  brand: VehicleBrand;
}

const AllIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <div className="flex flex-col items-center gap-1">
      <Square {...props} />
      <span className="text-xs font-medium">Semua</span>
    </div>
);

const PlaceholderIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <Square {...props} />
);

const brandIcons: Record<VehicleBrand, React.FC<any>> = {
  All: AllIcon,
  Toyota: PlaceholderIcon,
  Mitsubishi: PlaceholderIcon,
  Suzuki: PlaceholderIcon,
  Honda: PlaceholderIcon,
  Daihatsu: PlaceholderIcon,
  Isuzu: PlaceholderIcon,
};

export const BrandIcon = ({ brand, ...props }: BrandIconProps) => {
  const Icon = brandIcons[brand] || Square;
  return <Icon {...props} />;
};
