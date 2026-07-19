"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assets, brand } from "@/lib/constants";

const quickReplies = [
  { label: "Agendar una reunión", href: "#contacto" },
  { label: "Conocer la metodología", href: "#metodo" },
  { label: "Ver servicios", href: "#servicios" },
  { label: "Escribir un mensaje", href: "#contacto" }
];

export function BrandAvatar() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  function handleSelect(href: string) {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-700 ease-out sm:bottom-8 sm:right-8 ${
        ready ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {open ? (
        <div
          aria-label={`Chat de ${brand.name}`}
          className="w-[300px] overflow-hidden rounded-2xl border border-vesp-navy/10 bg-white shadow-soft sm:w-80"
          role="dialog"
        >
          <div className="flex items-center gap-3 bg-vesp-navy px-4 py-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <Image alt="" aria-hidden="true" className="h-5 w-auto" height={310} src={assets.iconWhite} width={340} />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{brand.name}</p>
              <p className="text-xs text-white/68">Normalmente responde en el día</p>
            </div>
            <button
              aria-label="Cerrar chat"
              className="rounded-sm text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto px-4 py-4">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-vesp-navy/5 px-3.5 py-2.5 text-sm leading-6 text-vesp-ink">
              Hola 👋 Soy el asistente de {brand.name}. ¿En qué podemos ayudarte hoy?
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {quickReplies.map((item) => (
                <button
                  className="flex items-center justify-between gap-2 rounded-full border border-vesp-navy/12 px-3.5 py-2 text-left text-sm font-medium text-vesp-navy transition hover:border-vesp-copper hover:text-vesp-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesp-copper"
                  key={item.label}
                  onClick={() => handleSelect(item.href)}
                  type="button"
                >
                  {item.label}
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <button
        aria-expanded={open}
        aria-label={open ? "Cerrar chat" : `Abrir chat de ${brand.name}`}
        className="relative flex h-14 w-14 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesp-copper focus-visible:ring-offset-2 sm:h-16 sm:w-16"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {!open ? <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-vesp-copper/30" /> : null}
        <span
          className={`relative flex h-full w-full items-center justify-center rounded-full bg-vesp-navy shadow-soft ring-1 ring-white/15 ${
            open ? "" : "animate-presenter"
          }`}
        >
          {open ? (
            <X aria-hidden="true" className="h-6 w-6 text-white" />
          ) : (
            <Image alt="" aria-hidden="true" className="h-8 w-auto sm:h-9" height={310} src={assets.iconWhite} width={340} />
          )}
        </span>
      </button>
    </div>
  );
}
