const API = 'https://api.themoviedb.org/3/';
const API_KEY = '7eedd525998609b7f929e764d7794f3d';

const fetchSearchMovies = name => {
  return fetch(
    `${API}search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Response.error(`error`);
  });
};

const fetchTrendingMovies = () => {
  return fetch(`${API}trending/all/day?api_key=${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Response.error(`error`);
  });
};
const fetchMovieDetails = movieId => {
  return fetch(`${API}movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Response.error(`error`);
    }
  );
};

const fetchMovieActors = movieId => {
  return fetch(
    `${API}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Response.error(`error`);
  });
};

const fetchMovieReviews = movieId => {
  return fetch(
    `${API}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Response.error(`error`);
  });
};

export {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieActors,
  fetchMovieReviews,
};
