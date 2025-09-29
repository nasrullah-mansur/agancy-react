
import { BackgroundPattern } from "@/components/ui/background-pattern"
import { Button } from "@/components/ui/button"
import { envVars } from "@/config/env"
import { ArrowUpRight, Phone } from "lucide-react"

import profileImage from "@/assets/profile.png"


export default function Banner() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
            <BackgroundPattern />
            <div className="relative z-10 text-center max-w-3xl">
                <div className="flex items-center justify-center mb-6 gap-x-3">
                    <img className="w-[35px]  h-[35px] object-cover rounded-full" src={profileImage} alt={envVars.VITE_APP_NAME} />
                    <p className="text-muted-foreground">Love these guys! Amazing Work!</p>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                    <strong>Sketching</strong> the Future <br />
                    of Your Digital Presence
                </h1>
                <p className="mt-6 md:text-lg">
                    Explore a collection of Shadcn UI blocks and components, ready to
                    preview and copy. Streamline your development workflow with
                    easy-to-implement examples.
                </p>
                <div className="mt-12 md:flex items-center justify-center gap-4">
                    <Button size="lg" className="mb-4 md:mb-0 rounded-full text-base dark:bg-card dark:text-white w-[228px] h-[50px]">
                        Book Now <ArrowUpRight className="h-5! w-5!" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full text-base shadow-none w-[228px] h-[50px]"
                    >
                        <Phone className="h-5! w-5!" /> Contact Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

