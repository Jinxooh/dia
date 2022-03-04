import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.div`
  color: #999999;
  padding: 20px 30px;
  user-select: none;
  cursor: pointer;

  &:hover, &:active {
    color: #777777;
    font-weight: 700;
  }
`

export const Button = ({ children, color }) => {
  return (
    <ButtonStyle>{children}</ButtonStyle>
  )
}