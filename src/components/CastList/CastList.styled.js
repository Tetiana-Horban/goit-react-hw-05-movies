import styled from 'styled-components';

const ListCast = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style: none;
`;
const ItemCast = styled.li`
  margin: 30px;
`;
const Img = styled.img`
  border: 2px solid black;
  border-radius: 12px;
`;
const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
  max-width: 300px;
`;
const Text = styled.p`
  font-size: 20px;
  max-width: 300px;
`;
const BoldText = styled.span`
  font-weight: 700;
`;
export { ListCast, ItemCast, Img, Title, Text, BoldText };
