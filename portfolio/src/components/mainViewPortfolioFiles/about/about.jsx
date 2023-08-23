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

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="font-mono flex flex-col md:flex-row items-center justify-center h-screen"
      ref={aboutSectionRef}
    >
      <div className="w-80 h-80 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-40">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Image-About"
        />
      </div>
      <div className="text-center md:text-left m-4 md:m-20">
        <h1 className="text-2xl font-bold mb-2 w-48 md:w-auto">{typedText}</h1>
        <p className="text-lg">Hola soy yo</p>
      </div>
    </div>
  );
};

export default About;
