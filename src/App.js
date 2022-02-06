import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import { AppWrapper } from './App.styled';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

function App() {
  return (
    <AppWrapper>
      <Navigation />
      <Routes>
        <Route
          path="/"
          exact="true"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          exact="true"
          element={
            <Suspense fallback={<Loader />}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:idMovie"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetailsPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />{' '}
            </Suspense>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'dark'}
      />
    </AppWrapper>
  );
}

export default App;
