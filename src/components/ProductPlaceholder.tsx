import { PackageOpen, Waves } from "lucide-react";

export function ProductPlaceholder({ label }: { label: string }) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-saffron-200 bg-gradient-to-br from-white via-saffron-50 to-river-50 p-6 shadow-glow">
      {/* Replace this block with the real Daan Kit product image when available. */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-river-100/70 to-transparent" />
      <div className="relative flex h-full min-h-[268px] flex-col items-center justify-center rounded-lg border border-dashed border-saffron-300 bg-white/60 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-saffron-100 text-saffron-700">
          <PackageOpen className="h-10 w-10" />
        </div>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-river-900">{label}</p>
        <Waves className="mt-4 h-8 w-8 text-river-500" />
      </div>
    </div>
  );
}
