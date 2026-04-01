import { useState, useEffect } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import Container from '../Container';

const Banner = () => {
    const [typedText, setTypedText] = useState('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const roles = ["Fontend Developer"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing Effect Logic
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typingSpeed = isDeleting ? 50 : 150;

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentRole.length) {
                setTypedText(prev => prev + currentRole[charIndex]);
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setTypedText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex, roles]);

    return (
        <section id="home" className="min-h-screen bg-slate-50 flex items-center pt-[90px] relative overflow-hidden">
            <Container className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
                    {/* Left Content */}
                    <div className="z-10">
                        <p className="text-gray-500 text-lg mb-1.5">Hello, I Am</p>
                        <h1 className="font-bold text-primary leading-none mb-4 text-5xl md:text-6xl lg:text-7xl">
                            Nabil Muntasir
                        </h1>

                        <div className="font-semibold text-gray-800 mb-5 text-xl md:text-2xl lg:text-[28px] min-h-9">
                            I'm a <span className="text-primary">{typedText}</span>
                            <span className="text-primary animate-pulse">|</span>
                        </div>

                        <p className="text-gray-500 leading-relaxed mb-9 max-w-[440px]">
                            I focused on React and Next.js, with expertise in crafting pixel-perfect UIs from Figma using Tailwind CSS. Built multiple live projects and boosted frontend performance.
                        </p>

                        <div className="flex gap-4 flex-wrap mb-12">
                            <a href="#contact" className="no-underline inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm transition-all border-3 border-primary hover:border-indigo-200 hover:bg-transparent hover:text-primary duration-300">
                                Hire Me
                            </a>
                            <a href="#portfolio" className="no-underline inline-flex items-center gap-2 px-7 py-3 rounded-full bg-transparent text-primary border-3 hover:border-primary border-indigo-200 font-semibold text-sm transition-all hover:bg-primary hover:text-white duration-300">
                                See My Work <FaArrowRightLong />
                            </a>
                        </div>

                        {/* Counter Section */}
                        <div className="flex gap-10 pt-9 border-t border-gray-200">
                            <div>
                                <div className="font-black text-[32px] text-primary">150+</div>
                                <div className="text-gray-500 text-xs mt-0.5">Projects Done</div>
                            </div>
                            <div>
                                <div className="font-black text-[32px] text-primary">25+</div>
                                <div className="text-gray-500 text-xs mt-0.5">Happy Clients</div>
                            </div>
                            <div>
                                <div className="font-black text-[32px] text-primary">1+</div>
                                <div className="text-gray-500 text-xs mt-0.5">Years Exp.</div>
                            </div>
                        </div>
                    </div>
                    {/* Right Image Content */}
                    <div className="relative hidden md:flex justify-center">
                        {/* Circle Background */}
                        <div className="absolute w-[380px] h-[380px] bg-primary/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <img
                            src="/src/assets/banner.jpg"
                            alt="banner"
                            className="relative z-10  w-[320px] h-[440px] object-cover object-top rounded-[28px] shadow-2xl"
                        />
                        {/* Award Badge (Floating) */}
                        <div className="absolute -top-4 -right-2.5 z-20 bg-white rounded-[18px] px-4 py-3 shadow-xl flex items-center gap-2.5 animate-[float_3s_ease-in-out_infinite]"
                            style={{ animation: 'float 3s ease-in-out infinite' }}>
                            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">🏆</div>
                            <div>
                                <div className="font-bold text-[13px]">Best Design Award</div>
                                <div className="text-[11px] text-gray-500">2025 Winner</div>
                            </div>
                        </div>

                        {/* Client Stack (Floating Slow) */}
                        <div className="absolute -bottom-4 left-2.5 z-20 bg-white rounded-2xl px-3.5 py-2.5 shadow-xl flex items-center gap-2.5 animate-[float_4s_ease-in-out_infinite_1s]">
                            <div className="flex">
                                <img src="/src/assets/tFor.png" alt="c1" className="w-[30px] h-[30px] rounded-full border-2 border-white object-cover" />
                                <img src="/src/assets/tThr.png" alt="c2" className="w-[30px] h-[30px] rounded-full border-2 border-white object-cover -ml-2" />
                                <img src="/src/assets/tFiv.png" alt="c3" className="w-[30px] h-[30px] rounded-full border-2 border-white object-cover -ml-2" />
                            </div>
                            <div>
                                <div className="font-bold text-xs">Happy Clients</div>
                                <div className="text-[11px] text-gray-500">25+ worldwide</div>
                            </div>
                        </div>
                        {/* Social Links */}
                        <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">

                            {/* LinkedIn */}
                            <a href="#" className="no-underline w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white hover:scale-110">
                                <FaLinkedinIn />
                            </a>

                            {/* GitHub */}
                            <a href="#" className="no-underline w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white hover:scale-110">
                                <SiGithub />
                            </a>

                            {/* Behance */}
                            <a href="#" className="no-underline w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white hover:scale-110">
                                be
                            </a>
                        </div>
                    </div>

                </div>
            </Container>
        </section >
    );
};

export default Banner;