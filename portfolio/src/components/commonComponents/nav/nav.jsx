import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../../assets/logo-1.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 font-mono flex justify-between items-center h-20 w-full bg-white shadow-md">
      <Link to="home-section" className="text-xl flex items-center">
        <img src={logo} alt="Logo" className="h-12 mr-2" />
        <span className="text-xl font-semibold text-green-700">S.R.J.</span>
      </Link>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none focus:bg-gray-200"
        >
          <svg
            className="w-6 h-6 fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute top-16 right-0 mt-2 bg-white shadow-md border border-gray-200 divide-y divide-gray-300">
            <li className="px-4 py-2">
              <Link
                to="home-section"
                smooth={true}
                className="block text-black no-underline hover:text-green-700"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="about-section"
                smooth={true}
                className="block text-black no-underline hover:text-green-700"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="skills-section"
                smooth={true}
                className="block text-black no-underline hover:text-green-700"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="projects-section"
                smooth={true}
                className="block text-black no-underline hover:text-green-700"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link
                to="contact-section"
                smooth={true}
                className="block text-black no-underline hover:text-green-700"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link
            to="home-section"
            smooth={true}
            className="text-black text-lg no-underline hover:text-green-700 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-section"
            smooth={true}
            className="text-black text-lg no-underline hover:text-green-700 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills-section"
            smooth={true}
            className="text-black text-lg no-underline hover:text-green-700 cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects-section"
            smooth={true}
            className="text-black text-lg no-underline hover:text-green-700 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact-section"
            smooth={true}
            className="text-black text-lg no-underline hover:text-green-700 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
