import { useState, useEffect } from 'react';
import Banner from "../layouts/Banner";
import Blog from "../layouts/Blog";
import Contact from "../layouts/Contact";
import Portfolio from "../layouts/Portfolio";
import About from "./About";
import { FaArrowUp } from "react-icons/fa";

// 1. Separate Preloader Component
const Preloader = ({ onLoadingComplete }) => {
    const [isFading, setIsFading] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true);
            const removeTimer = setTimeout(() => {
                setShouldRender(false);
                if (onLoadingComplete) onLoadingComplete();
            }, 700);
            return () => clearTimeout(removeTimer);
        }, 2000);
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    if (!shouldRender) return null;

    return (
        <div
            id="preloader"
            className={`fixed inset-0 z-99999 bg-gray-950 flex flex-col items-center justify-center gap-6 transition-all duration-700 ${isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
                }`}
        >
            <div className="relative w-20 h-20 bg-primary rounded-2xl flex items-center justify-center font-pop text-4xl font-black text-white animate-pre-rock">
                N
                <div className="absolute -inset-2.5 rounded-[28px] border-3 border-transparent border-t-primary animate-spin-ring"></div>
            </div>
            <div className="w-48 h-[3px] bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full animate-fill-bar"></div>
            </div>
            <p className="text-white/50 text-sm tracking-wide">Loading amazing things...</p>
        </div>
    );
};

const Home = () => {
    const [showBackTop, setShowBackTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Scroll for "Back to Top"
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setShowBackTop(true);
            } else {
                setShowBackTop(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setShowBackTop(true);
            } else {
                setShowBackTop(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id='home'>
            {/* Preloader shows until loading is complete */}
            {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
            {/* Main Content */}
            <main>
                <Banner />
                <About />
                <Portfolio />
                <Blog />
                <Contact />
            </main>
            {/* Back to Top Button */}
            {showBackTop && (
                <a
                    href="#home"
                    onClick={scrollToTop}
                    className={`fixed bottom-7 right-7 z-500 w-12 h-12 bg-primary border-3 border-primary text-white rounded-full flex items-center justify-center text-xl shadow-[0_10px_25px_rgba(108,92,231,0.4)] cursor-pointer no-underline 
                transition-all duration-400 ease-in-out transform 
                ${showBackTop
                            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                            : 'opacity-0 translate-y-12 scale-500 pointer-events-none'
                        } 
                hover:bg-transparent hover:border-indigo-200 hover:text-primary active:scale-90`}
                ><FaArrowUp />
                </a>
            )}
        </div>
    );
};

export default Home;