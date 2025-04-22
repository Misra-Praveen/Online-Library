import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Navbar() {
  // State to toggle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 px-6 py-4 flex justify-between items-center relative top-0">
      <h1 className="text-white font-semibold text-xl">📚 Online Library</h1>

      { !isMenuOpen ? (<button
        className="md:hidden text-white text-xl"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>) : null}
      

      
      <div className={`md:flex space-x-4 ${isMenuOpen ? "block absolute bg-gray-500 top-0 right-0" : "hidden"} md:block`}>
        <Link
          to="/"
          className="text-white font-semibold text-xl p-2 hover:underline flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </Link>
        <Link
          to="/books/All"
          className="text-white font-semibold text-xl p-2 hover:underline flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          Browse Books
        </Link>
        <Link
          to="/add-book"
          className="text-white font-semibold text-xl p-2 hover:underline flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Book
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
