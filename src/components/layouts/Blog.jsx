import Container from '../Container';
import { FaArrowRightLong } from "react-icons/fa6";
import Images from '../Images';

const blogPosts = [
    {
        id: 1,
        title: "10 Tips for Better UI Design in 2026",
        category: "Design",
        date: "Mar 15, 2026",
        image: "/src/assets/b1.png",
    },
    {
        id: 2,
        title: "Why Next.js is the King of React Frameworks",
        category: "Development",
        date: "Mar 10, 2026",
        image: "/src/assets/b2.png",
    },
    {
        id: 3,
        title: "Mastering Tailwind CSS for Scalable Apps",
        category: "Tutorial",
        date: "Feb 28, 2026",
        image: "/src/assets/b3.png",
    },
];

const Blog = () => {
    return (
        <section id="blog" className="py-[90px] bg-gray-50">
            <Container>

                {/* Header */}
                <div className="text-center mb-14">
                    <span className="block text-[12px] font-bold tracking-[3px] uppercase text-primary mb-2.5">
                        Latest News
                    </span>
                    <h2
                        className="font-pop font-extrabold text-gray-800 leading-tight"
                        style={{ fontSize: "clamp(30px, 4vw, 46px)" }}
                    >
                        Blog & Articles
                    </h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-newMade transition-all duration-300 border border-gray-100"
                        >
                            <div className="aspect-16/10 overflow-hidden">
                                <Images imgSrc={post.image}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-7">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-primary text-[10px] font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-400 text-xs">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors">
                                    <a href="#">{post.title}</a>
                                </h3>
                                <a
                                    href="#"
                                    className="text-sm font-bold text-gray-800 flex items-center gap-1 group-hover:gap-2 transition-all"
                                >
                                    Read More <FaArrowRightLong className="text-primary" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="text-center mt-11">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-transparent text-primary border-3 hover:border-primary border-indigo-200 font-semibold text-sm transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5 "
                    >
                        View All Articles<FaArrowRightLong />
                    </a>
                </div>

            </Container>
        </section>
    );
};

export default Blog;