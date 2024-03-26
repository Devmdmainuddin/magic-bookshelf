import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App';
import Home from './Pages/Home';
import BooksList from './Pages/BooksList'
import BooksDetails from './Pages/BooksDetails'
import PagesToRead from './Pages/PagesToRead';
import ErrorPage from './ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('/FakeBooks.json')
      },
      {
        path: "/bookslist",
        element: <BooksList></BooksList>,
        loader: () =>fetch('/FakeBooks.json')
      },
    
      {
        path: "/book/:bookId",
        element: <BooksDetails></BooksDetails> ,
        loader: () =>fetch('/FakeBooks.json')
      },
      {
        path: "/readbooks",
        element: <PagesToRead></PagesToRead> ,
        loader: () =>fetch('/FakeBooks.json')
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
