import { solutions } from "@/lib/constants";

export function SolutionsSection() {
  return (
    <section className="section-padding bg-vesp-green text-white" id="soluciones">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-vesp-copper">Segunda etapa</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Soluciones aplicables para acelerar la transformación.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/74">
              No vendemos cursos genéricos. Diseñamos soluciones que instalan capacidades reales.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {solutions.map(({ Icon, title }) => (
              <div
                className="flex min-h-[96px] items-start gap-4 rounded-lg border border-white/14 bg-white/[0.07] p-4"
                key={title}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-vesp-copper">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <p className="font-semibold leading-6 text-white/90">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
