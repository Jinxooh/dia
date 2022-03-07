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
  const listData = Data.mainListData;
  return (
    <>
      <SearchInput />
      <CardContainerStyle>
        { cardData && cardData.map(item => <Card item={item} key={item.id} imgSrc={item.imgSrc}>{item.name}</Card>)}
      </CardContainerStyle>
      <MainList data={listData}/>
    </>
  );
};

export default Home;