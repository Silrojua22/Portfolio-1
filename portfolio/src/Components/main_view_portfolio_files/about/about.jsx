import React, { useState, useEffect } from "react";
import image from "../../../assets/Image-About.jpg";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "About me";

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

  return (
    <div className="font-mono flex flex-col md:flex-row items-center justify-center h-screen">
      <div className="w-60 h-60 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-8">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Image-About"
        />
      </div>
      <div className="text-center md:text-left m-4 md:m-0">
        <h1 className="text-xl font-bold mb-2 w-40 md:w-auto">{typedText}</h1>
        <p>Hola soy yo</p>
      </div>
    </div>
  );
};

export default About;
