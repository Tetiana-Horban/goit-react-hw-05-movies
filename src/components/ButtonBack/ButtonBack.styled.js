import styled from 'styled-components';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 2px solid black;
  border-radius: 15px;
  min-width: 200px;
  font-size: 25px;
  font-weight: 700;
  margin-left: 15px;
  margin-top: 40px;
  &:hover,
  &:focus {
    color: blue;
    border-color: blue;
  }
`;
const Icon = styled(MdOutlineKeyboardBackspace)`
  margin-right: 15px;
`;

export { Button, Icon };
