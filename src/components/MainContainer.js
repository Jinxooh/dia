import styled from 'styled-components'

const MainContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

const MainContainer = ({children}) => {
  return (
    <MainContainerStyle>{children}</MainContainerStyle>
  )
}

export default MainContainer