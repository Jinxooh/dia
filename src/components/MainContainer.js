import styled from 'styled-components'

const MainContainerStyle = styled.div`
  display: flex;
`

const MainContainer = ({children}) => {
  return (
    <MainContainerStyle>{children}</MainContainerStyle>
  )
}

export default MainContainer