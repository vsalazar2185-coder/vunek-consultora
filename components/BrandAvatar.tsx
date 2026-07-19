"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets, brand } from "@/lib/constants";

export function BrandAvatar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return undefined;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-15% 0px 0px 0px"
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      aria-hidden={!visible}
      aria-label={`Ir al formulario de contacto de ${brand.name}`}
      className={`fixed bottom-6 right-6 z-40 rounded-full transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesp-copper focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      href="#contacto"
      tabIndex={visible ? 0 : -1}
    >
      <span className="flex h-14 w-14 animate-breathe items-center justify-center rounded-full bg-vesp-navy shadow-soft ring-1 ring-white/15 sm:h-16 sm:w-16">
        <Image alt="" aria-hidden="true" className="h-8 w-auto sm:h-9" height={310} src={assets.iconWhite} width={340} />
      </span>
    </a>
  );
}
