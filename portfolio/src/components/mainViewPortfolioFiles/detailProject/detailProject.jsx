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
    <div>
      {projectDetail ? (
        <>
          <h1>{projectDetail.name}</h1>
          <img src={projectDetail.img} alt={projectDetail.name} />
          <p>{projectDetail.description}</p>
          <button onClick={handleBack}>Volver a Proyectos</button>
        </>
      ) : (
        <p>No se encontró el proyecto.</p>
      )}
    </div>
  );
};

export default DetailProject;
