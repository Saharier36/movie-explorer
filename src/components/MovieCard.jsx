import { FaCalendarAlt, FaStar } from "react-icons/fa";

function MovieCard({ show, onSeeDetails }) {
  const { name, rating, premiered, image } = show;

  return (
    <div className="bg-gray-900 rounded overflow-hidden hover:scale-105 transition-transform">
      <img
        src={image?.medium}
        alt={name}
        className="w-full h-72 object-cover"
      />

      <div className="p-3">
        <h3 className="text-white md:text-xl font-semibold truncate">{name}</h3>

        <div className="text-gray-400 text-sm mt-1 flex gap-3">
          <span>
            <FaStar className="inline text-yellow-500 mr-1" />
            {rating?.average}
          </span>

          <span>
            <FaCalendarAlt className="inline mr-1" />
            {premiered?.slice(0, 4)}
          </span>
        </div>

        <button
          onClick={() => onSeeDetails(show)}
          className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-1.5 rounded text-sm font-semibold cursor-pointer transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
