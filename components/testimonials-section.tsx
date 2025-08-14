import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "María González",
    business: "Restaurante El Sabor Huanuqueño",
    content:
      "Desde que tengo mi landing page, mis pedidos por WhatsApp aumentaron 300%. Los clientes ahora me encuentran fácilmente y pueden ver todo mi menú online.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Carlos Mendoza",
    business: "Ferretería San Martín",
    content:
      "La página web me ayudó a llegar a más clientes en Huánuco. Ahora recibo consultas todos los días por WhatsApp y mis ventas han crecido significativamente.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ana Rojas",
    business: "Boutique Elegancia",
    content:
      "Mi negocio de ropa ahora tiene presencia online profesional. Las clientas pueden ver mis productos y contactarme directamente. ¡Excelente inversión!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-5xl text-foreground mb-3 md:mb-4 px-2">
            Lo que Dicen Nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="font-serif text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Negocios reales de Huánuco que han transformado sus ventas con nuestras landing pages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/30" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="font-serif text-sm md:text-base text-card-foreground mb-4 md:mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 object-cover border-2 border-primary/20 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-sans font-semibold text-sm md:text-base text-card-foreground truncate">
                      {testimonial.name}
                    </h4>
                    <p className="font-serif text-xs md:text-sm text-primary font-medium truncate">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
