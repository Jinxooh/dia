import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import moreBtn from '../assets/img/main_more.jpg'

const MainListStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 276px;
  gap: 20px;
  margin: 50px 0;
`

const ListContainer = styled.div`
  border: 1px solid #ddd;

  ul {
    list-style: none;
    li {
      margin-bottom: 25px;
      a {
        color: #222;
        font-weight: 500;
        text-decoration: none;
        font-size: 17px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`

const ListTitleWrap = styled.div`
  background: #f8fcff;
  height: 54px;
  padding: 0 14px;
  border-bottom: 1px solid #009ed7;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 600;
  color: #1f79ba;
`

const MainList = ({ data }) => {
  console.log(data)
  // dummy
  const listData = [
    '리스트 항목입니다. 테스트 데이터 입니다.',
    '리스트 항목입니다. 테스트 데이터 입니다.',
    '리스트 항목입니다. 테스트 데이터 입니다.',
    '리스트 항목입니다. 테스트 데이터 입니다.'
  ];

  return (
    <MainListStyle>
      {data && data.map(item => 
      <ListContainer key={item.id}>
        <ListTitleWrap>
          {item.name}
          <Link to={item.url}>
            <img src={moreBtn} />
          </Link>
        </ListTitleWrap>
        <ul>
          { listData && listData.map(listItem => 
          <li>
            <Link to={'/'}>{listItem}</Link>
          </li>)}
        </ul>
      </ListContainer>)}
    </MainListStyle>
  )
}

export default MainList