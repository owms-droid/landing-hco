import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-sans font-bold text-2xl mb-4">
              Biztum Digital <span className="text-primary">Marketing</span>
            </h3>
            <p className="font-serif text-background/80 leading-relaxed">
              Especialistas en crear landing pages que convierten visitantes en clientes para negocios locales en
              Huánuco.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 font-serif text-background/80">
              <li className="hover:text-primary transition-colors cursor-pointer">Landing Pages</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Marketing Digital</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Integración WhatsApp</li>
              <li className="hover:text-primary transition-colors cursor-pointer">SEO Local</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Diseño Responsive</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://web.facebook.com/profile.php?id=61579274706542"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-all duration-300 transform hover:scale-110"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/biztum.marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-all duration-300 transform hover:scale-110"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/oliver-modesto/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-all duration-300 transform hover:scale-110"
                aria-label="Síguenos en LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:biztum.marketing@gmail.com"
                className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-all duration-300 transform hover:scale-110"
                aria-label="Envíanos un email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-background/60 mt-4">
              Conecta con nosotros en redes sociales para ver nuestros últimos proyectos
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="font-serif text-background/60">
            © 2025 Biztum Digital Marketing. Todos los derechos reservados. | Desarrollado con ❤️ para negocios locales.
          </p>
        </div>
      </div>
    </footer>
  )
}
