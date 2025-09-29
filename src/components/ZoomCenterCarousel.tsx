import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import * as React from "react"

type IItems = { items: { id: string | number, image: string }[] }

export default function ZoomCenterCarousel({ items }: IItems) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay({
        delay: 4000
    })])
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    React.useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }
        emblaApi.on("select", onSelect)
        onSelect()
    }, [emblaApi])

    console.log(selectedIndex);




    return (
        <div className="w-full mx-auto overflow-hidden">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_100%] px-4 sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_50%] flex justify-center"
                        >
                            <img className={cn(
                                "w-full flex  mb-30 items-center justify-center transition-transform duration-500 rounded-2xl",
                                selectedIndex === index ? " z-10 shadow-[0_50px_100px_-20px_#343A40]/35" : "scale-90 opacity-60 shadow-[0_30px_60px_-30px_#343A40]/35"
                            )} src={item.image} alt="alt" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}