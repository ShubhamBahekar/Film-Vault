import App from '../App';
import Home from "../pages/home/Home"
import LoginPage from '../pages/login/Login';
import MovieDetailView from '../pages/movieDetails/MovieDetails';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../shared/layouts/publicLayout';
import UserLayout from '../shared/layouts/userLayout';

const router = createBrowserRouter([

{
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "login", element: <LoginPage /> },
    ],
},

  {
    path: '/',
    element: <UserLayout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'movie/:id', element: <MovieDetailView /> },
      { path: '*', element: <Navigate to="/login" /> },
    ],
  },
]);

export default router;
