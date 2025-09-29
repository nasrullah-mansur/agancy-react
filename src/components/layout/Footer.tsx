import PrimaryBtn from "@/components/ui/primaryBtn";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router";

const quickLinks = [
    {
        title: "Home",
        href: "#",
    },
    {
        title: "Services",
        href: "#",
    },
    {
        title: "Testimonials",
        href: "#",
    },
    {
        title: "Our Works",
        href: "#",
    },
    {
        title: "FAQ’s",
        href: "#",
    },
];

const contactWithUs = [
    {
        title: "dSketchersOfficial",
        href: "#",
        icon: <Facebook size="16px" />
    },
    {
        title: "dsketchersofficial",
        href: "#",
        icon: <Instagram size="16px" />
    },
    {
        title: "dsketchers",
        href: "#",
        icon: <Linkedin size="16px" />
    },
    {
        title: "dSketchers_",
        href: "#",
        icon: <Twitter size="16px" />
    },
    {
        title: "contact@dsketchers.com",
        href: "#",
        icon: <Mail size="16px" />
    },
];







const Footer = () => {
    return (
        <footer className="container mx-auto px-4  lg:pt-20">

            <div className="md:flex items-start">

                <div className="flex-1 mb-12 ">
                    <h2 className="text-[17px] leading-[25px] pb-3 md:text-[37px] md:leading-[47px]">
                        Let's Talk
                    </h2>
                    <PrimaryBtn>
                        Book Now
                    </PrimaryBtn>
                </div>
                <div className="flex-1">
                    <div className="flex">
                        <div className="flex-1">
                            <h4 className="text-[20px] font-medium mb-4">Quick Links</h4>
                            <ul>

                                {quickLinks.map((link, i) => (
                                    <li key={i} className="mb-1.5">
                                        <Link to={link.href}>
                                            <span className="text-muted-foreground hover:text-primary dark:hover:text-card">{link.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="flex-1">
                                <h4 className="text-[20px] font-medium mb-4">Connect with us</h4>
                                <ul>

                                    {contactWithUs.map((link, i) => (
                                        <li key={i} className="mb-2">
                                            <a className="flex items-center gap-x-2 text-muted-foreground hover:text-primary dark:hover:text-card" href={link.href}>
                                                <span >{link.icon}</span>
                                                <span>{link.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:flex justify-between w-full my-20">
                <p className="text-sm text-muted-foreground text-center lg:text-left">All rights reserved © dsketchers. 2024</p>

                <ul className="flex justify-center lg:justify-start mt-2 gap-x-4">
                    <li className="text-muted-foreground text-sm hover:underline">
                        <Link to={"/"}>About</Link>
                    </li>
                    <li className="text-muted-foreground text-sm hover:underline">
                        <Link to={"/"}>Privacy Policy</Link>
                    </li>
                    <li className="text-muted-foreground text-sm hover:underline">
                        <Link to={"/"}>Trams & Condition</Link>
                    </li>
                </ul>
            </div>
        </footer>

    );
};

export default Footer;
