import { useState, useEffect, useRef } from "react";
import image from "../../../assets/Image-About.jpg";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "About me";
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
        }
      });
    }, options);

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }
  }, []);

  return (
    <section
      id="about-section"
      className="py-16 flex flex-col md:flex-row items-center justify-center h-auto"
      ref={aboutSectionRef}
    >
      <div className="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-10 border-4 border-green-700">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Image-About"
        />
      </div>

      <div className="text-center md:text-left m-4 md:m-20 ">
        <h2
          className={`text-2xl font-mono font-bold mb-2 md:w-auto text-green-700 ${
            typedText && "mx-auto md:mx-0"
          }`}
        >
          {typedText}
        </h2>

        <div className="max-w-md mx-auto md:mx-0 text-white">
          <p className="text-lg mb-6">
            Hello! I'm Silvio, a passionate developer who loves to create
            amazing web experiences. I specialize in back-end development and
            have a solid command of modern web technologies like Node.js,
            Express, SQL, PostgreSQL.
          </p>
          <p className="text-lg mb-6">
            I have a solid track record as a sales and customer experience
            consultant in the financial industry. My ability to resolve claims
            effectively and my dedication to teamwork have been instrumental in
            developing transferable skills to the development arena.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me enjoying outdoor activities,
            reading tech blogs, and experimenting with new coding projects.
          </p>

          <div className="mt-4">
            <span className="ml-10">
              <a
                rel="noreferrer"
                target="_blank"
                href="/CV- FullStack-SRJ-English.pdf"
                className="text-green-700 hover:underline p-4"
              >
                Resume English
              </a>
            </span>
            |
            <span>
              <a
                rel="noreferrer"
                target="_blank"
                href="/CV- FullStack-SRJ-Spanish.pdf"
                className="text-green-700 hover:underline p-4"
              >
                Resume Spanish
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
