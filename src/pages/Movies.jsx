import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  const getAllShows = async () => {
    const response = await fetch("https://api.tvmaze.com/shows");
    const data = await response.json();
    setShows(data);
  };

  const searchShows = async (text) => {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${text}`,
    );
    const data = await response.json();
    setShows(data.map((item) => item.show));
  };

  useEffect(() => {
    getAllShows();
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value;
    setQuery(text);

    if (text.trim() === "") {
      getAllShows();
    } else {
      searchShows(text);
    }
  };

  return (
    <div className="min-h-screen bg-black px-6 pt-28 pb-10">
      <div className="relative max-w-xl mx-auto mb-10">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for a movie..."
          className="w-full bg-gray-900 text-white pl-11 pr-4 py-3 rounded outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {shows.map((show) => (
          <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} />
        ))}
      </div>

      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>
  );
}

export default Movies;
