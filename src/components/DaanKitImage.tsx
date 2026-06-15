import Image from "next/image";

export function DaanKitImage({ label = "Daan Kit product image" }: { label?: string }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-saffron-200 bg-gradient-to-br from-white via-saffron-50 to-river-50 p-4 shadow-glow">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-lg bg-white">
        <Image
          src="/images/daan-kit-product.jpeg"
          alt={label}
          fill
          sizes="(max-width: 768px) 92vw, 430px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
