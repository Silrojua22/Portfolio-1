import { useRef, useEffect } from "react";
import ProjectContainer from "../../commonComponents/projectComponents/projectContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../redux/projectActions.js";

const Projects = () => {
  const projectSection = useRef(null);
  const dispatch = useDispatch();
  // const allProjects = useSelector((state) => state.projectReducer.allProjects);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

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
      <div className="flex justify-center items-center w-full">
        <ProjectContainer />
      </div>
    </section>
  );
};

export default Projects;
