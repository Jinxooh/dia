import styled from 'styled-components'

const LeftMenuStyle = styled.div`
`

const LeftMenu = ({children}) => {
  return (
    <LeftMenuStyle>{children}</LeftMenuStyle>
  )
}

export default LeftMenu