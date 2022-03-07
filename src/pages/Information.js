import { ContentContainer, LeftMenu, MainContainer } from "../components";
import Data from '../assets/data/data.json'
import styled from "styled-components";

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
`

const Information = () => {
  const { information } = Data.leftMenu;
  return (
    <MainContainer>
      <LeftMenu data={information}></LeftMenu>
      <ContentContainer>
        <SubTitle>전체목록</SubTitle>
        <p>.</p>
      </ContentContainer>
    </MainContainer>
  );
};

export default Information;