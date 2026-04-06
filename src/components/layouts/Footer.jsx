import Container from "../Container";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import SmoothLink from "../SmoothLink";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark">
      <Container>
        <div className="py-[60px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12">
          {/* Logo & About Column */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 no-underline mb-3.5 group"
            >
              <div className="w-[34px] h-[34px] bg-primary rounded-[10px] flex items-center justify-center text-white font-pop font-black text-base transition-transform group-hover:rotate-12">
                N
              </div>
              <span className="font-pop font-bold text-xl text-white">
                Nab<span className="text-primary">il</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-[350px]">
              Frontend Developer specializing in React and Next.js, focused on
              building scalable, high-performance web applications. Passionate
              about clean code and pixel-perfect UI development.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-pop font-bold mb-5 text-base uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="list-none flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <SmoothLink href={link.href}>
                    <a className="text-white/40 text-sm no-underline transition-colors hover:text-primary">
                      {link.name}
                    </a>
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h4 className="text-white font-pop font-bold mb-5 text-base uppercase tracking-wider">
              Follow Me
            </h4>
            <div className="flex gap-2.5 flex-wrap">
              <div className="flex gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/menabil"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-lg font-bold no-underline transition-all hover:bg-primary hover:text-white hover:scale-110 shadow-sm"
                >
                  <FaLinkedinIn />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/menabil"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-lg font-bold no-underline transition-all hover:bg-primary hover:text-white hover:scale-110 shadow-sm"
                >
                  <SiGithub />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/menabil.dev"
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-lg font-bold no-underline transition-all hover:bg-primary hover:text-white hover:scale-110 shadow-sm"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className="border-t border-white/8 py-5 text-center">
        <p className="text-white/30 text-[13px]">
          © {currentYear} Nabil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
