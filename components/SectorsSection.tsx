import { brand, sectors } from "@/lib/constants";

export function SectorsSection() {
  return (
    <section className="section-padding bg-[#F7F8FA]" id="sectores">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-vesp-copper">Sectores de aplicación</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-vesp-navy sm:text-4xl">
              Una metodología transversal para distintos contextos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-vesp-ink/74">
              {brand.name} no se limita a un sector. Su metodología se adapta al contexto donde exista una necesidad concreta,
              una relación de confianza y posibilidad real de implementación.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sectors.map(({ Icon, description, title }) => (
              <div className="flex min-h-[140px] items-start gap-4 rounded-lg border border-vesp-navy/10 bg-white p-5" key={title}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-vesp-navy/6 text-vesp-navy">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-vesp-navy">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-vesp-ink/68">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
