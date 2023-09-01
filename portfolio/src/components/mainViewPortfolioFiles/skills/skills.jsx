import { useRef } from "react";

const Skills = () => {
  const skillsSectionRef = useRef(null);
  return (
    <section
      id="skills-section"
      className="py-24 grid grid-cols-3 gap-4 text-center"
      ref={skillsSectionRef}
    >
      <div className="col-span-3 mb-8">
        <h2 className="text-2xl font-bold font-mono text-green-700 ">Skills</h2>
      </div>
      <div className="text-center">
        <span className="text-white font-bold  font-mono block text-lg mb-6">
          Front end
        </span>
      </div>
      <div className="text-center">
        <span className="text-white font-bold  font-mono  block text-lg mb-6">
          Back end
        </span>
      </div>
      <div className="text-center">
        <span className="text-white font-bold  font-mono  block text-lg mb-6">
          Database
        </span>
      </div>
    </section>
  );
};

export default Skills;
