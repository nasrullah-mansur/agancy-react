import SectionTitle from "@/components/SectionTitle"

export default function Benefit() {

    const benefits = [
        {
            id: 1,
            title: "Affordability",
            description: "We offer cost-effective solutions that provide great value without compromising quality"
        },
        {
            id: 2,
            title: "Affordability",
            description: "We offer cost-effective solutions that provide great value without compromising quality"
        },
        {
            id: 3,
            title: "Affordability",
            description: "We offer cost-effective solutions that provide great value without compromising quality"
        },
        {
            id: 4,
            title: "Affordability",
            description: "We offer cost-effective solutions that provide great value without compromising quality"
        },
        {
            id: 5,
            title: "Affordability",
            description: "We offer cost-effective solutions that provide great value without compromising quality"
        },
        {
            id: 6,
            title: "Affordability",
            description: "We offer cost-effective solutions that provide great value without compromising quality"
        },
        {
            id: 7,
            title: "Affordability",
            description: "We offer cost-effective solutions that provide great value without compromising quality"
        },
        {
            id: 8,
            title: "Affordability",
            description: "We offer cost-effective solutions that provide great value without compromising quality"
        },
    ]

    return (
        <div className="container px-4 lg:px-0 mx-auto mb-20">
            <SectionTitle
                h2="How We Empower Our Clients"
                span="Client Benefits"
            />
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map(benefit => (
                    <div key={benefit.id} className="bg-foreground dark:hover:bg-card group hover:bg-primary transition rounded-lg p-8 min-h-[360px] flex flex-col justify-end">
                        <h4 className="text-background dark:group-hover:text-white text-[20px] font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-background dark:group-hover:text-white ">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
