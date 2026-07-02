import Image from "next/image";
import { assets, methodSteps } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export function MethodSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-vesp-navy text-white" id="metodo">
      <Image
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-9 w-[980px] max-w-none -translate-x-1/2 opacity-26"
        height={180}
        src={assets.horizon}
        width={1600}
      />
      <div className="section-shell relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-vesp-copper">Método propio</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Método VESP</h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            Una metodología para pasar de la estrategia a la implementación.
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 lg:grid-cols-4">
          <div className="copper-line absolute left-8 right-8 top-14 hidden h-px lg:block" />
          {methodSteps.map((step) => (
            <Card className="relative min-h-[280px] p-6" key={step.letter} tone="dark">
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
