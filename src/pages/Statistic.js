import { ContentContainer, LeftMenu, MainContainer } from "../components";
import Data from '../assets/data/data.json'
import styled from "styled-components";

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
`

const Statistic = () => {
  const { statistic } = Data.leftMenu;
  return (
    <MainContainer>
      <LeftMenu data={statistic}></LeftMenu>
      <ContentContainer>
        <SubTitle>협의현황 조회</SubTitle>
        <p>.</p>
      </ContentContainer>
    </MainContainer>
  );
};

export default Statistic;