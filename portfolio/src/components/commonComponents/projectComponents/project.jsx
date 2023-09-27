import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Project({ id, name, img, description, allproject }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const [isItem, setIsItem] = useState(false);
  const projectDetail = [id, name, img, description];

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMoreInfoClick = () => {
    navigate(`/detailProject/${id}`); // Utilizar el ID del proyecto en la URL
  };

  useEffect(() => {
    projectDetail?.map((item) => {
      if (item.ProjectId === id) {
        setIsItem(true);
      }
    });
  }, [id, projectDetail]);

  return (
    <div
      className="relative rounded-md overflow-hidden bg-grey-800 border-4 bg-gradient-to-r from-black border-green-700 scale-x-75 scale-y-75 bg-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="font-mono font-bold text-green-700 text-2xl py-6">
        {name}
      </h2>
      <img
        src={img}
        alt={name}
        className="border-t-4 border-green-700 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
      />

      {hovered && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80">
          <button
            className="text-white bg-green-700 py-2 px-4 rounded font-mono"
            onClick={handleMoreInfoClick}
          >
            More Info
          </button>
        </div>
      )}
    </div>
  );
}

export default Project;
