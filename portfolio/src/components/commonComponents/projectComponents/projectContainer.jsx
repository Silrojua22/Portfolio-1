import Project from "./project.jsx";
import { useSelector } from "react-redux";

function ProjectContainer() {
  const allProjects = useSelector((state) => state.projectReducer.allProjects);
  console.log(allProjects);

  return (
    <div className="grid grid-cols-2 gap-4">
      {allProjects.length === 0 ? (
        <p>No se encontraron proyectos</p>
      ) : (
        allProjects.map(({ id, name, img, description }) => (
          <Project
            key={id}
            id={id}
            name={name}
            img={img}
            description={description}
          />
        ))
      )}
    </div>
  );
}

export default ProjectContainer;
