import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, MessageSquare, TrendingUp, Smartphone, Search, BarChart3 } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Globe,
    title: "Landing Pages Profesionales",
    description:
      "Diseño páginas web optimizadas para convertir visitantes en clientes, con diseño responsive y carga rápida.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: MessageSquare,
    title: "Integración WhatsApp Business",
    description:
      "Conecta directamente con tus clientes a través de WhatsApp para generar más ventas y brindar mejor atención.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital Estratégico",
    description: "Estrategias personalizadas para hacer crecer tu negocio online y alcanzar a más clientes en Huánuco.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Smartphone,
    title: "Diseño Mobile-First",
    description: "Todas las páginas están optimizadas para móviles, donde la mayoría de tus clientes navegan.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: Search,
    title: "SEO Local Huánuco",
    description: "Optimización para que tu negocio aparezca primero cuando busquen tus servicios en Huánuco.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    icon: BarChart3,
    title: "Análisis y Reportes",
    description: "Monitoreo constante del rendimiento de tu página para maximizar los resultados.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-5xl text-foreground mb-3 md:mb-4 px-2">
            Servicios que <span className="text-primary">Impulsan</span> tu Negocio
          </h2>
          <p className="font-serif text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Soluciones completas de diseño web y marketing digital especializadas para negocios locales en Huánuco
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 group"
            >
              <CardHeader className="text-center p-4 md:p-6">
                <div className="mx-auto mb-3 md:mb-4 p-2 md:p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-40 md:h-48 object-cover rounded-lg mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <CardTitle className="font-sans font-semibold text-lg md:text-xl text-card-foreground leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <CardDescription className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
