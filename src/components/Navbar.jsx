import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 lg:px-40 py-6 bg-linear-to-b from-black/80 to-transparent">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="MovieExplorer Logo" className="h-8" />
        <span className="text-red-600 text-3xl font-bold">MovieExplorer</span>
      </Link>
      <Link
        to="/movies"
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded font-semibold"
      >
        Movies
      </Link>
    </nav>
  );
}

export default Navbar;
