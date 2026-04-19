import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
  imageUrl: string;
  imageHint: string;
}

export function PageHeader({ title, breadcrumb, imageUrl, imageHint }: PageHeaderProps) {
  return (
    <section className="relative h-72 md:h-80 w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 -z-10">
            <Image
            src={imageUrl}
            alt={`Header halaman ${title} - PT.VRN SEMARANG`}
            data-ai-hint={imageHint}
            fill
            className="object-cover"
            priority
            />
            <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container pt-16">
            <p className="text-sm uppercase tracking-widest text-gray-300">{breadcrumb}</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-bold">{title}</h1>
        </div>
    </section>
  );
}
