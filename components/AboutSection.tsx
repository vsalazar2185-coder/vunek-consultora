import Image from "next/image";
import { assets, brand, values } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { NetworkMotif } from "@/components/NetworkMotif";

export function AboutSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-vesp-navyDeep text-white" id="sobre-vesp">
      <NetworkMotif className="absolute bottom-10 left-1/2 w-[1180px] max-w-none -translate-x-1/2 opacity-44" />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex items-center gap-5">
            <Image
              alt={`Ícono ${brand.name}`}
              className="h-auto w-28 rounded-lg bg-white p-4 shadow-soft sm:w-36"
              height={310}
              src={assets.icon}
              width={340}
            />
            <div>
              <p className="text-sm font-semibold text-vesp-copper">Sobre {brand.name}</p>
              <p className="mt-2 text-2xl font-semibold">{brand.name}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{brand.aboutHeading}</h2>
            {brand.aboutParagraphs.map((paragraph) => (
              <p className="mt-5 text-lg leading-8 text-white/74" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold text-vesp-copper">Propósito institucional</p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Card className="p-6" tone="dark">
              <h3 className="text-xl font-semibold">Misión</h3>
              <p className="mt-3 leading-7 text-white/74">{brand.mission}</p>
            </Card>
            <Card className="p-6" tone="dark">
              <h3 className="text-xl font-semibold">Visión</h3>
              <p className="mt-3 leading-7 text-white/74">{brand.vision}</p>
            </Card>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-semibold text-vesp-copper">Nuestros valores</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {values.map(({ Icon, description, title }) => (
              <Card className="flex gap-4 p-5" key={title} tone="dark">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-vesp-copper">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/68">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
