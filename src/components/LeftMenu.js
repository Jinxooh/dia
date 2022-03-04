import styled from 'styled-components'

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

const LeftMenu = ({ children, data }) => {
  const { name, engName } = data;
  return (
    <LeftMenuStyle>
      <MenuTitle>
        <span>{name}</span>
        <span>{engName}</span>
      </MenuTitle>  
      {children}
    </LeftMenuStyle>
  )
}

export default LeftMenu