import React, { useState } from 'react'
import styled, { css } from "styled-components";

const RadioGroupStyle = styled.div`
  display: flex;
  justify-content: space-around;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  left: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 3px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked && css` 
    &:checked + ${RadioButtonLabel} {
      background: #1f79ba;
      border: 1px solid #1f79ba;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        margin: 3px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;

const RadioGroup = ({ data }) => {
  const radioData = data;
  const [select, setSelect] = useState(radioData[0]);
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <RadioGroupStyle>
    { radioData && radioData.map((item, index) =>
    <Item>
      <RadioButton
        type="radio"
        name="radio"
        value={item}
        checked={select === item}
        onChange={(event) => handleSelectChange(event)}
      />
      <RadioButtonLabel />
      <div>{item}</div>
    </Item>)}
    </RadioGroupStyle>
  )
}

export default RadioGroup