import './App.css'
import Home from './pages/home/Home';
import MovieDetailView from './pages/movieDetails/MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './shared/components/privateRoute/PrivateRoute';
import LoginPage from './pages/login/Login';

function App() {
  return (
    <Router>
      <Routes>
  
        <Route path="/login" element={<LoginPage />} />


        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/movie-details/:id"
          element={
            <PrivateRoute>
              <MovieDetailView />
            </PrivateRoute>
          }
        />

     
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
