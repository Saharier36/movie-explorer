import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>

      <div className="relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">DISCOVER MOVIES</h1>
        <p className="max-w-md text-xl font-bold mb-8 mx-auto">
          Explore and discover your favorite movies from around the world.
        </p>
        <Link
          to="/movies"
          className="bg-red-600 hover:bg-red-700 text-white text-2xl px-8 py-3 rounded font-semibold"
        >
          Explore Now <FaAngleRight className="inline-block h-8 w-8" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
