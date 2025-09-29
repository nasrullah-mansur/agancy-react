import imageDark from "@/assets/logo-dark.png"
import img from "@/assets/logo.png"
import { envVars } from "@/config/env"

export default function Logo() {
    return (
        <>
            {/* Light logo */}
            <img
                className="max-w-[180px] dark:hidden"
                src={img}
                alt={envVars.VITE_APP_NAME}
            />
            {/* Dark logo */}
            <img
                className="max-w-[180px] hidden dark:block"
                src={imageDark}
                alt={envVars.VITE_APP_NAME}
            />
        </>
    )
}
