import Image from "next/image";
import { ArrowDownRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { assets, brand } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero-bg relative isolate overflow-hidden text-white" id="inicio">
      <div className="absolute inset-x-0 top-0 h-1 bg-vesp-copper" />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/2 z-0 w-[1200px] max-w-none -translate-x-1/2 opacity-70"
        height={180}
        priority
        src={assets.horizon}
        width={1600}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-20 z-0 hidden w-[430px] max-w-[80vw] opacity-16 md:block md:right-[4vw] md:w-[520px]"
        height={310}
        priority
        src={assets.icon}
        width={340}
      />

      <div className="section-shell relative z-10 flex min-h-[72svh] items-center py-12 sm:py-14">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-white/16 bg-white/8 px-4 py-2 text-sm font-medium text-white/82">
            <span className="h-2 w-2 rounded-full bg-vesp-copper" />
            {brand.identity}
          </div>

          <h1 className="text-6xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">{brand.name}</h1>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
            {brand.descriptor}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">{brand.promise}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/88">
            <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-vesp-copper" />
            {brand.motto}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">
              Agendar una reunión
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href="#metodo" variant="secondary">
              Conocer el Método VESP
              <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
