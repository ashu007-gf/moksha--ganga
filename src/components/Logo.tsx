import Image from "next/image";

export function Logo({ compact = false, inverted = false }: { compact?: boolean; inverted?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/70 bg-white shadow-sm">
        <Image
          src="/images/moksh-ganga-logo.jpeg"
          alt="Moksh Ganga logo"
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className={`text-sm font-black tracking-[0.18em] ${inverted ? "text-white" : "text-river-900"}`}>
            MOKSH GANGA
          </p>
          <p className={`text-xs font-semibold ${inverted ? "text-gold" : "text-saffron-700"}`}>
            From Karma to Dharma
          </p>
        </div>
      )}
    </div>
  );
}
