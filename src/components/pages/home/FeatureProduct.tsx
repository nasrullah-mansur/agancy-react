import profileImage from "@/assets/profile.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";


export default function FeatureProduct() {

    const sliders = [
        {
            id: 1,
            paragraph: "One of the craziest studios i’ve worked with like honestly they were beyond crazy.",
            profile: profileImage,
            name: "Shawn H. Matthews",
            title: "Managing Director"
        },
        {
            id: 2,
            paragraph: "One of the craziest studios i’ve worked with like honestly they were beyond crazy.",
            profile: profileImage,
            name: "Shawn H. Matthews",
            title: "Managing Director"
        },
        {
            id: 3,
            paragraph: "One of the craziest studios i’ve worked with like honestly they were beyond crazy.",
            profile: profileImage,
            name: "Shawn H. Matthews",
            title: "Managing Director"
        }
    ];

    return (
        <div className="container mx-auto px-4 ">
            <div className="shadow-[0_0_100px_0px_#343A40]/25 rounded-xl mb-20 mt-20">
                <Carousel

                >
                    <CarouselContent>
                        {sliders.map(slider => (
                            <CarouselItem key={slider.id} >
                                <div className=" border-rose-50 pb-16 ">
                                    <div className="relative">
                                        <span className="absolute top-[30px] left-[30px] bg-white py-2 px-6 dark:text-background rounded-full font-semibold">Packaging</span>
                                        <img className="w-full rounded-xl" src="/public/slider/carosel.png" alt="a" />
                                    </div>
                                    <div>
                                        <p className="text-[32px] max-w-[1070px] mx-auto font-semibold px-8 text-center mt-12">
                                            {slider.paragraph}
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="flex items-center gap-x-3 mt-8">
                                            <img
                                                className="w-[65px] h-[65px] object-cover rounded-full"
                                                src={slider.profile}
                                                alt={slider.profile}
                                            />
                                            <div>
                                                <p className="text-foreground">{slider.name}</p>
                                                <p className="text-muted-foreground">{slider.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    {/* Custom previous button */}
                    <CarouselPrevious className="-left-2 lg:left-[-30px] top-[55%] bg-primary dark:bg-card dark:hover:bg-card text-white dark:text-white border-0 w-[60px] h-[60px] z-99 hover:bg-primary cursor-pointer hover:text-white">
                        <ArrowLeft className="hover:text-white" />
                    </CarouselPrevious>

                    {/* Custom next button */}
                    <CarouselNext className="-right-2 lg:right-[-30px] top-[55%] bg-primary dark:bg-card dark:hover:bg-card text-white dark:text-white border-0 w-[60px] h-[60px] z-99 hover:bg-primary cursor-pointer hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    )
}
