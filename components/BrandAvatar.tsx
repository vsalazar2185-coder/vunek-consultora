"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets, brand } from "@/lib/constants";

export function BrandAvatar() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <a
      aria-label={`Ir al formulario de contacto de ${brand.name}`}
      className={`fixed bottom-6 right-6 z-40 rounded-full transition-all duration-700 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesp-copper focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 ${
        ready ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      href="#contacto"
    >
      <span className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-vesp-copper/30" />
        <span className="relative flex h-full w-full animate-presenter items-center justify-center rounded-full bg-vesp-navy shadow-soft ring-1 ring-white/15">
          <Image alt="" aria-hidden="true" className="h-8 w-auto sm:h-9" height={310} src={assets.iconWhite} width={340} />
        </span>
      </span>
    </a>
  );
}
