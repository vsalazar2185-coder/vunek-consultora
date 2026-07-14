import { AlertCircle } from "lucide-react";
import { brand, problemCards } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export function ProblemSection() {
  return (
    <section className="section-padding bg-[#F7F8FA]" id="problema">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-vesp-copper">Problemas que resolvemos</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-vesp-navy sm:text-4xl">
            Las organizaciones no necesitan más diagnósticos. Necesitan implementación.
          </h2>
          <p className="mt-6 text-lg leading-8 text-vesp-ink/74">
            Muchas instituciones y empresas tienen estrategias fragmentadas, procesos poco claros, baja adopción
            tecnológica, datos subutilizados y equipos que no logran sostener el cambio. {brand.name} acompaña esos
            desafíos desde el diagnóstico hasta la implementación medible.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((problem) => (
            <Card className="flex min-h-[124px] items-start gap-4 p-5 shadow-sm" key={problem}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-vesp-copper/10 text-vesp-copper">
                <AlertCircle aria-hidden="true" className="h-5 w-5" />
              </span>
              <p className="text-lg font-semibold leading-7 text-vesp-navy">{problem}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
