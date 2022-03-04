import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
  width: 230px;
  height: 160px;
  border-radius: 5px;
  box-shadow: 3px 3px 7px rgb(0 0 0 / 30%);
  background: linear-gradient(135deg, #fff 50%, #f1f1f1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:active {
    box-shadow: inset 7px 7px 7px rgb(0 0 0 / 20%);
  }
  
`
const Image = styled.div`
  width: 71px;
  height: 89px;
  background: url(${(props) => props.imgSrc}) no-repeat;
`

const Label = styled.label`
  font-weight: 600;
  font-size: 21px;
  color: #093d62;
`

const Card = ({ children, imgSrc}) => {
  return (
    <CardStyle>
      <Image imgSrc={imgSrc}></Image>
      <Label>
        {children}
      </Label>
    </CardStyle>
  )
}

export default Card