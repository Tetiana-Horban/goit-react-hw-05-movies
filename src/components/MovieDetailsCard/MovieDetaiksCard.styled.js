import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 15px;
  border-bottom: 2px double white;
`;
const Title = styled.h2`
  font-size: 30px;
  color: black;
`;
const Text = styled.p`
  font-size: 20px;
`;
const BoldText = styled.span`
  color: black;
  font-size: 25px;
  font-weight: 700;
`;
const List = styled.ul`
  font-size: 25px;
  font-weight: 700;
  color: black;
`;
const Item = styled.li`
  color: white;
  font-size: 20px;
  &:first-child {
    margin-top: 15px;
  }
`;
const DetailsText = styled.div`
  margin-left: 40px;
`;
const BorderstyleImg = styled.img`
  border: 2px double black;
  border-radius: 15px;
`;
export { Text, Card, Title, BoldText, List, Item, BorderstyleImg, DetailsText };
