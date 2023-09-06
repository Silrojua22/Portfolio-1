import { useRef } from "react";
import ProjectContainer from "../../commonComponents/projectComponents/projectContainer.jsx";

const Projects = () => {
  const projectSection = useRef(null);

  return (
    <section
      id="projects"
      className="py-36 grid grid-cols-3 gap-4 text-center"
      ref={projectSection}
    >
      <div className="col-span-3 mb-8">
        <h2 className="text-2xl font-bold font-mono text-green-700">
          Projects
        </h2>
      </div>
      <ProjectContainer />
    </section>
  );
};

export default Projects;
