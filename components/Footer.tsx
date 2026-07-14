import Image from "next/image";
import { assets, brand, footerCountries, navItems } from "@/lib/constants";

export function Footer() {
  const footerLinks = navItems.filter((item) => ["#inicio", "#metodo", "#servicios", "#contacto"].includes(item.href));

  return (
    <footer className="bg-vesp-navyDeep py-10 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Image alt="" aria-hidden="true" className="h-10 w-auto" height={268} src={assets.iconWhite} width={305} />
              <span className="text-2xl font-bold tracking-tight">{brand.name}</span>
            </div>
            <p className="mt-3 max-w-xl text-white/72">{brand.descriptor}</p>
            <p className="mt-2 font-semibold text-vesp-copper">{brand.motto}</p>
            <p className="mt-5 text-sm text-white/56">{footerCountries}</p>
          </div>

          <nav aria-label="Navegación de pie" className="flex flex-wrap gap-4 md:justify-end">
            {footerLinks.map((item) => (
              <a
                className="rounded-sm text-sm font-semibold text-white/72 transition hover:text-vesp-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesp-copper focus-visible:ring-offset-2 focus-visible:ring-offset-vesp-navyDeep"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
