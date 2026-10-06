import { ChefHat, BedDouble, WashingMachine, Bath, Car } from "lucide-react"
import { Reveal } from "@/components/reveal"

const espacios = [
  {
    icon: ChefHat,
    title: "Cocina integral de lujo ampliada",
    description:
      "En el primer nivel, junto a la sala y el comedor independientes, además de un medio baño de visitas.",
  },
  {
    icon: BedDouble,
    title: "2 recámaras + recámara máster",
    description:
      "Dos recámaras en el segundo nivel y una recámara máster en el tercer nivel, con área de tocador propia y amplias ventanas.",
  },
  {
    icon: WashingMachine,
    title: "Área de lavado oculta",
    description:
      "Detrás de una puerta tipo librero, en el segundo nivel: un detalle de diseño que mantiene el espacio limpio y ordenado.",
  },
  {
    icon: Bath,
    title: "2.5 baños",
    description:
      "Baño completo en el segundo nivel, baño completo con tocador en la recámara máster, y medio baño en planta baja.",
  },
  {
    icon: Car,
    title: "Estacionamiento para 2 autos",
    description:
      "Cochera techada con capacidad para dos vehículos, con acceso directo a la privada.",
  },
]

export function Espacios() {
  return (
    <section id="espacios" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Tres niveles con un diseño pensado para el día a día
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            3 recámaras y 2.5 baños, con un detalle de diseño poco común: área de
            lavado oculta tras una puerta tipo librero.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {espacios.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
