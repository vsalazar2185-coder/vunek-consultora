"use client";

import Image from "next/image";
import { CalendarCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { assets, navItems } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-vesp-navy/10 bg-white/88 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <a aria-label="VESP inicio" className="flex items-center" href="#inicio">
          <Image
            alt="VESP"
            className="h-auto w-[138px]"
            height={320}
            priority
            src={assets.logo}
            width={1140}
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-sm text-sm font-medium text-vesp-navy/74 transition hover:text-vesp-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesp-copper focus-visible:ring-offset-2"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="min-h-10 px-4 py-2" href="#contacto">
            <CalendarCheck aria-hidden="true" className="h-4 w-4" />
            Agendar reunión
          </Button>
        </div>

        <button
          aria-controls="menu-movil"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-vesp-navy/12 text-vesp-navy transition hover:border-vesp-copper hover:text-vesp-copper lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-vesp-navy/10 bg-white lg:hidden" id="menu-movil">
          <nav aria-label="Navegación móvil" className="section-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                className="rounded-md px-2 py-3 text-base font-medium text-vesp-navy/78 transition hover:bg-vesp-navy/5 hover:text-vesp-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesp-copper focus-visible:ring-offset-2"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-3 w-full" href="#contacto">
              <CalendarCheck aria-hidden="true" className="h-4 w-4" />
              Agendar reunión
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
