


export default function Brand() {

    const brands = [
        {
            id: 1,
            image: "/brand/1.png"
        },
        {
            id: 2,
            image: "/brand/2.png"
        }
        ,
        {
            id: 3,
            image: "/brand/3.png"
        }
        ,
        {
            id: 4,
            image: "/brand/4.png"
        }
        ,
        {
            id: 5,
            image: "/brand/5.png"
        }
        ,
        {
            id: 6,
            image: "/brand/6.png"
        }
        ,
        {
            id: 7,
            image: "/brand/7.png"
        }
    ];

    return (
        <div className="container mx-auto px-4 -translate-y-14 md:translate-0 py-10 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-10">
                {brands.map(brand => (
                    <div key={brand.id} className="lg:flex-1 flex justify-center">
                        <img className="max-w-36 px-4" src={brand.image} alt="brand" />
                    </div>
                ))}

            </div>
        </div>
    )
}
