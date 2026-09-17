import { useState } from "react";
import { FaCalendarAlt, FaStar, FaTimes, FaTimesCircle } from "react-icons/fa";

function MovieModal({ show, onClose }) {
  const [expanded, setExpanded] = useState(false);
  const { name, rating, premiered, image, summary, genres } = show;
  const description = summary?.replace(/<[^>]*>/g, "");

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 max-w-lg w-full rounded overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={image?.original}
            alt={name}
            className="w-full h-56 object-cover"
          />

          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white cursor-pointer hover:text-red-600 transition-colors"
          >
            <FaTimesCircle className="h-6 w-6" />
          </button>
        </div>

        <div className="p-5">
          <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>

          <div className="text-gray-400 mb-3 flex gap-4">
            <span>
              <FaStar className="inline text-yellow-500 mr-1" />
              Rating: {rating?.average}
            </span>

            <span>
              <FaCalendarAlt className="inline mr-1" />
              Release: {premiered}
            </span>
          </div>

          <h3 className="text-white font-semibold mb-1">Overview:</h3>

          <p className="text-gray-300 text-sm mb-4">
            {expanded || description.length <= 200
              ? description
              : description.slice(0, 200)}{" "}
            {description.length > 200 && (
              <button
                className="text-red-500 cursor-pointer"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "See less" : "See more..."}
              </button>
            )}
          </p>

          <p className="text-white text-sm font-medium mb-4">
            Genre: {genres?.join(", ")}
          </p>

          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <FaTimes /> Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
