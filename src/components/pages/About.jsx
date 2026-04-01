import Container from '../Container';
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about" className="py-[90px] bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Left Side: Skills Circles */}
          <div className="anim-left">
            <div className="bg-white rounded-[28px] p-12 shadow-[0_20px_50px_rgba(108,92,231,.08)] grid grid-cols-2">

              <div className="flex flex-wrap flex-col justify-center gap-8">
                {/* Skill 1: HTML */}
                <div className="text-center">
                  <div className="w-24 h-24 mb-4 mx-auto rounded-full border-4 border-indigo-100 flex items-center justify-center relative">
                    <FaHtml5 className="font-bold text-primary text-4xl" />
                  </div>
                  <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                    HTML
                  </h4>
                </div>
                {/* Skill 2: CSS */}
                <div className="text-center">
                  <div className="w-24 h-24 mb-4 mx-auto rounded-full border-4 border-indigo-100 flex items-center justify-center relative">
                    <FaNodeJs className="font-bold text-primary text-4xl" />
                  </div>
                  <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                    JavaScript
                  </h4>
                </div>
              </div>

              <div className="flex flex-wrap flex-col justify-center gap-8">
                {/* Skill 3: JavaScript */}
                <div className="text-center">
                  <div className="w-24 h-24 mb-4 mx-auto rounded-full border-4 border-indigo-100 flex items-center justify-center relative">
                    <FaReact className="font-bold text-primary text-4xl" />
                  </div>
                  <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                    React
                  </h4>
                </div>
                {/* Skill 4: JavaScript */}
                <div className="text-center">
                  <div className="w-24 h-24 mb-4 mx-auto rounded-full border-4 border-indigo-100 flex items-center justify-center relative">
                    <RiTailwindCssFill className="font-bold text-primary text-4xl" />
                  </div>
                  <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wide">
                    TailWind
                  </h4>
                </div>
              </div>

            </div>
          </div>
          {/* Right Side: Content */}
          <div className="anim-right">
            <span className="block text-[12px] font-bold tracking-[3px] uppercase text-primary mb-2.5">
              My Skills
            </span>
            <h2
              className="font-pop font-bold text-gray-800 leading-tight mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Beautiful & Unique<br />Digital Experiences
            </h2>
            <p className="text-gray-500 leading-relaxed mb-3.5">
              I blend creative design thinking with technical precision to build digital products that are both visually compelling and highly performant.
            </p>
            <p className="text-gray-500 leading-relaxed mb-7">
              With 1+ years of experience in frontend development, I specialize in React and Next.js, delivering scalable, pixel-perfect user interfaces with a strong focus on performance and usability.
            </p>
            {/* Checklist */}
            <ul className="list-none flex flex-col gap-2.5 mb-8">
              <ul className="space-y-3">
                {/* Item 1 */}
                <li className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="w-[22px] h-[22px] bg-primary rounded-full flex items-center justify-center text-white text-[11px] shrink-0">
                    ✓
                  </span>
                  Responsive Web Design
                </li>
                {/* Item 2 */}
                <li className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="w-[22px] h-[22px] bg-primary rounded-full flex items-center justify-center text-white text-[11px] shrink-0">
                    ✓
                  </span>
                  Frontend Development
                </li>
                {/* Item 3 */}
                <li className="flex items-center gap-2.5 text-sm text-gray-700">
                  <span className="w-[22px] h-[22px] bg-primary rounded-full flex items-center justify-center text-white text-[11px] shrink-0">
                    ✓
                  </span>
                  Clean & Modern UI
                </li>
              </ul>
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm transition-all border-3 border-primary hover:border-indigo-200 duration-300 hover:text-primary hover:bg-transparent"
            >
              Download CV
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;