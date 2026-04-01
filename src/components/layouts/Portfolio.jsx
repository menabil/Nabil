import { useState } from 'react';
import Container from '../Container';

const projects = [
    { id: 1, title: "Modern E-commerce", category: "E-commerce", image: "/src/assets/pSix.png" },
    { id: 2, title: "Fitness Tracker App", category: "Web Design", image: "/src/assets/pFiv.png" },
    { id: 3, title: "Corporate Branding", category: "Agency", image: "/src/assets/pThr.png" },
    { id: 4, title: "Travel Blog Platform", category: "Web Design", image: "/src/assets/pFor.png" },
    { id: 5, title: "Fintech Dashboard", category: "E-commerce", image: "/src/assets/pTwo.png" },
    { id: 6, title: "Luxury Goods Identity", category: "Agency", image: "/src/assets/pOne.png" },
];

const Portfolio = () => {
    const [activeTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(project => project.category === activeTab);

    return (
        <section id="portfolio" className="py-[90px] bg-dark">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="block text-[12px] font-bold tracking-[3px] uppercase text-white/50 mb-2.5">
                        Creative Works
                    </span>
                    <h2
                        className="font-pop font-extrabold text-white leading-tight"
                        style={{ fontSize: "clamp(30px, 4vw, 46px)" }}
                    >
                        Check My Portfolio
                    </h2>
                </div>
                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-4/3 cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-white/60 text-xs uppercase tracking-widest mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Footer Button */}
                <div className="text-center mt-10">
                    <button className="inline-flex items-center gap-2 px-7 cursor-pointer py-3 rounded-full bg-primary text-white border-3 border-primary font-semibold text-sm transition-all hover:border-indigo-200 hover:bg-transparent hover:text-indigo-200 ">
                        View All Projects
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default Portfolio;