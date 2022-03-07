import { ContentContainer, LeftMenu, MainContainer } from "../components";
import Data from '../assets/data/data.json'
import styled from "styled-components";
import loginImg from '../assets/img/login.png'

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
`

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  
  img {
    margin: 25px 0;
  }

  input {
    width: calc(100% - 500px);
    height: 50px;
    border: 2px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 0 10px;
  }
`

const Button = styled.div`
  display: flex;
  width: calc(100% - 500px);
  height: 50px;
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
  
  font-size: 18px;
  font-weight: 600;
`

const LoginButton = styled(Button)`
  color: white;
  background-color: #1f79ba;
  margin-top: 30px;
  margin-bottom: 10px;

  &:hover {
    color: #555;
  }
`
const JoinButton = styled(Button)`
  background-color: #ddd;
  color: #555;

  &:hover {
    color: #222;
  }
`

const Login = () => {
  const { system } = Data.leftMenu;
  return (
    <MainContainer>
      <LeftMenu data={system}></LeftMenu>
      <ContentContainer>
        <SubTitle>회원 로그인</SubTitle>
        <LoginStyle>
          <img src={loginImg} />
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
          <JoinButton>회원가입</JoinButton>
        </LoginStyle>
      </ContentContainer>
    </MainContainer>
  );
};

export default Login;