import styled from 'styled-components'

const ContentContainerStyle = styled.div`
  width: calc(100% - 300px);
  margin-top: 40px;
`

const ContentContainer = ({children}) => {
  return (
    <ContentContainerStyle>{children}</ContentContainerStyle>
  )
}

export default ContentContainer