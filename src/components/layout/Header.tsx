
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
    return (
        <>
            <nav className="h-20 bg-background absolute w-full">
                <div className="h-full flex items-center justify-between container mx-auto px-4">
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="outline" className="cursor-pointer rounded-full inline-flex">
                            Contact Now
                            <ArrowUpRight />
                        </Button>
                        <ModeToggle />


                    </div>
                </div>
            </nav>

        </>

    );
};

export default Header;
