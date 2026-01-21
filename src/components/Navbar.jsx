import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 md:px-6 md:pt-4">
      <div className="max-w-9xl mx-auto bg-white/70 backdrop-blur-xl border-b md:border border-blue-200/50 md:rounded-3xl shadow-xl">
        <div className="px-6 md:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl md:text-3xl font-bold text-blue-600">
              Dil se
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-600 transition-colors font-semibold text-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
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
