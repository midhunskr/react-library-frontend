import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './error-page';
import Home, {loader as homeLoader} from './routes/home';
import Authors, {loader as authorsLoader} from './routes/authors';
import Signup from './routes/signup';
import Login from './routes/login';
import store from './app/store'
import { Provider } from 'react-redux'
import Logout from './routes/logout';
import Book, {loader as bookLoader} from './routes/book';
import Author, {loader as authorLoader} from './author';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "/authors",
        element: <Authors />,
        loader: authorsLoader
      },
      {
        path: "/authors/:authorId",
        element: <Author />,
        loader: authorLoader
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/books/:bookId",
        element: <Book />,
        loader: bookLoader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
