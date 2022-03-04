import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import styled from 'styled-components'

const LinkBackground = styled.div`
  background-color: #1f79ba;
`

const GnbMenuStyle = styled.div`
  width: 1200px;
  height: 100px;
  background: bisque;
  /* display: none; */
  margin: 0 auto;

  display: ${(props) => props.isShow ? "block" : "none"};
`

const LinkBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3px;

  width: 1200px;
  margin: 0 auto;
  height: 100%;
  background: linear-gradient(to top, #1f79ba, white, #1f79ba);

  a {
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: white;
    text-decoration: none;
    align-items: center;
    background-color: #1f79ba;

    &:hover, &:active {
      color: #cccccc;
    }
  }
`

const Gnb = ({ children, color }) => {
  const [gnbMenu, setGnbMenu] = useState(false);

  return (
    <LinkBackground>
      <LinkBlock onMouseEnter={() => setGnbMenu(true)} onMouseLeave={() => setGnbMenu(false)}>
        <Link to="/about">재해영향평가소개</Link>
        <Link to="/search">사업조회</Link>
        <Link to="/statistic">통계</Link>
        <Link to="/join">국민참여</Link>
        <Link to="/assessment">건강영향평가</Link>
      </LinkBlock>
      {/* <GnbMenuStyle isShow={gnbMenu}>test</GnbMenuStyle> */}
    </LinkBackground>
  )
}

export default Gnb