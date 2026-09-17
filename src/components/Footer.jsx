import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../public/logo.svg";

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10 mt-10">
      <div className="flex items-center justify-center gap-2 mb-3">
        <img src={logo} alt="MovieExplorer Logo" className="h-8" />
        <span className="text-3xl font-extrabold">MovieExplorer</span>
      </div>

      <p className="text-sm mb-4">© 2026 MovieExplorer. All rights reserved.</p>

      <div className="flex items-center justify-center gap-6">
        <a
          href="https://github.com/Saharier36"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600 transition-colors"
        >
          <FaGithub className="h-6 w-6" />
        </a>

        <a
          href="https://linkedin.com/in/saharier-omi"
          target="_blank"
          rel="noreferrer"
          className="hover:text-red-600 transition-colors"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
