import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {
  useEffect(() => {
    // Native smooth scrolling is handled via CSS
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 1024) {
      e.preventDefault();
      const elem = e.currentTarget;
      const section = elem.getAttribute("data-href");
      if (section) {
        document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          MI
        </a>
        <a
          href="mailto:mi5456531@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          mi5456531@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about" onClick={handleNavClick}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={handleNavClick}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={handleNavClick}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
