"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  position: "top" | "bottom"
}

export function WhatsAppButton({ position }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre tus servicios de diseño web y marketing digital para mi negocio en Huánuco.",
    )
    window.open(`https://wa.me/51955044084?text=${message}`, "_blank")
  }

  if (position === "top") {
    return (
      <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white shadow-lg animate-pulse font-semibold text-xs md:text-sm px-3 py-2 md:px-4 md:py-2"
          size="sm"
        >
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
          <span className="hidden sm:inline">Contactar</span>
          <span className="sm:hidden">Chat</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white shadow-2xl rounded-full w-14 h-14 md:w-16 md:h-16 animate-bounce hover:animate-none transition-all duration-300 touch-manipulation"
        size="lg"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
      </Button>
    </div>
  )
}
