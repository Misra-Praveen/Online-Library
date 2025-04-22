import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/booksSlice";
import { useNavigate } from "react-router-dom";
import { categories } from "../utils/Books";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !author || !category || !image || !description) {
      setError("All fields are required.");
      return;
    }

    if (rating < 1 || rating > 5) {
      setError("Rating must be between 1 and 5.");
      return;
    }
    setError("");

    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
      image,
      rating,
      description,
    };
    setTitle("");
    setAuthor("");
    setCategory("");
    setImage("");
    setRating("");
    setDescription("");
    dispatch(addBook(newBook));
    navigate(`/books/${category.toLowerCase()}`);
  }

  return (
    <div className="max-w-xl mx-auto  m-4 shadow-xl rounded-b-2xl">
      <h2 className="text-2xl text-center text-white bg-blue-800 p-2 mb-4">
        Add a New Book
      </h2>
      {error && <p className="text-red-500 text-xl text-center p-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 p-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. The Psychology of Money"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Morgan Housel"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="https://example.com/book.jpg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rating (1–5)
          </label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            min={1}
            max={5}
            step="0.1"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          ➕ Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
