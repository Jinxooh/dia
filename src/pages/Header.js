import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderBlock = styled.div`
  /* width: 1200px; */
`

const LinkBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`

const TopBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const Logo = styled.div`
`
const Title = styled.span`

`

const LoginBlock = styled.div`
  justify-self: flex-end;
`

const Button = styled.button``

const Header = () => {
  return (
    <HeaderBlock>
      <TopBlock>
        <Logo>
        <Link to="/">LOGO</Link>
        </Logo>
        <Title>재해영향평가</Title>
        <LoginBlock>
          <Button>로그인</Button>
          <Button>회원가입</Button>
          <Button>사이트맵</Button>
        </LoginBlock>
      </TopBlock>
      <LinkBlock>
        <Link to="/about">재해영향평가소개</Link>
        <Link to="/search">사업조회</Link>
        <Link to="/statistic">통계</Link>
        <Link to="/join">국민참여</Link>
        <Link to="/assessment">건강영향평가</Link>
      </LinkBlock>
    </HeaderBlock>
  );
};

export default Header;