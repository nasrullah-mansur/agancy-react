import SectionTitle from "@/components/SectionTitle";

export default function Services() {

    const services = [
        {
            id: 1,
            title: "Web Development",
            count: 100
        },
        {
            id: 2,
            title: "UI UX Design",
            count: 99
        },
        {
            id: 3,
            title: "Graphic Design",
            count: 98
        },
        {
            id: 4,
            title: "Digital Marketing",
            count: 97
        }
    ];


    return (
        <div className="container px-4 mx-auto mt-16 mb-20">
            <SectionTitle span="Impact Metrics" h2="We’re Masters of Precision, Saving Time and Effort for You" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map(service => (
                    <div key={service.id} className="group p-6 rounded-lg hover:bg-primary dark:hover:bg-card bg-foreground h-[380px] flex flex-col justify-between transition-colors duration-200 ease-in-out">
                        <span className="text-muted text-[24px] dark:group-hover:text-foreground transition-colors duration-200 ease-in-out">{service.title}</span>
                        <strong className="text-[65px] text-background font-bold block group-hover:text-white dark:group-hover:text-foreground transition-colors duration-200 ease-in-out">
                            {service.count}
                        </strong>
                    </div>

                ))}
            </div>
        </div>
    )
}
