import { useState, useEffect } from "react";
import { popularBooks } from "../utils/Books";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const { category } = useParams();
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(popularBooks);
  const booksList = useSelector((state) => state.books.booksList);
  const lastAdded = useSelector((state) => state.books.lastAddedBook);

  function handleSearch() {
    const filtered = booksList.filter((book) => {
      const matchCategory =
        category.toLowerCase() === "all" ||
        book.category.toLowerCase() === category.toLowerCase();

      const matchSearch =
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase());
      return matchCategory && matchSearch;
    });
    setFilteredBooks(filtered);
  }

  useEffect(() => {
    handleSearch();
  }, [category, booksList]);

  return (
    <div className="p-4 bg-amber-50">
      <div className="flex flex-col gap-4 sm:gap-6 mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center sm:text-left">
          📚 Browse Books - <span className="text-blue-600">{category}</span>
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full max-w-2xl mx-auto">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-4 py-2 text-sm shadow-sm transition duration-200"
            placeholder="Search by title or author..."
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            🔍 Search
          </button>
        </div>
      </div>

      {lastAdded &&
      (lastAdded.category.toLowerCase() === category || category.toLowerCase() === "all") ? (
        <div className="my-6 p-4 md:w-[380px] bg-green-100 rounded shadow">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            Recently Added Book
          </h2>
          <div
            key={lastAdded.id}
            className="m-2 bg-white rounded-lg shadow hover:shadow-md transition p-4"
          >
            <img
              src={lastAdded.image}
              alt={lastAdded.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h4 className="text-lg font-bold">{lastAdded.title}</h4>
            <p className="text-sm text-gray-700">by {lastAdded.author}</p>
            <p className="text-sm text-gray-600">
              Category: {lastAdded.category}
            </p>
            <p className="text-sm text-gray-600">Rating: {lastAdded.rating}</p>
            <Link
              to={`/book/${lastAdded.id}`}
              className="text-white font-semibold text-center bg-blue-700 hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
          
        </div>
      ) : null}

      {lastAdded &&
      (lastAdded.category.toLowerCase() === category || category.toLowerCase() === "all") ? (
        <hr className="md:w-[380px] h-2 shadow-3xl shadow-purple-500" />
      ) : null
        
      }

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="m-2 bg-white rounded-lg shadow hover:shadow-md transition p-4"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h4 className="text-lg font-bold">{book.title}</h4>
              <p className="text-sm text-gray-700">by {book.author}</p>
              <p className="text-sm text-gray-600">Category: {book.category}</p>
              <p className="text-sm text-gray-600">Rating: {book.rating}</p>
              <Link
                to={`/book/${book.id}`}
                className="text-white font-semibold text-center bg-blue-700 hover:underline mt-2 block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}
export default BrowseBooks;
