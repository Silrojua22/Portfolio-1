import { useState } from "react";
import { Link } from "react-router-dom";
function Project(props) {
  const { title, img } = props;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative rounded-md overflow-hidden bg-grey-800 border-4 bg-gradient-to-r from-black border-green-700 scale-x-75 scale-y-75 bg-gray-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="font-mono font-bold text-green-700 text-2xl py-6">
        {title}
      </h2>
      <img
        src={img}
        alt={title}
        className="border-t-4 border-green-700 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
      />

      {hovered && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80">
          <Link to="/detail-project">
            <button className="text-white bg-green-700 py-2 px-4 rounded font-mono">
              More Info
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Project;
