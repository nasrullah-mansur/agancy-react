import ZoomCenterCarousel from "@/components/ZoomCenterCarousel";

export default function Slider() {

    const items = [
        {
            id: 1,
            image: '/slider/1.png',
        },
        {
            id: 2,
            image: '/slider/1.png',
        },
        {
            id: 3,
            image: '/slider/1.png',
        },
        {
            id: 4,
            image: '/slider/1.png',
        },
        {
            id: 5,
            image: '/slider/1.png',
        }
    ]

    return (
        <div className="my-8">
            <ZoomCenterCarousel items={items} />
        </div>
    )
}
