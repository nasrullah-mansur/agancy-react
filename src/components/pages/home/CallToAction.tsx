import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";

export default function CallToAction() {
    return (
        <div className="container mx-auto bg-foreground py-16 px-12 rounded-2xl mb-20">
            <h2 className="text-[40px] text-background">Explore all our works?</h2>
            <p className="text-muted-foreground max-w-[555px]">Join over 20+ startups already growing with us with premium UI/UX design and web development</p>
            <div className="mt-8 ">
                <Button size="lg" className="mb-4 lg:mb-0 rounded-full mr-4 text-base dark:bg-card dark:text-white w-[228px] h-[50px]">
                    Book Now <ArrowUpRight className="h-5! w-5!" />
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full dark:border-background dark:text-background dark:hover:text-card dark:hover:border-card text-foreground text-base shadow-none w-[228px] h-[50px]"
                >
                    <Phone className="h-5! w-5!" /> Contact Now
                </Button>
            </div>
        </div>
    )
}
