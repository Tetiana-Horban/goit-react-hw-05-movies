import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import Navigation from './components/Navigation/Navigation';
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';
import { AppWrapper } from './App.styled';

function App() {
  return (
    <AppWrapper>
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
    </AppWrapper>
  );
}

export default App;
