import { ContentContainer, LeftMenu, MainContainer } from "../components";
import Data from '../assets/data/data.json'
import styled from "styled-components";

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
`

const Join = () => {
  const { join } = Data.leftMenu;
  return (
    <MainContainer>
      <LeftMenu data={join}></LeftMenu>
      <ContentContainer>
        <SubTitle>협의진행현황 - 전략재해영향평가</SubTitle>
        <p>.</p>
      </ContentContainer>
    </MainContainer>
  );
};

export default Join;