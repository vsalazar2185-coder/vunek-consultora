import { brand, valuePillars } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export function ValueProposition() {
  return (
    <section className="section-padding bg-white" id="valor">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-vesp-copper">Propuesta de valor</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-vesp-navy sm:text-4xl">
              Transformamos desafíos organizacionales en soluciones aplicables.
            </h2>
            <p className="mt-6 text-lg leading-8 text-vesp-ink/74">{brand.commercial}</p>
          </div>

          <div className="grid gap-4">
            {valuePillars.map(({ Icon, description, title }) => (
              <Card className="flex min-h-[148px] gap-5 p-6 shadow-sm" key={title}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-vesp-green/10 text-vesp-green">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-vesp-navy">{title}</h3>
                  <p className="mt-3 leading-7 text-vesp-ink/68">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
