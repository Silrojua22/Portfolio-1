import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { DiReact, DiHtml5, DiCss3Full } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss, SiMinutemailer, SiSequelize } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineConsoleSql } from "react-icons/ai";

const Skills = () => {
  const skillsSectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderTechnologySection = (title, technologies) => {
    return (
      <div className="text-center">
        <span className="text-green-700 font-bold font-mono block text-lg mb-6 underline">
          {title}
        </span>
        {isMobile ? (
          // Muestra nombres en versión móvil
          <div className="text-white font-bold font-mono">
            {technologies.map((tech) => (
              <div className="mb-4" key={tech}>
                {tech}
              </div>
            ))}
          </div>
        ) : (
          // Muestra iconos en tabletas y escritorios
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="swiper w-48 h-64 sm:w-64 sm:h-80 md:w-40 md:h-56 flex flex-col items-center justify-center"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide flex flex-col items-center justify-center rounded-lg bg-black border-2 border-green-700"
              >
                {tech === "React" && (
                  <DiReact className="text-blue-400 text-7xl" />
                )}
                {tech === "HTML/CSS" && (
                  <DiHtml5 className="text-orange-500 text-7xl " />
                )}
                {tech === "HTML/CSS" && (
                  <DiCss3Full className="text-blue-500 text-7xl" />
                )}
                {tech === "Redux" && (
                  <TbBrandRedux className="text-violet-500 text-7xl" />
                )}
                {tech === "TailwindCss" && (
                  <SiTailwindcss className="text-teal-400 text-7xl" />
                )}
                {tech === "Node.js" && (
                  <IoLogoNodejs className="text-green-500 text-7xl" />
                )}
                {tech === "Express" && (
                  <IoLogoNodejs className="text-green-500 text-7xl" />
                )}
                {tech === "Nodemailer" && (
                  <SiMinutemailer className="text-green-500 text-7xl" />
                )}
                {tech === "PostgreSQL" && (
                  <BiLogoPostgresql className="text-blue-400 text-7xl" />
                )}
                {tech === "SQL" && (
                  <AiOutlineConsoleSql className="text-green-500 text-7xl" />
                )}
                {tech === "Sequelize" && (
                  <SiSequelize className="text-teal-400 text-7xl" />
                )}
                <div className="mt-2 text-green-700 font-bold font-mono">
                  {tech}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    );
  };

  return (
    <section
      id="skills-section"
      className="py-24 grid grid-cols-3 gap-4 text-center"
      ref={skillsSectionRef}
    >
      <div className="col-span-3 mb-8">
        <h2 className="text-2xl font-bold font-mono text-green-700">Skills</h2>
      </div>

      {renderTechnologySection("Front end", [
        "React",
        "HTML/CSS",
        "Redux",
        "TailwindCss",
      ])}
      {renderTechnologySection("Back end", [
        "Node.js",
        "Express",
        "Nodemailer",
      ])}
      {renderTechnologySection("Database", ["PostgreSQL", "SQL", "Sequelize"])}
    </section>
  );
};

export default Skills;
