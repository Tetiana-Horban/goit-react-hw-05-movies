import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [searchMovie, setSearchMovie] = useState('');

  const handleMovieChange = event => {
    const normaliseMovieValue = event.currentTarget.value.toLowerCase();
    setSearchMovie(normaliseMovieValue);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchMovie.trim() === '') {
      return alert('Enter a search name');
    }
    onSubmit(searchMovie);
    setSearchMovie('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movie"
          onChange={handleMovieChange}
          value={searchMovie}
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
export default SearchBar;
