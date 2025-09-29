import SectionTitle from "@/components/SectionTitle";
import { Accordion } from "@/components/ui/accordion";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ArrowDownRight } from "lucide-react";

const faq = [
    {
        id: 1,
        question: "What is your return policy?",
        answer:
            "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
    },
    {
        id: 2,
        question: "How do I track my order?",
        answer:
            "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
    },
    {
        id: 3,
        question: "Do you ship internationally?",
        answer:
            "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
    },
    {
        id: 4,
        question: "What payment methods do you accept?",
        answer:
            "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
    },
    {
        id: 5,
        question: "What if I receive a damaged item?",
        answer:
            "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
    },
];


const Faq = () => {
    return (
        <div className="container px-4 mx-auto mb-20 mt-20">
            <SectionTitle
                h2="Questions? We’ve Got Answers for Almost Everything!"
                span="Frequently Asked Questions"
                className="!mb-12"
            />
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                {faq.map((f, idx) => (
                    <AccordionItem
                        key={f.question}
                        value={`item-${idx}`}
                        className="data-[state=open]:bg-primary dark:data-[state=open]:bg-card  data-[state=closed]:bg-foreground rounded-lg transition-colors overflow-hidden mb-2"
                    >
                        <AccordionTrigger
                            className="px-4 font-semibold py-4 w-full flex justify-between items-center relative group  text-left transition-colors text-background  data-[state=open]:text-background dark:data-[state=open]:text-white "
                        >
                            {f.question}
                            <div className="absolute top-0 right-0 h-full w-[60px] bg-primary dark:bg-card text-white flex justify-center items-center">
                                <ArrowDownRight className="transition-transform duration-300 group-data-[state=open]:rotate-[-45deg]" />
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="flex flex-col gap-4 text-balance px-4 py-2 bg-foreground text-muted pb-5 pt-3">
                            <p>
                                Our flagship product combines cutting-edge technology with sleek design.
                                Built with premium materials, it offers unparalleled performance and reliability.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>



        </div>
    );
};

export default Faq;
