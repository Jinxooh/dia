import { LeftMenu, MainContainer } from "../components";

const About = () => {
  return (
    <MainContainer>
      <LeftMenu>left Menu~</LeftMenu>
      <div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      </div>
    </MainContainer>
  );
};

export default About;