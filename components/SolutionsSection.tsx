import { Check } from "lucide-react";
import { solutionCategories } from "@/lib/constants";

export function SolutionsSection() {
  return (
    <section className="section-padding bg-vesp-green text-white" id="soluciones">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-vesp-copper">Catálogo de soluciones</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Diseñamos e implementamos soluciones que fortalecen capacidades reales en la organización.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {solutionCategories.map(({ Icon, category, items }) => (
            <div className="rounded-lg border border-white/14 bg-white/[0.07] p-6" key={category}>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-vesp-copper">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{category}</h3>
              </div>
              <ul className="mt-5 grid gap-2.5">
                {items.map((item) => (
                  <li className="flex items-start gap-2.5 text-white/78" key={item}>
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-vesp-copper" />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
