
import { envVars } from "@/config/env"

import profileImage from "@/assets/profile.png"
import PrimaryBtn from "@/components/ui/primaryBtn"


export default function BannerTwo() {
    return (
        <div className="container mx-auto px-4 mt-30">
            <div className="max-w-[610px] py-20">
                <div className="flex items-center gap-x-3">
                    <img className="w-[35px]  h-[35px] object-cover rounded-full" src={profileImage} alt={envVars.VITE_APP_NAME} />
                    <p className="text-muted-foreground">Love these guys! Amazing Work!</p>
                </div>
                <h1 className="text-[37px] leading-[45px] pt-4 pb-3 md:text-[57px] md:leading-[67px]">
                    <strong>Sketching</strong> the Future <br />
                    of Your Digital Presence</h1>
                <p className="text-muted-foreground pr-4 mb-6">From bold ideas to seamless designs, we craft user-centric experiences that elevate your brand and engage your audience. Let’s bring your vision to life with precision and creativity.</p>

                <PrimaryBtn>Book Now</PrimaryBtn>
            </div>
        </div>
    )
}




