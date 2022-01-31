import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import Navigation from './components/Navigation/Navigation';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" exact="true" element={<HomePage />} />
        <Route path="/movies" exact="true" element={<MoviesPage />} />
        <Route path="/movies/:idMovie" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
