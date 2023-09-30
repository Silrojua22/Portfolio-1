import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDetailProject } from "../../../redux/projectActions.js";

const DetailProject = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const projectDetail = useSelector(
    (state) => state.projectReducer.projectDetail
  );

  useEffect(() => {
    dispatch(fetchDetailProject(id));
  }, [dispatch, id]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-4">
      {projectDetail ? (
        <div className="max-w-screen-xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 font-mono text-green-700 underline text-center">
            {projectDetail.name}
          </h1>
          <div className="lg:flex lg:flex-row lg:space-x-8 lg:items-center p-4">
            <div className="lg:w-1/2 mb-4">
              <img
                src={projectDetail.img}
                alt={projectDetail.name}
                className="w-full rounded-lg shadow-lg border border-green-700"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="text-green-700 mb-4">
                <span className="text-xl font-bold">Description:</span>{" "}
                {projectDetail.description}
              </p>
              <p className="text-green-700 mb-4">
                <span className="text-xl font-bold">Code:</span>{" "}
                <a
                  href={projectDetail.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {projectDetail.code}
                </a>
              </p>
              <p className="text-green-700 mb-4">
                <span className="text-xl font-bold">Technologies:</span>{" "}
                {projectDetail.technologies}
              </p>
              <p className="text-green-700 mb-4">
                <span className="text-xl font-bold">Project Type:</span>{" "}
                {projectDetail.projectType}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleBack}
                  className="text-white bg-green-700 py-2 px-4 rounded font-mono mt-4"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500">The project was not found.</p>
      )}
    </div>
  );
};

export default DetailProject;
