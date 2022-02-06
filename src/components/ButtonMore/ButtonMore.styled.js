import styled from 'styled-components';

const Button = styled.button`
  min-height: 50px;
  min-width: 100px;
  border: 2px solid darkgray;
  border-radius: 15px;
  font-size: 18px;
  font-style: italic;
  color: grey;
  background-color: lightgray;
  &:hover,
  &:focus {
    color: blue;
    border-color: blue;
  }
`;
export default Button;
