import Container from "../Container";
import Images from "../Images";

// 1. Image imports
import pOne from "/src/assets/pOne.png";
import pTwo from "/src/assets/pTwo.png";
import pThr from "/src/assets/pThr.png";
import pFor from "/src/assets/pFor.png";
import pFiv from "/src/assets/pFiv.png";
import pSix from "/src/assets/pSix.png";
import { FaArrowRight, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-[90px] bg-dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <span className="block text-[12px] font-bold tracking-[3px] uppercase text-white/50 mb-2.5">
            Creative Works
          </span>
          <h2 className="font-pop font-extrabold text-white leading-tight text-[clamp(30px,4vw,46px)]">
            Check My Portfolio
          </h2>
        </div>

        {/* Portfolio Grid (Manual Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-4/3 cursor-pointer">
            <Images
              imgSrc={pOne}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-[#090A0C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href="https://creative-web-six.vercel.app"
                target="_blank"
                className="pIcon delay-100"
              >
                <FaArrowRight className="-rotate-45 text-lg" />
              </a>
              <a
                href="https://github.com/menabil/creativeWeb"
                target="_blank"
                className="pIcon delay-200"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-4/3 cursor-pointer">
            <Images
              imgSrc={pTwo}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-[#090A0C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href="https://edu-act-figma.vercel.app"
                target="_blank"
                className="pIcon delay-100"
              >
                <FaArrowRight className="-rotate-45 text-lg" />
              </a>
              <a
                href="https://github.com/menabil/eduActFigma"
                target="_blank"
                className="pIcon delay-200"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-4/3 cursor-pointer">
            <Images
              imgSrc={pThr}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-[#090A0C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href="https://roiser-team.vercel.app"
                target="_blank"
                className="pIcon delay-100"
              >
                <FaArrowRight className="-rotate-45 text-lg" />
              </a>
              <a
                href="https://github.com/menabil/roiserTeam"
                target="_blank"
                className="pIcon delay-200"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-4/3 cursor-pointer">
            <Images
              imgSrc={pFor}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-[#090A0C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href="https://project-nirvoya-chi.vercel.app"
                target="_blank"
                className="pIcon delay-100"
              >
                <FaArrowRight className="-rotate-45 text-lg" />
              </a>
              <a
                href="https://github.com/menabil/projectNirvoya"
                target="_blank"
                className="pIcon delay-200"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Project 5 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-4/3 cursor-pointer">
            <Images
              imgSrc={pFiv}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-[#090A0C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href="https://uomo-e-commerce.vercel.app"
                target="_blank"
                className="pIcon delay-100"
              >
                <FaArrowRight className="-rotate-45 text-lg" />
              </a>
              <a
                href="https://github.com/menabil/uomo-EVT"
                target="_blank"
                className="pIcon delay-200"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Project 6 */}
          <div className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-4/3 cursor-pointer">
            <Images
              imgSrc={pSix}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-[#090A0C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href="https://menabil.github.io/Hancok"
                target="_blank"
                className="pIcon delay-100"
              >
                <FaArrowRight className="-rotate-45 text-lg" />
              </a>
              <a
                href="https://github.com/menabil/Hancok"
                target="_blank"
                className="pIcon delay-200"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/menabil"
            target="_blank"
            className="inline-flex items-center gap-2 px-7 cursor-pointer py-3 rounded-full bg-primary text-white border-3 border-primary font-semibold text-sm transition-all hover:border-indigo-200 hover:bg-transparent hover:text-indigo-200 "
          >
            View All Projects
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
