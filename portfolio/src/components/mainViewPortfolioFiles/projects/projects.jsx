import { useRef, useEffect, useState } from "react";
import ProjectContainer from "../../commonComponents/projectComponents/projectContainer.jsx";
import { useDispatch } from "react-redux";
import { getProjects } from "../../../redux/projectActions.js";
import DetailProject from "../../mainViewPortfolioFiles/detailProject/detailProject.jsx";

const Projects = () => {
  const projectSection = useRef(null);
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState(null);
  console.log(selectedProject);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects-section"
      className="py-36 text-center"
      ref={projectSection}
    >
      <div className="col-span-3 mb-8">
        <h2 className="text-2xl font-bold font-mono text-green-700">
          Projects
        </h2>
      </div>
      {selectedProject ? (
        <DetailProject
          project={selectedProject}
          onBack={handleBackToProjects}
        />
      ) : (
        <div className="flex justify-center items-center w-full">
          <ProjectContainer onProjectClick={handleProjectClick} />
        </div>
      )}
    </section>
  );
};

export default Projects;
