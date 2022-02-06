import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Input, ButtonSubmit } from '../SearchBar/SearchBar.styled';
import { FcSearch } from 'react-icons/fc';

const SearchBar = ({ onSubmit }) => {
  const location = useLocation();
  console.log(location);
  const [searchMovie, setSearchMovie] = useState('');

  const handleMovieChange = event => {
    const normaliseMovieValue = event.currentTarget.value.toLowerCase();
    setSearchMovie(normaliseMovieValue);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchMovie.trim() === '') {
      return toast('Enter a search name');
    }
    onSubmit(searchMovie);
    setSearchMovie('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ButtonSubmit type="submit">
        <FcSearch size={35} />
      </ButtonSubmit>
      <Input
        type="text"
        placeholder="Search movie"
        onChange={handleMovieChange}
        value={searchMovie}
        autoFocus
      />
    </Form>
  );
};
export default SearchBar;
