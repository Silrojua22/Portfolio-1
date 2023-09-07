import { useRef } from "react";
import ProjectContainer from "../../commonComponents/projectComponents/projectContainer.jsx";

const Projects = () => {
  const projectSection = useRef(null);

  return (
    <section id="projects" className="py-36 text-center" ref={projectSection}>
      <div className="col-span-3 mb-8">
        <h2 className="text-2xl font-bold font-mono text-green-700">
          Projects
        </h2>
      </div>
      <div className="flex justify-center items-center w-full">
        <ProjectContainer />
      </div>
    </section>
  );
};

export default Projects;
