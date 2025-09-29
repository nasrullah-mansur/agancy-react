// hooks/useCarousel.ts
"use client"

import useEmblaCarousel from "embla-carousel-react"
import * as React from "react"

export function useCarousel(options?: Parameters<typeof useEmblaCarousel>[0]) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    React.useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on("select", onSelect)
        onSelect() // set initial

        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi])

    return {
        emblaRef,
        emblaApi,
        selectedIndex,
    }
}
