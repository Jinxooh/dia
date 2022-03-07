import styled, { css } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const LeftMenuStyle = styled.div`
  width: 250px;
  margin-top: 40px;
`

const MenuTitle = styled.div`
  color: white;
  background-color: #1f578b;
  height: 130px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span:first-child {
    font-size: 25px;
    font-weight: 600;
  }
  span:last-child {
    font-size: 15px;
    font-weight: 600;
  }
`
const SubMenu = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid #ddd;
  margin-top: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  font-weight: 600;

  a {
    text-decoration: none;
    color: #222;
    margin-left: 15px;
  }

  &:hover {
    background-color: #1f578b;
    border-color: #1f578b;
    a { 
      color: #fff;
    }
  }

  ${props =>
    props.active === 'active' &&
    css`
        background-color: #1f578b;
        border-color: #1f578b;
        a {
          color: #fff; 
        }
    `}
`

const MenuList = styled.div`
  ul {
    list-style: none;
    padding-left: 20px;

    li {
      display: flex;
      align-items: center;
      height: 32px;

      a {
        font-size: 15px;
        color: #555;
        font-weight: 600;
        text-decoration: none;

        &:hover {
          color: #1f79ba;
        }
        
        &.active {
          color: #1f79ba;
        }
      }
    }
  }
`


const LeftMenu = ({ children, data }) => {
  const { name, engName, menuList } = data;
  const { pathname } = useLocation();

  return (
    <LeftMenuStyle>
      <MenuTitle>
        <span>{name}</span>
        <span>{engName}</span>
      </MenuTitle>  
      { menuList && menuList.map(item =>
      <div key={item.id}>
        <SubMenu active={pathname.indexOf(item.url) > -1 ? 'active' : ''}>
          <Link to={item.url}>
            {item.name}
          </Link>
        </SubMenu>
        {item.list && <MenuList>
          <ul>
            {item.list.map(listItem => 
            <li key={listItem.id}>
              <Link className={pathname === listItem.url ? 'active' : ''} to={listItem.url}>{listItem.name}</Link>
            </li>) }
          </ul>
        </MenuList>}
      </div>)
      }
    </LeftMenuStyle>
  )
}

export default LeftMenu