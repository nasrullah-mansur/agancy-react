
import MainLayout from '@/components/layout/MainLayout'
import Banner from '@/components/pages/home/Banner'
import Benefit from '@/components/pages/home/Benefit'
import Blog from '@/components/pages/home/Blog'
import Brand from '@/components/pages/home/Brand'
import CallToAction from '@/components/pages/home/CallToAction'
import Faq from '@/components/pages/home/Faq'
import FeatureProduct from '@/components/pages/home/FeatureProduct'
import Pricing from '@/components/pages/home/Pricing'
import Services from '@/components/pages/home/Services'
import Slider from '@/components/pages/home/Slider'
import Testimonial from '@/components/pages/home/Testimonial'
import { Separator } from '@/components/ui/separator'


function App() {

  return (
    <MainLayout>
      <div>
        <Banner />
        <Slider />
        <Brand />
        <div className="max-w-screen-lg py-8 mx-auto">
          <Separator />
        </div>
        <Services />
        <Testimonial />
        <FeatureProduct />
        <Blog />
        <CallToAction />
        <Benefit />
        <Pricing />
        <Faq />
      </div>
    </MainLayout>
  )
}

export default App
