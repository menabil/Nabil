import React, { useState, useEffect } from 'react';
import Container from "../Container"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll korle Navbar style change korar jnno (Optional but good)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    return (
        <>
            <nav
                id="navbar"
                className={`fixed top-0 left-0 right-0 z-1000 py-5 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent'
                    }`}
            >
                <Container>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-2 no-underline">
                            <div className="w-[34px] h-[34px] bg-primary rounded-[10px] flex items-center justify-center text-white font-pop font-black text-base">
                                N
                            </div>
                            <span className="font-pop font-bold text-xl text-gray-800">
                                Nab<span className="text-primary">il</span>
                            </span>
                        </a>
                        {/* Desktop Menu */}
                        <div className="flex items-center gap-x-10">
                            <ul className="hidden md:flex items-end gap-9 list-none mb-0">
                                {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="nav-link relative no-underline text-gray-800 text-sm font-medium transition-colors hover:text-primary"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {/* Hire Me Button */}
                            <a
                                href="#contact"
                                className="hidden md:inline-flex items-center gap-2 px-[22px] py-2.5 rounded-full bg-primary text-white font-semibold text-[13px] transition-all duration-300 border-3 border-primary hover:border-indigo-200 hover:bg-transparent hover:text-primary no-underline"
                            >
                                Hire Me
                            </a></div>
                        {/* Hamburger Icon */}
                        <div
                            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-1"
                            onClick={toggleMenu}
                        >
                            <span className={`w-6 h-0.5 bg-gray-800 rounded transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-gray-800 rounded transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-gray-800 rounded transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    <div
                        className={`${isOpen ? 'flex' : 'hidden'
                            } absolute left-0 right-0 top-full bg-white shadow-[0_10px_30px_rgba(0,0,0,.1)] px-6 py-5 flex-col gap-4 animate-fadeIn`}
                    >
                        {['Home', 'About', 'Portfolio', 'Blog'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={closeMenu}
                                className="no-underline text-gray-800 font-medium text-[15px] py-1.5 border-b border-gray-100 hover:text-primary"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="no-underline inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm mt-2"
                        >
                            Hire Me
                        </a>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Header