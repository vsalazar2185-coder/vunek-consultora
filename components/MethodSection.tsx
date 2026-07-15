import { methodSteps } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { NetworkMotif } from "@/components/NetworkMotif";

export function MethodSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-vesp-navy text-white" id="metodo">
      <NetworkMotif className="absolute left-1/2 top-9 w-[980px] max-w-none -translate-x-1/2 opacity-26" />
      <div className="section-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-vesp-copper">Metodología propia</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Metodología VUNEK</h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            La Metodología VUNEK es un sistema integral de intervención diseñado para transformar desafíos
            organizacionales en soluciones aplicables, capacidades instaladas y resultados medibles.
          </p>
          <p className="mt-4 leading-7 text-white/68">
            Integra diagnóstico estratégico, diseño de soluciones, transformación digital, gestión organizacional,
            implementación acompañada y evaluación de resultados.
          </p>
        </div>

        <div className="mt-10 max-w-3xl rounded-lg border border-vesp-copper/30 bg-vesp-navyDeep p-6">
          <p className="text-xl font-semibold leading-tight text-vesp-copper">
            La Metodología VUNEK se operacionaliza mediante el Ciclo VESP.
          </p>
          <p className="mt-3 leading-7 text-white/68">
            El Ciclo VESP organiza cada intervención en cuatro etapas conectadas. No constituye una metodología
            diferente: es la estructura que permite aplicar la Metodología VUNEK desde la comprensión del desafío
            hasta la puesta en marcha y mejora continua.
          </p>
        </div>

        <p className="mt-12 text-sm font-semibold text-vesp-copper">Ciclo VESP</p>

        <div className="relative mt-4 grid gap-4 lg:grid-cols-4">
          <div className="copper-line absolute left-8 right-8 top-14 hidden h-px lg:block" />
          {methodSteps.map((step) => (
            <Card className="relative min-h-[320px] p-6" key={step.letter} tone="dark">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-md border border-vesp-copper/50 bg-vesp-navyDeep text-3xl font-semibold text-vesp-copper">
                {step.letter}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/68">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
