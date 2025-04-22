import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import BrowseBooks from './pages/BrowseBooks.jsx'
import BookDetails from './pages/BookDetails.jsx'
import AddBook from './pages/AddBook.jsx'
import { Provider } from "react-redux";
import store from "./utils/store.js";


const appRouter =createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement:<NotFound />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      
      {
        path:"/books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />
      },
      {
        path: "/add-book",
        element: <AddBook />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
      <RouterProvider router={appRouter} />
    </Provider>
)
