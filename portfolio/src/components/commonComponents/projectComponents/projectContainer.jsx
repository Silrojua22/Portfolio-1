import { projectData } from "./projectData";
import Project from "./project.jsx";

function ProjectContainer() {
  return (
    <div>
      {projectData.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          img={project.img}
        />
      ))}
    </div>
  );
}

export default ProjectContainer;
