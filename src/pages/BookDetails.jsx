import { useParams, useNavigate } from "react-router-dom";
import { popularBooks } from "../utils/Books";
import { useSelector } from "react-redux";



function BookDetails(){
    const {id}=useParams();
    const booksList = useSelector((state) => state.books.booksList);
    const navigate = useNavigate();

    const book = booksList.find((book)=>book.id.toString()===id)
    
    if (!book) {
        return <p className="p-4 text-red-500">Book not found.</p>;
    }
    return (
        <div className="p-4 bg-amber-50">
            <button 
                onClick={() => navigate(-1)} 
                className="mb-4 bg-gray-300 px-4 py-2 rounded"
            >
                Back to Browse
            </button>

            <div className="m-2 bg-white p-4 rounded shadow">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded mb-3"  />
                <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
                <p className="text-lg text-gray-700 mb-2">by {book.author}</p>
                <p className="text-sm text-gray-600 mb-2">Category: {book.category}</p>
                <p className="text-sm text-gray-600 mb-4">Rating: {book.rating}</p>
                <p className="text-base">{book.description}</p>
            </div>
        </div>
    )
}
export default BookDetails;