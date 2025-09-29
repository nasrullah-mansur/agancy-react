import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router";

export default function Blog() {

    const blogs = [
        {
            id: 1,
            image: '/blog/blog-1.png',
            title: "A Digital Haven for Book Enthusiasts",
            category_name: "Web development",
            description: "Redefining the reading experience with intuitive design and engaging features."
        },
        {
            id: 2,
            image: '/blog/blog-1.png',
            title: "A Digital Haven for Book Enthusiasts",
            category_name: "Web development",
            description: "Redefining the reading experience with intuitive design and engaging features."
        },
        {
            id: 3,
            image: '/blog/blog-1.png',
            title: "A Digital Haven for Book Enthusiasts",
            category_name: "Web development",
            description: "Redefining the reading experience with intuitive design and engaging features."
        },
        {
            id: 4,
            image: '/blog/blog-1.png',
            title: "A Digital Haven for Book Enthusiasts",
            category_name: "Web development",
            description: "Redefining the reading experience with intuitive design and engaging features."
        },
        {
            id: 5,
            image: '/blog/blog-1.png',
            title: "A Digital Haven for Book Enthusiasts",
            category_name: "Web development",
            description: "Redefining the reading experience with intuitive design and engaging features."
        },
        {
            id: 6,
            image: '/blog/blog-1.png',
            title: "A Digital Haven for Book Enthusiasts",
            category_name: "Web development",
            description: "Redefining the reading experience with intuitive design and engaging features."
        },
    ]

    return (
        <div className="container mx-auto px-4 mb-20">
            <SectionTitle h2="Showcasing Innovation: Where Creativity Meets Functionality" span="Our Works" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {blogs.map(blog => (
                    <Link to="/" key={blog.id}>
                        <div >
                            <img className="w-full rounded-xl" src={blog.image} alt="a" />
                            <span className="block uppercase text-muted-foreground font-bold mt-5">{blog.category_name}</span>
                            <h4 className="text-xl font-bold mt-2 mb-2">{blog.title}</h4>
                            <p className="text-muted-foreground pr-6">{blog.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
