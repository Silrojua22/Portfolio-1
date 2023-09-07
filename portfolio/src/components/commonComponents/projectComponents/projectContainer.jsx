import { projectData } from "./projectData";
import Project from "./project.jsx";

function ProjectContainer() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projectData.map((project) => (
        <Project key={project.id} title={project.title} img={project.img} />
      ))}
    </div>
  );
}

export default ProjectContainer;
