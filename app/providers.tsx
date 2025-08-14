'use client'

import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Remove Next.js badge
        const removeNextJsBadge = () => {
            const badges = document.querySelectorAll('[id^="__next"]')
            badges.forEach((badge) => {
                if (badge instanceof HTMLElement) {
                    badge.style.display = 'none'
                }
            })
        }

        removeNextJsBadge()
        // Run on mount and also set up an observer for any dynamically added badges
        const observer = new MutationObserver(() => {
            removeNextJsBadge()
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })

        return () => observer.disconnect()
    }, [])

    return <>{children}</>
}
