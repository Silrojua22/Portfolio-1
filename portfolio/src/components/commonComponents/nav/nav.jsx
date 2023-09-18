import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../../assets/logo-1.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home-section");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="sticky top-0 z-50 font-mono flex justify-between items-center h-20 w-full bg-black backdrop:shadow-md">
      <ScrollLink
        to="home-section"
        smooth={true}
        className="text-xl flex items-center"
        spy={true}
        activeClass="active"
        onSetActive={handleSetActive}
      >
        <img src={logo} alt="Logo" className="h-12 mr-2" />
        <span className="text-xl font-semibold text-white cursor-pointer">
          S.R.J.
        </span>
      </ScrollLink>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none focus:bg-gray-200"
        >
          <svg
            className="w-6 h-6 fill-current text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute top-16 right-0 mt-2 bg-white shadow-md border border-gray-200 divide-y divide-gray-300">
            <li className="px-4 py-2">
              <ScrollLink
                to="home-section"
                smooth={true}
                className={`block text-green-700 no-underline cursor-pointer ${
                  activeLink === "home-section" ? "active" : "text-black"
                }`}
                spy={true}
                activeClass="active"
                onSetActive={handleSetActive}
                onClick={toggleMenu}
              >
                Home
              </ScrollLink>
            </li>
            <li className="px-4 py-2">
              <ScrollLink
                to="about-section"
                smooth={true}
                className={`block text-green-700 no-underline cursor-pointer ${
                  activeLink === "about-section" ? "active" : "text-black"
                }`}
                spy={true}
                activeClass="active"
                onSetActive={handleSetActive}
                onClick={toggleMenu}
              >
                About
              </ScrollLink>
            </li>
            <li className="px-4 py-2">
              <ScrollLink
                to="skills-section"
                smooth={true}
                className={`block text-green-700 no-underline cursor-pointer ${
                  activeLink === "skills-section" ? "active" : "text-black"
                }`}
                spy={true}
                activeClass="active"
                onSetActive={handleSetActive}
                onClick={toggleMenu}
              >
                Skills
              </ScrollLink>
            </li>
            <li className="px-4 py-2">
              <ScrollLink
                to="projects-section"
                smooth={true}
                className={`block text-green-700 no-underline cursor-pointer ${
                  activeLink === "projects-section" ? "active" : "text-black"
                }`}
                spy={true}
                activeClass="active"
                onSetActive={handleSetActive}
                onClick={toggleMenu}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="px-4 py-2">
              <ScrollLink
                to="  "
                smooth={true}
                className={`block text-green-700 no-underline cursor-pointer ${
                  activeLink === "contact-section" ? "active" : "text-black"
                }`}
                spy={true}
                activeClass="active"
                onSetActive={handleSetActive}
                onClick={toggleMenu}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        )}
      </div>
      <ul className="hidden md:flex space-x-8 mr-4">
        <li>
          <ScrollLink
            to="home-section"
            smooth={true}
            className={`text-lg no-underline cursor-pointer ${
              activeLink === "home-section"
                ? "text-green-700 active"
                : "text-white"
            }`}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about-section"
            smooth={true}
            className={`text-lg no-underline cursor-pointer ${
              activeLink === "about-section"
                ? "text-green-700 active"
                : "text-white"
            }`}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="skills-section"
            smooth={true}
            className={`text-lg no-underline cursor-pointer ${
              activeLink === "skills-section"
                ? "text-green-700 active"
                : "text-white"
            }`}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects-section"
            smooth={true}
            className={`text-lg no-underline cursor-pointer ${
              activeLink === "projects-section"
                ? "text-green-700 active"
                : "text-white"
            }`}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact-section"
            smooth={true}
            className={`text-lg no-underline cursor-pointer ${
              activeLink === "contact-section"
                ? "text-green-700 active"
                : "text-white"
            }`}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
