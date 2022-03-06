import styled from 'styled-components';
import { MainList, SearchInput } from '../components';
import Data from '../assets/data/data.json'
import Card from '../components/Card';

const CardContainerStyle = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Home = () => {
  const cardData = Data.mainCardData;
  return (
    <>
      <SearchInput />
      <CardContainerStyle>
        { cardData && cardData.map(item => <Card imgSrc={item.imgSrc}>{item.name}</Card>)}
      </CardContainerStyle>
      <MainList />
    </>
  );
};

export default Home;