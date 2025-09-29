import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { type ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full flex-col min-h-screen ">
            <Header />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}
