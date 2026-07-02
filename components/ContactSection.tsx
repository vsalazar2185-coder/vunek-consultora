"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { brand, contactNeeds, formspreeId } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      });

      if (!response.ok) {
        throw new Error("Formspree respondió con un error.");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-padding bg-white" id="contacto">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-vesp-copper">Contacto</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-vesp-navy sm:text-4xl">
              Conversemos sobre el próximo desafío.
            </h2>
            <p className="mt-6 text-lg leading-8 text-vesp-ink/74">
              Si tu organización necesita ordenar su estrategia, activar transformación digital, mejorar su gestión o
              implementar soluciones aplicables, podemos iniciar con una conversación exploratoria.
            </p>

            <a
              className="mt-8 inline-flex items-center gap-3 rounded-md border border-vesp-navy/12 px-4 py-3 font-semibold text-vesp-navy transition hover:border-vesp-copper hover:text-vesp-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vesp-copper focus-visible:ring-offset-2"
              href={`mailto:${brand.email}`}
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
              {brand.email}
            </a>

            <p className="mt-4 text-sm leading-6 text-vesp-ink/58">
              También puedes escribirnos directamente a este correo.
            </p>
          </div>

          <form className="rounded-lg border border-vesp-navy/10 bg-[#F7F8FA] p-5 shadow-soft sm:p-7" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-vesp-navy">
                Nombre
                <input className="form-field" name="nombre" placeholder="Tu nombre" required type="text" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-vesp-navy">
                Organización
                <input className="form-field" name="organizacion" placeholder="Nombre de la organización" required type="text" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-vesp-navy">
                Cargo
                <input className="form-field" name="cargo" placeholder="Tu cargo" required type="text" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-vesp-navy">
                Correo
                <input className="form-field" name="correo" placeholder="correo@organizacion.com" required type="email" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-vesp-navy">
                País
                <input className="form-field" name="pais" placeholder="País" required type="text" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-vesp-navy">
                Tipo de necesidad
                <select className="form-field" defaultValue="" name="necesidad" required>
                  <option disabled value="">
                    Seleccionar
                  </option>
                  {contactNeeds.map((need) => (
                    <option key={need} value={need}>
                      {need}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-vesp-navy sm:col-span-2">
                Mensaje
                <textarea
                  className="form-field min-h-[148px] resize-y"
                  name="mensaje"
                  placeholder="Cuéntanos brevemente el desafío o contexto."
                  required
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Button disabled={status === "sending"} type="submit">
                {status === "sending" ? "Enviando..." : "Solicitar reunión"}
                <Send aria-hidden="true" className="h-4 w-4" />
              </Button>
              {status === "sent" ? (
                <p className="rounded-md bg-vesp-green/10 px-4 py-3 text-sm font-semibold text-vesp-green" role="status">
                  Solicitud enviada. Te responderemos a la brevedad.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
                  No pudimos enviar tu solicitud. Escríbenos directamente a {brand.email}.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
