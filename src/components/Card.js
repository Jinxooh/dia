import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'

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
const Image = styled.img`
  width: 71px;
  height: 89px;
`

const Label = styled.label`
  font-weight: 600;
  font-size: 21px;
  color: #093d62;
`

const Card = ({ children, imgSrc, item }) => {
  let img = img1;
  if (item.id === '2') img = img2
  if (item.id === '3') img = img3
  if (item.id === '4') img = img4

  return (
    <CardStyle>
      <Image src={img}></Image>
      <Label>
        {children}
      </Label>
    </CardStyle>
  )
}

export default Card