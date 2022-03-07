import { ContentContainer, LeftMenu, MainContainer } from "../components";
import Data from '../assets/data/data.json'
import styled from "styled-components";

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
`

const Assessment = () => {
  const { assessment } = Data.leftMenu;
  return (
    <MainContainer>
      <LeftMenu data={assessment}></LeftMenu>
      <ContentContainer>
        <SubTitle>건강영향평가 소개</SubTitle>
        <p>.</p>
      </ContentContainer>
    </MainContainer>
  );
};

export default Assessment;