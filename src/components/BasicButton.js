import React from 'react'
import styled, { css } from 'styled-components'

const sizeStyles = css`
   ${({ size }) =>
    size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
`

const ButtonStyle = styled.div`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  
  justify-content: center;
  align-items: center;

  &:hover, &:active {
    color: #777777;
    font-weight: 700;
  }
  
  ${sizeStyles}

  color: ${(props) => props.color ? props.color : '#999999'};
  background-color: ${(props) => props.bgColor ? props.bgColor : '#1f79ba'};
`
const BasicButton = ({ children, bgColor, color, size }) => {
  return (
    <ButtonStyle bgColor={bgColor} color={color} size={size}>{children}</ButtonStyle>
  )
}

export default BasicButton