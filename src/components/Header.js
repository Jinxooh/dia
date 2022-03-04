import { Link } from 'react-router-dom';
import styled from 'styled-components'
import LogoSrc from '../assets/img/img_logo_desc.jpg'
import { Button } from './Button';

const HeaderBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const TopBlock = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 80px;
`

const Logo = styled.div`
  background: url(${LogoSrc}) no-repeat;
  background-size: cover;
  user-select: none;
  cursor: pointer;
  height: 100%;
`
const Title = styled.span`
  display: flex;
  align-items: flex-end;
  color: #777777;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 15px;
  user-select: none;
  cursor: pointer;
`

const LoginBlock = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  margin-right: 15px;
`

const Header = () => {
  return (
    <HeaderBlock>
      <TopBlock>
        <Link to="/">
          <Logo />
        </Link>
        <Title>재해영향평가</Title>
        <LoginBlock>
          <Button>로그인</Button>
          <Button>회원가입</Button>
          <Button>사이트맵</Button>
        </LoginBlock>
      </TopBlock>
    </HeaderBlock>
  );
};

export default Header;