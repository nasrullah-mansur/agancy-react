"use client";

import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import { useState } from "react";



const allPlans = [
    {
        id: 1,
        planName: "Web Development",
        data: [
            {
                name: "Pay as you go",
                price: 499,
                description: "Best for - Small landing pages or fixes",
                features: [
                    { title: "Basic 3-page website" },
                    { title: "Responsive design" },
                    { title: "1 revision included" },
                    { title: "Delivery in 5 days" },
                    { title: "Email support" },
                ],
            },
            {
                name: "Project Wise",
                price: 1499,
                isPopular: true,
                description: "Best for - Single project, Startups",
                features: [
                    { title: "Up to 10 pages website" },
                    { title: "Custom design + animations" },
                    { title: "3 revisions included" },
                    { title: "Delivery in 10 days" },
                    { title: "Basic SEO optimization" },
                ],
            },
            {
                name: "Design Partner",
                price: 3999,
                description: "Best for - Agency, SaaS products",
                features: [
                    { title: "Full-stack development" },
                    { title: "Unlimited pages" },
                    { title: "API integrations" },
                    { title: "Priority 24/7 support" },
                    { title: "Advanced SEO & performance audit" },
                ],
            },
        ],
    },
    {
        id: 2,
        planName: "UI UX Design",
        data: [
            {
                name: "Pay as you go",
                price: 299,
                description: "Best for - Wireframes or small modules",
                features: [
                    { title: "1 mobile/desktop screen" },
                    { title: "Basic wireframe" },
                    { title: "1 design revision" },
                    { title: "Delivery in 3 days" },
                    { title: "Email support" },
                ],
            },
            {
                name: "Project Wise",
                price: 999,
                isPopular: true,
                description: "Best for - Single project, Startups",
                features: [
                    { title: "Up to 10 screens" },
                    { title: "Clickable prototype" },
                    { title: "3 revisions included" },
                    { title: "User flow diagrams" },
                    { title: "Delivery in 7 days" },
                ],
            },
            {
                name: "Design Partner",
                price: 2499,
                description: "Best for - SaaS, Complex platforms",
                features: [
                    { title: "Unlimited screens per month" },
                    { title: "User testing feedback loop" },
                    { title: "Design system & style guide" },
                    { title: "Dedicated designer" },
                    { title: "Priority delivery & revisions" },
                ],
            },
        ],
    },
    {
        id: 3,
        planName: "Graphic Design",
        data: [
            {
                name: "Pay as you go",
                price: 199,
                description: "Best for - Quick graphics & social media",
                features: [
                    { title: "5 custom graphics" },
                    { title: "Social media ready" },
                    { title: "1 revision included" },
                    { title: "Delivery in 2 days" },
                    { title: "Basic formats (PNG/JPG)" },
                ],
            },
            {
                name: "Project Wise",
                price: 599,
                isPopular: true,
                description: "Best for - Campaigns & Branding",
                features: [
                    { title: "15 custom graphics" },
                    { title: "Logo & brand assets" },
                    { title: "3 revisions included" },
                    { title: "Delivery in 5 days" },
                    { title: "Source files included (PSD/AI)" },
                ],
            },
            {
                name: "Design Partner",
                price: 1499,
                description: "Best for - Agencies & ongoing work",
                features: [
                    { title: "Unlimited graphics per month" },
                    { title: "Advanced illustrations" },
                    { title: "Brand identity kit" },
                    { title: "Priority support" },
                    { title: "Dedicated graphic designer" },
                ],
            },
        ],
    },
    {
        id: 4,
        planName: "Digital Marketing",
        data: [
            {
                name: "Pay as you go",
                price: 399,
                description: "Best for - Small campaigns",
                features: [
                    { title: "1 social media campaign" },
                    { title: "Basic ad copywriting" },
                    { title: "1 platform (FB/Instagram)" },
                    { title: "Performance report" },
                    { title: "Delivery in 5 days" },
                ],
            },
            {
                name: "Project Wise",
                price: 1299,
                isPopular: true,
                description: "Best for - Startups & product launches",
                features: [
                    { title: "3-month campaign management" },
                    { title: "Content calendar" },
                    { title: "SEO & keyword research" },
                    { title: "Ads on 3 platforms" },
                    { title: "Bi-weekly reports" },
                ],
            },
            {
                name: "Design Partner",
                price: 3499,
                description: "Best for - Scaling businesses",
                features: [
                    { title: "Full digital marketing suite" },
                    { title: "Paid Ads + SEO + Email" },
                    { title: "Multi-channel strategy" },
                    { title: "Dedicated marketing manager" },
                    { title: "Weekly performance calls" },
                ],
            },
        ],
    },
];



const Pricing = () => {
    const [pricePlan, setPricePlan] = useState(allPlans?.[0]?.planName);




    const getPlan = () => {
        const isExist = allPlans.find(plan => plan?.planName === pricePlan);

        if (isExist) {
            return (
                <div className="sm:mt-8 mx-auto  grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
                    {isExist.data.map((plan) => (
                        <div
                            key={plan.name}
                            className="relative group bg-foreground p-6 hover:bg-primary dark:hover:bg-card group border rounded-xl grid-rows-1 px-8 transition-colors"
                        >
                            <h3 className="text-lg text-muted font-medium dark:group-hover:text-foreground">{plan.name}</h3>

                            <p className="mt-2 text-4xl text-muted font-bold  dark:group-hover:text-foreground">
                                $
                                {plan.price}
                                <span className="ml-1.5 text-sm font-normal text-muted dark:group-hover:text-foreground">
                                    / per hour
                                </span>
                            </p>

                            <p className="mt-4 font-medium text-muted text-text-muted dark:group-hover:text-foreground">
                                {plan.description}
                            </p>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full mt-6 rounded-full text-base cursor-pointer dark:text-primary dark:bg-background dark:hover:bg-foreground dark:hover:text-background hover:bg-foreground hover:border-foreground hover:text-background"
                            >
                                Get Started <ArrowUpRight className="w-4 h-4" />
                            </Button>

                            <Separator className="my-8 group-hover:bg-white/30 dark:bg-muted/10" />

                            <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature.title}
                                        className="flex items-start text-muted gap-1.5 dark:group-hover:text-foreground"
                                    >
                                        <CircleCheck className="h-4 w-4 mt-1 text-green-600 " />
                                        {feature.title}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    ))}
                </div>
            )
        }
    }



    return (
        <div className="flex flex-wrap overflow-hidden flex-col items-center justify-center  px-6">
            <SectionTitle
                className="text-center !mb-10"
                h2="Clear and Competitive Pricing for Every Budget"
                span="Transparent Pricing"
            />

            <div className="overflow-x-auto no-scrollbar max-w-full mb-8 lg:mb-0">
                <Tabs
                    value={pricePlan}
                    onValueChange={setPricePlan}
                    className="w-full"
                >
                    <TabsList
                        className="h-12 bg-background border rounded-full 
               flex-nowrap "
                    >
                        {allPlans.map((plan) => (
                            <TabsTrigger
                                key={plan.id}
                                value={plan.planName}
                                className="px-4 rounded-full whitespace-nowrap 
                   data-[state=active]:bg-primary 
                   data-[state=active]:text-primary-foreground"
                            >
                                {plan.planName}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>


            {getPlan()}


        </div>
    );
};

export default Pricing;
