import Project from "./project.jsx";
import { useSelector } from "react-redux";

function ProjectContainer({ onProjectClick }) {
  const allProjects = useSelector((state) => state.projectReducer.allProjects);

  return (
    <div className="grid grid-cols-2 gap-4">
      {allProjects.length === 0 ? (
        <p>No se encontraron proyectos</p>
      ) : (
        allProjects.map((project) => (
          <Project
            key={project.id}
            onClick={() => onProjectClick(project)}
            {...project}
          />
        ))
      )}
    </div>
  );
}

export default ProjectContainer;
