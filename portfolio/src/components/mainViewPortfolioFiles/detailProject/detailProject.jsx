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
    <div className="flex items-center justify-center min-h-screen">
      {projectDetail ? (
        <>
          <div className="md:w-3/5 p-4 ml-20">
            {" "}
            {/* Añade ml-20 para mover la información hacia la izquierda */}
            <h1 className="text-2xl font-bold mb-4 font-mono text-green-700">
              {projectDetail.name}
            </h1>
            <p className="text-gray-700">{projectDetail.description}</p>
            <button
              onClick={handleBack}
              className="text-white bg-green-700 py-2 px-4 rounded font-mono mt-4"
            >
              Volver a Proyectos
            </button>
          </div>
          <div className="md:w-2/5 mr-20">
            {" "}
            {/* Añade mr-20 para mover la imagen hacia la derecha */}
            <img
              src={projectDetail.img}
              alt={projectDetail.name}
              className="w-full rounded-lg shadow-lg mb-4 border border-green-700"
            />
          </div>
        </>
      ) : (
        <p className="text-red-500">No se encontró el proyecto.</p>
      )}
    </div>
  );
};

export default DetailProject;
