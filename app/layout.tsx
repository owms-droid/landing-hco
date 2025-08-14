import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Providers } from "./providers"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Biztum Marketing - Landing Pages que Convierten | Tu Negocio Online",
  description:
    "Especialistas en diseño de landing pages para negocios en Huánuco. Aumenta tus ventas con páginas web profesionales integradas con WhatsApp. Marketing digital efectivo.",
  keywords: "diseño web Huánuco, landing pages, marketing digital, páginas web, WhatsApp business, ventas online",
  authors: [{ name: "Oliver Modesto" }],
  creator: "Oliver Modesto",
  publisher: "Biztum Marketing",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://biztum.netlify.app/",
    title: "Biztum Marketing - Landing Pages que Convierten",
    description:
      "Especialista en diseño de landing pages para negocios en Huánuco. Aumenta tus ventas con páginas web profesionales.",
    siteName: "Biztum Marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biztum Marketing - Landing Pages que Convierten",
    description: "Especialista en diseño de landing pages para negocios en Huánuco.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function hideNextBadge() {
                  const style = document.createElement('style');
                  style.innerHTML = \`
                    #__next-build-watcher,
                    [data-nextjs-dialog],
                    .nextjs-container {
                      display: none !important;
                      opacity: 0 !important;
                      visibility: hidden !important;
                      pointer-events: none !important;
                      width: 0 !important;
                      height: 0 !important;
                      position: absolute !important;
                      z-index: -9999 !important;
                    }
                  \`;
                  document.head.appendChild(style);
                }
                
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', hideNextBadge);
                } else {
                  hideNextBadge();
                }

                // Watch for any attempts to add the badge back
                new MutationObserver(() => {
                  const elements = document.querySelectorAll('#__next-build-watcher, [data-nextjs-dialog], .nextjs-container');
                  elements.forEach(el => el.remove());
                }).observe(document.documentElement, {
                  childList: true,
                  subtree: true
                });
              })();
            `
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
