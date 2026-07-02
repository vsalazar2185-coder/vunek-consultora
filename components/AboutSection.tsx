import Image from "next/image";
import { assets, brand } from "@/lib/constants";

export function AboutSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-vesp-navyDeep text-white" id="sobre-vesp">
      <Image
        alt=""
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 w-[1180px] max-w-none -translate-x-1/2 opacity-44"
        height={260}
        src={assets.horizon}
        width={1600}
      />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex items-center gap-5">
            <Image
              alt="Ícono VESP"
              className="h-auto w-28 rounded-lg bg-white p-4 shadow-soft sm:w-36"
              height={310}
              src={assets.icon}
              width={340}
            />
            <div>
              <p className="text-sm font-semibold text-vesp-copper">Sobre VESP</p>
              <p className="mt-2 text-2xl font-semibold">{brand.name}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{brand.aboutHeading}</h2>
            <p className="mt-6 text-lg leading-8 text-white/74">{brand.aboutParagraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
