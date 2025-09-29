

import profileImage from "@/assets/profile.png";
import SectionTitle from '@/components/SectionTitle';


export default function Testimonial() {

    const testimonials = [
        {
            id: 1,
            content: `Working with dSketchers was a game-changer for my business. Their UI design for our e-commerce platform was not only visually stunning but also intuitive for our customers. Sales have increased by 30% since the redesign. The team was professional, communicative, and delivered beyond expectations. I highly recommend them!`,
            image: profileImage,
            name: "Ronnie D. Asher",
        },
        {
            id: 2,
            content: `dSketchers nailed our app's UI design! It's sleek, intuitive, and user-focused. The feedback from our users has been amazing!`,
            image: profileImage,
            name: "Ronnie D. Asher",
        },
        {
            id: 3,
            content: `I highly recommend Vasilije. He is a  hard working guy with great ideas for big or small projects. Very  flexible and very fast. I'm very happy I found his profile and I'll  definitely hire him again for another project!`,
            image: profileImage,
            name: "Ronnie D. Asher",
        },

        {
            id: 4,
            content: `The UI design services provided by dSketchers were exceptional. They tailored the design to align perfectly with our brand identity while ensuring usability and accessibility. Their expertise helped us gain positive feedback from both employees and clients. It was a pleasure collaborating with such a talented team! We look forward to working with them on future projects.`,
            image: profileImage,
            name: "Ronnie D. Asher",
        },

    ];

    return (
        <div className="container mx-auto px-4">
            <SectionTitle
                span="Client Stories"
                h2="What They’re Saying: Real Experiences, Real Impact"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-4">

                <div className="group bg-foreground p-8 rounded-xl h-auto hover:bg-primary dark:hover:bg-card transition-colors duration-200 ease-in-out">
                    <p className="text-white/90 dark:text-background/80 dark:group-hover:text-white transition-colors duration-200 ease-in-out">
                        "{testimonials[0].content}"
                    </p>
                    <div className="flex items-center gap-x-3 mt-8">
                        <img
                            className="w-[35px] h-[35px] object-cover rounded-full"
                            src={testimonials[0].image}
                            alt={testimonials[0].name}
                        />
                        <p className="text-white dark:text-background/90 dark:group-hover:text-white transition-colors duration-200 ease-in-out">Love these guys! Amazing Work!</p>
                    </div>
                </div>

                <div>
                    <div className="group bg-foreground mb-4 p-8 rounded-xl h-auto hover:bg-primary dark:hover:bg-card transition-colors duration-200 ease-in-out">
                        <p className="text-white/90 dark:text-background/80 dark:group-hover:text-white transition-colors duration-200 ease-in-out">
                            "{testimonials[1].content}"
                        </p>
                        <div className="flex items-center gap-x-3 mt-8">
                            <img
                                className="w-[35px] h-[35px] object-cover rounded-full"
                                src={testimonials[1].image}
                                alt={testimonials[1].name}
                            />
                            <p className="text-white dark:text-background/90 dark:group-hover:text-white transition-colors duration-200 ease-in-out">Love these guys! Amazing Work!</p>
                        </div>
                    </div>
                    <div className="group bg-foreground p-8 rounded-xl h-auto hover:bg-primary dark:hover:bg-card transition-colors duration-200 ease-in-out">
                        <p className="text-white/90 dark:text-background/80 dark:group-hover:text-white transition-colors duration-200 ease-in-out">
                            "{testimonials[2].content}"
                        </p>
                        <div className="flex items-center gap-x-3 mt-8">
                            <img
                                className="w-[35px] h-[35px] object-cover rounded-full"
                                src={testimonials[2].image}
                                alt={testimonials[2].name}
                            />
                            <p className="text-white dark:text-background/90 dark:group-hover:text-white transition-colors duration-200 ease-in-out">Love these guys! Amazing Work!</p>
                        </div>
                    </div>
                </div>

                <div className="group bg-foreground p-8 rounded-xl h-auto hover:bg-primary dark:hover:bg-card transition-colors duration-200 ease-in-out">
                    <p className="text-white/90 dark:text-background/80 dark:group-hover:text-white transition-colors duration-200 ease-in-out">
                        "{testimonials[3].content}"
                    </p>
                    <div className="flex items-center gap-x-3 mt-8">
                        <img
                            className="w-[35px] h-[35px] object-cover rounded-full"
                            src={testimonials[3].image}
                            alt={testimonials[3].name}
                        />
                        <p className="text-white dark:text-background/90 dark:group-hover:text-white transition-colors duration-200 ease-in-out">Love these guys! Amazing Work!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}





{/* <div className="container px-4 mx-auto mb-20">
    <SectionTitle
        span="Client Stories"
        h2="What They’re Saying: Real Experiences, Real Impact"
    />

    <div className="grid grid-cols-3 gap-4 grid-flow-row-dense items-start">
        <div className="bg-foreground p-8 rounded-xl">

            <div className="flex items-center gap-x-3 mt-8">
                <img
                    className="w-[35px] h-[35px] object-cover rounded-full"
                    src={profileImage}
                    alt={envVars.VITE_APP_NAME}
                />
                <p className="text-white">Love these guys! Amazing Work!</p>
            </div>
        </div>

        <div className="bg-foreground p-8 rounded-xl">
            <p className="text-white/90">
                "Plaales have increased by 30% since the redesign. The team was professional, communicative, and delivered beyond expectations. I highly recommend them!"
            </p>
            <div className="flex items-center gap-x-3 mt-8">
                <img
                    className="w-[35px] h-[35px] object-cover rounded-full"
                    src={profileImage}
                    alt={envVars.VITE_APP_NAME}
                />
                <p className="text-white">Love these guys! Amazing Work!</p>
            </div>
        </div>

        <div className="bg-foreground p-8 rounded-xl">
            <p className="text-white/90">
                "Working with dSketchers was a game-changer for my business. Their UI design for our e-commerce platform was not only visually stunning but also intuitive for our customers. Sales have increased by 30% since the redesign. The team was professional, communicative, and delivered beyond expectations. I highly recommend them!"
            </p>
            <div className="flex items-center gap-x-3 mt-8">
                <img
                    className="w-[35px] h-[35px] object-cover rounded-full"
                    src={profileImage}
                    alt={envVars.VITE_APP_NAME}
                />
                <p className="text-white">Love these guys! Amazing Work!</p>
            </div>
        </div>

        <div className="bg-foreground p-8 rounded-xl">
            <p className="text-white/90">
                "Working with dSketchers was a game-changer for my business. Their UI design for our e-commerce platform was not only visually stunning but also intuitive for our customers. Sales have increased by 30% since the redesign. The team was professional, communicative, and delivered beyond expectations. I highly recommend them!"
            </p>
            <div className="flex items-center gap-x-3 mt-8">
                <img
                    className="w-[35px] h-[35px] object-cover rounded-full"
                    src={profileImage}
                    alt={envVars.VITE_APP_NAME}
                />
                <p className="text-white">Love these guys! Amazing Work!</p>
            </div>
        </div>
    </div>

</div> */}
