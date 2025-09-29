import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export default function PrimaryBtn({ children }: { children: ReactNode }) {
    return (
        <button className="cursor-pointer bg-primary dark:bg-card text-white w-[248px] text-[20px] font-medium h-[60px] px-8 flex gap-x-2 items-center justify-between py-3 rounded-full">
            {children}
            <ArrowUpRight />
        </button>
    )
}
