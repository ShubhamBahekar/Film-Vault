
import './App.css'
// import Home from './pages/home/Home';
import MovieDetailView from './pages/movieDetails/MovieDetails';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App() {

return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:id" element={<MovieDetailView />} />
      </Routes>
    </Router>
  )

}

export default App
     
