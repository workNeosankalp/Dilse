import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Users } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 md:px-6 md:pt-4">
      <div className="max-w-9xl mx-auto bg-white/70 backdrop-blur-xl border-b md:border border-blue-200/50 md:rounded-3xl shadow-xl">
        <div className="px-6 md:px-8 py-2 md:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className="flex items-center gap-3"
            >
              {/* Logo */}
              <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg p-2">
                <Users
                  className="text-white h-7 md:h-9 w-7 md:w-9"
                  strokeWidth={2}
                />
              </div>

              {/* Brand Name */}
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
                ReckMe
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className="text-gray-800 hover:text-blue-600 transition-colors font-semibold text-lg"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={(e) => {
                  if (window.location.pathname === "/about") {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }
                }}
                className="text-gray-800 hover:text-blue-600 transition-colors font-semibold text-lg"
              >
                About
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 hover:text-blue-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-blue-200/60 space-y-4 pb-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-blue-600 transition-colors font-semibold text-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-blue-600 transition-colors font-semibold text-lg"
              >
                About
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
