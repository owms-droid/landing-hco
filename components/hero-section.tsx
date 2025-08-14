"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  const handleCTAClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Quiero transformar mi negocio online con una landing page profesional. ¿Podemos conversar?",
    )
    window.open(`https://wa.me/51999999999?text=${message}`, "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      {/* Background Pattern - Optimized for mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 w-32 h-32 md:top-20 md:left-20 md:w-72 md:h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-4 w-40 h-40 md:bottom-20 md:right-20 md:w-96 md:h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Better mobile sizing */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 animate-fade-in">
            <Zap className="w-3 h-3 md:w-4 md:h-4" />
            Especialista en Marketing Digital
          </div>

          {/* Main Headline - Mobile-first typography */}
          <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground mb-4 md:mb-6 leading-tight px-2">
            Transforma Tu Negocio <span className="text-primary">Online</span>
          </h1>

          {/* Subheadline - Better mobile readability */}
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Diseño landing pages profesionales que convierten visitantes en clientes para negocios en{" "}
            <span className="text-primary font-semibold">Huánuco</span>
          </p>

          {/* Key Benefits - Mobile-optimized layout */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8 md:mb-12 px-4">
            <div className="flex items-center justify-center gap-2 text-foreground">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="font-medium text-sm md:text-base">Aumenta tus Ventas</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="font-medium text-sm md:text-base">Integración WhatsApp</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-foreground">
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="font-medium text-sm md:text-base">Resultados Garantizados</span>
            </div>
          </div>

          {/* CTA Button - Mobile-optimized sizing */}
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Comenzar Ahora
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </Button>

          {/* Trust Indicator - Mobile-friendly text */}
          <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6 px-4">
            ✅ Consulta gratuita • ✅ Respuesta en 24 horas • ✅ Soporte continuo
          </p>
        </div>
      </div>
    </section>
  )
}
