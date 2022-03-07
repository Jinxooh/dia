import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import styled from 'styled-components'
import Data from '../assets/data/data.json'

const LinkBackground = styled.div`
  background-color: #1f79ba;
  z-index: 1;
`

const GnbMenuContainerStyle = styled.div`
  width: 1200px;
  height: 200px;
  background: bisque;
  margin: 0 auto;
  z-index: 1;
  background-color: #093d62;

  display: ${(props) => props.isShow ? "block" : "none"};
`

const GnbMenuStyle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3px;
  grid-auto-flow: column;
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 16px;
  padding-left: 20px;
  height: 100%;

  &:hover {
    background-color: #1f79ba;
  }
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
  const menuData = Data.gnbData

  return (
    <LinkBackground>
      <LinkBlock onMouseEnter={() => setGnbMenu(true)} onMouseLeave={() => setGnbMenu(false)}>
        <Link to="/about">재해영향평가소개</Link>
        <Link to="/information">사업조회</Link>
        <Link to="/statistic">통계</Link>
        <Link to="/join">국민참여</Link>
        <Link to="/assessment">건강영향평가</Link>
      </LinkBlock>
      <GnbMenuContainerStyle onMouseEnter={() => setGnbMenu(true)} onMouseLeave={() => setGnbMenu(false)} isShow={gnbMenu}>
        <GnbMenuStyle>
          { menuData && menuData.map(item => {
            return item.menuList.map(menuItem => <MenuItem key={menuItem.id}>{menuItem.name}</MenuItem>)
          })}
        </GnbMenuStyle>
      </GnbMenuContainerStyle>
    </LinkBackground>
  )
}

export default Gnb