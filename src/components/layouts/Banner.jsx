import { useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container";
import Images from "../Images";
import banner from "/src/assets/bann.png";
import bOne from "/src/assets/bannerOne.png";
import bTwo from "/src/assets/bannerTwo.png";
import bThr from "/src/assets/bannerThr.png";
import { FaFacebookF } from "react-icons/fa";
import SmoothLink from "../SmoothLink";

const Banner = () => {
  const [typedText, setTypedText] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ["Front-end Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect Logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
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
    <section
      id="home"
      className="min-h-screen bg-slate-50 flex items-center pt-[90px] relative overflow-hidden"
    >
      <Container className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          {/* Left Content */}
          <div className="z-10">
            <p className="text-gray-500 text-2xl font-medium mb-1.5">
              Hello, I Am
            </p>
            <h1 className="font-bold text-primary leading-none mb-4 text-5xl md:text-6xl lg:text-7xl">
              Nabil Muntasir
            </h1>
            <div className="font-semibold text-gray-800 mb-5 text-2xl md:text-xl lg:text-[28px] min-h-9">
              I'm a <span className="text-primary">{typedText}</span>
              <span className="text-primary animate-pulse">|</span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-9 max-w-[440px]">
              I focused on React and Next.js, with expertise in crafting
              pixel-perfect UIs from Figma using Tailwind CSS. Built multiple
              live projects and boosted frontend performance.
            </p>
            <div className="flex gap-4 flex-wrap mb-12">
              <SmoothLink href="#contact">
                <a className="no-underline inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm transition-all border-3 border-primary hover:border-indigo-200 hover:bg-transparent hover:text-primary duration-300">
                  Hire Me
                </a>
              </SmoothLink>
              <SmoothLink href="#portfolio">
                <a className="no-underline inline-flex items-center gap-2 px-7 py-3 rounded-full bg-transparent text-primary border-3 hover:border-primary border-indigo-200 font-semibold text-sm transition-all hover:bg-primary hover:text-white duration-300">
                  See My Work <FaArrowRightLong />
                </a>
              </SmoothLink>
            </div>
            {/* Counter Section */}
            <div className="flex gap-10 pt-9 border-t border-gray-200">
              <div>
                <div className="font-black text-[32px] text-primary">150+</div>
                <div className="text-gray-500 text-xs mt-0.5">
                  Projects Done
                </div>
              </div>
              <div>
                <div className="font-black text-[32px] text-primary">1+</div>
                <div className="text-gray-500 text-xs mt-0.5">Years Exp.</div>
              </div>
            </div>
          </div>
          {/* Right Image Content */}
          <div className="relative hidden md:flex justify-center">
            <Images imgSrc={bOne} className={"absolute top-0 right-0"} />
            <Images imgSrc={bTwo} className={"absolute top-15 left-10"} />
            <Images imgSrc={bThr} className={"absolute bottom-10 right-10"} />
            {/* Circle Background */}
            <div className="absolute w-[400px] h-[400px] bg-primary/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <Images
              imgSrc={banner}
              className="relative z-10 w-[380px] h-[380px] rounded-full object-cover object-top shadow-2xl"
            />

            {/* Social Links */}
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-20">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/menabil"
                target="_blank"
                className="no-underline w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-lg font-bold text-primary transition-all hover:bg-primary hover:text-white hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/menabil"
                target="_blank"
                className="no-underline w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-lg font-bold text-primary transition-all hover:bg-primary hover:text-white hover:scale-110"
              >
                <SiGithub />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/menabil.dev"
                target="_blank"
                className="no-underline w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-lg font-bold text-primary transition-all hover:bg-primary hover:text-white hover:scale-110"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
