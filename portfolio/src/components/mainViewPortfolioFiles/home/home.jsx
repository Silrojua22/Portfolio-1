import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { getProjects } from "../../../redux/projectActions.js/";
import About from "../about/about.jsx";
import Skills from "../skills/skills.jsx";
import Projects from "../projects/projects.jsx";
import Contact from "../contact/contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const allProject = useSelector((state) => state.projectReducer.allproject);
  const dispatch = useDispatch();

  const [typedText, setTypedText] = useState("");
  const fullText = "Hi! My name is Silvio Rodrigo Juarez";
  const homeSectionRef = useRef(null);
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTypedText(fullText);
        }, 2000);
      }
    }, 70);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (!allProject) {
      axios.get("/api").then(() => dispatch(getProjects()));
    } else {
      dispatch(getProjects());
    }
  }, [dispatch]);
  return (
    <section
      id="home-section"
      ref={homeSectionRef}
      className=" justify-center items-center min-h-screen font-mono text-green-700 grid gird cols-3"
    >
      <div className="text-center w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl">
          {typedText}
          <br />
        </h1>
        <div className="my-4">
          {typedText === fullText && (
            <div className="inline-block">
              <h1 className="text-4xl">
                <span className="text-green-700 border-b-4 border-black">
                  Full Stack Web Developer.
                </span>
              </h1>
            </div>
          )}
        </div>
        <p>
          <Link
            to="about-section"
            smooth={true}
            className="inline-block text-green-700 no-underline hover:text-accentColor cursor-pointer text-2xl"
          >
            About me
          </Link>
        </p>
      </div>

      <div>
        <About />
        <Skills />
        <Projects />
        <Contact className="h-4/6" />
      </div>
    </section>
  );
};

export default Home;
