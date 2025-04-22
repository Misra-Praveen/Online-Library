import { categories, popularBooks } from "../utils/Books";
import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="p-6">
            <h1 className="bg-amber-100 p-2 mb-4 text-blue-400 font-bold text-3xl text-center">Welcome to the Online Library 📚</h1>
            
            <div className=" bg-gray-300 mb-6">
                <h3 className="text-2xl font-semibold text-white text-center bg-gradient-to-r from-blue-500 to-purple-600">Book Categories</h3>
                <ul className="list-none flex flex-wrap justify-center gap-4 p-6">
                  {categories.map((category, index) => (
                    <li key={index} className="min-w-[150px] flex-1 max-w-[200px]">
                      <Link
                        to={`/books/${category.toLowerCase()}`}
                        className="block text-center px-4 py-3 rounded-xl 
                        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                        text-white font-medium shadow-lg 
                        hover:shadow-xl hover:scale-[1.03] 
                        transform transition-all duration-300 ease-in-out
                        hover:bg-gradient-to-br hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
                        active:scale-95"
                      >
                        <span className="text-lg mr-2">📚</span>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>

            </div>
            <div className="bg-amber-50 mb-4 shadow-2xl rounded-2xl ">
                <h3 className="p-2 mb-2  bg-amber-300 text-start mb:text-center text-white text-xl font-semibold rounded-b-2xl ">Popular Books</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popularBooks.map((book)=>(
                        <div key={book.id} className="m-2 bg-white rounded-lg shadow hover:shadow-md transition p-4">
                          <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded mb-3"  />
                          <h4 className="text-lg font-bold">{book.title}</h4>
                          <p className="text-sm text-gray-700">by {book.author}</p>
                          <p className="text-sm text-gray-600">Rating: {book.rating}</p>
                          <Link to={`/book/${book.id}`} className="text-blue-600 hover:underline mt-2 block">
                            View Details
                          </Link>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
export default Home;