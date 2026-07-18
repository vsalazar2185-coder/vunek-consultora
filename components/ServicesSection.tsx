import { services } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export function ServicesSection() {
  return (
    <section className="section-padding bg-white" id="servicios">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-vesp-copper">Servicios</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-vesp-navy sm:text-4xl">
            Líneas de servicio
          </h2>
          <p className="mt-5 text-lg leading-8 text-vesp-ink/72">
            Intervenciones diseñadas para ordenar decisiones, activar capacidades y acompañar la puesta en marcha.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map(({ Icon, deliverable, description, title }) => (
            <Card className="min-h-[260px] p-6 shadow-sm" key={title}>
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-vesp-copper/10 text-vesp-copper">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-vesp-navy">{title}</h3>
                  <p className="mt-5 rounded-md bg-vesp-navy/5 p-4 text-sm font-medium leading-6 text-vesp-navy/78">
                    {deliverable}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
