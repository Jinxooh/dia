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

const InputStyle = styled.input`
  ${sizeStyles}
`


const BasicInput = ({ size, ...rest }) => {
  return (
    <InputStyle size={size} {...rest} />
  )
}

export default BasicInput