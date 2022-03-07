import { LeftMenu, MainContainer, ContentContainer } from "../components";
import Data from '../assets/data/data.json'

const About = () => {
  const { about } = Data.leftMenu;
  return (
    <MainContainer>
      <LeftMenu data={about}></LeftMenu>
      <ContentContainer>
        <div>소개</div>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      </ContentContainer>
    </MainContainer>
  );
};

export default About;