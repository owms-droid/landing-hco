"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

export function ContactSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Quiero una consulta gratuita para mi negocio. Me interesa una landing page profesional que aumente mis ventas.",
    )
    window.open(`https://wa.me/51987654321?text=${message}`, "_blank")
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-foreground mb-4">
              Elevemos Tu Negocio <span className="text-primary">Juntos</span>
            </h2>
            <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Agenda tu consulta gratuita y descubre cómo una landing page profesional puede transformar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="bg-card border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-sans font-semibold text-2xl text-card-foreground">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">+51 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Email</p>
                    <p className="text-muted-foreground">contacto@tudominio.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Huánuco, Perú</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Horario</p>
                    <p className="text-muted-foreground">Lun - Sáb: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="font-sans font-semibold text-2xl">¡Consulta Gratuita!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="font-serif text-primary-foreground/90 leading-relaxed">
                  Conversemos sobre tu negocio y cómo podemos ayudarte a aumentar tus ventas con una landing page
                  profesional.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Análisis gratuito de tu negocio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Propuesta personalizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Sin compromiso</span>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
