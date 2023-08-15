import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center h-20 w-full bg-white shadow-md">
      <Link to="/" className="ml-8 text-xl">
        Logo
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
              <NavLink
                to="/"
                activeClassName="text-accentColor"
                className="text-black no-underline hover:text-accentColor"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink
                to="/About"
                activeClassName="text-accentColor"
                className="text-black no-underline hover:text-accentColor"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink
                to="/Skills"
                activeClassName="text-accentColor"
                className="text-black no-underline hover:text-accentColor"
                onClick={toggleMenu}
              >
                Skills
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink
                to="/Projects"
                activeClassName="text-accentColor"
                className="text-black no-underline hover:text-accentColor"
                onClick={toggleMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink
                to="/Contact"
                activeClassName="text-accentColor"
                className="text-black no-underline hover:text-accentColor"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <ul className="hidden md:flex space-x-8">
        <li className="inline-block">
          <NavLink
            to="/#"
            activeClassName="border-accentColor"
            className="text-black text-lg no-underline hover:text-accentColor"
          >
            Home
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink
            to="/#About"
            activeClassName="border-accentColor"
            className="text-black text-lg no-underline hover:text-accentColor"
          >
            About
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink
            to="/#Skills"
            activeClassName="border-accentColor"
            className="text-black text-lg no-underline hover:text-accentColor"
          >
            Skills
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink
            to="/#Projects"
            activeClassName="border-accentColor"
            className="text-black text-lg no-underline hover:text-accentColor"
          >
            Projects
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink
            to="/#Contact"
            activeClassName="border-accentColor"
            className="text-black text-lg no-underline hover:text-accentColor"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
