import { LeftMenu, MainContainer } from "../components";
import Data from '../assets/data/data.json'

const Join = () => {
  const { join } = Data.leftMenu;
  return (
    <MainContainer>
      <LeftMenu data={join}></LeftMenu>
      <div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      </div>
    </MainContainer>
  );
};

export default Join;