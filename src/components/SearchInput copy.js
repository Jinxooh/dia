import React from 'react'
import styled from 'styled-components'
import { BasicButton, BasicInput } from './'


const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`

const SearchInputStyle = styled(BasicInput)`
  width: 560px;
  margin-right: 30px;
`

const SearchInput = () => {
  return (
    <InputContainer>
      <SearchInputStyle size={"large"} placeholder={"사업명을 입력하세요.1"} />
      <BasicButton color={'#ffffff'} bgColor={'#093d62'} size={'large'}>검색</BasicButton>
    </InputContainer>
  )
}

export default SearchInput;