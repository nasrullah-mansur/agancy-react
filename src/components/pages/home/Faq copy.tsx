import SectionTitle from "@/components/SectionTitle";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

const faq = [
    {
        question: "What is your return policy?",
        answer:
            "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
    },
    {
        question: "How do I track my order?",
        answer:
            "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
    },
    {
        question: "Do you ship internationally?",
        answer:
            "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
    },
    {
        question: "What if I receive a damaged item?",
        answer:
            "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
    },
];

const Faq = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center px-6 py-20">
                <div className="w-full">

                    <SectionTitle
                        h2="Questions? We’ve Got Answers for Almost Everything!"
                        span="Frequently Asked Questions"
                    />

                    <Accordion
                        type="single"
                        collapsible
                        className="mt-8 sm:mt-10 space-y-4"
                        defaultValue="question-0"
                    >
                        {faq.map(({ question, answer }, index) => (
                            <AccordionItem
                                key={question}
                                value={`question-${index}`}
                                className="bg-accent py-1 px-4 rounded-xl border-none"
                            >
                                <AccordionPrimitive.Header className="flex">
                                    <AccordionPrimitive.Trigger
                                        className={cn(
                                            "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                                            "text-start text-lg"
                                        )}
                                    >
                                        {question}
                                        <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                                    </AccordionPrimitive.Trigger>
                                </AccordionPrimitive.Header>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;
