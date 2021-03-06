import { BasicButton, BasicInput, ContentContainer, LeftMenu, MainContainer, RadioGroup, Table } from "../components";
import Data from '../assets/data/data.json'
import styled, { css } from "styled-components";
import { useState } from "react";

const SubTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 25px;
`

const FilterStyle = styled.div`
  width: 100%;
  background-color: #efefef;
  min-height: 100px;
  border-radius: 10px;
`

const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: 80px;
  padding: 25px;
  align-items: center;
  gap: 10px;
`

const SelectBox = styled.select`
  grid-column: span 6;
  width: 150px;
  height: 40px;
  padding: 10px;
`

const FilterInput = styled(BasicInput)`
  display: flex;
  align-items: center;
`

const FilterButton = styled(BasicButton)`
`

const TableTitle = styled.div``

const TableStyle = styled.div`
  margin-top: 30px;

  ${TableTitle} {
    font-size: 16px;
    color: #1f79ba;
    font-weight: 800;
    margin-bottom: 30px;
  }
`

const Information = () => {
  const { information } = Data.leftMenu;
  
  const radioData = [
    '사업명',
    '사업지주소',
    '사업코드',
    '평가대행자',
  ];

  const tableData = [
    {
      사업코드: "ME20220028",
      평가구분: "공공주택지구",
      사업명: "의왕군포안산 공공주택지구",
      접수일: "2022.03.02",
      완료일: "",
      진행현황: "초안(진행)",
    },
    {
      사업코드: "ME20220028",
      평가구분: "공공주택지구",
      사업명: "의왕군포안산 공공주택지구",
      접수일: "2022.03.02",
      완료일: "",
      진행현황: "초안(진행)",
    },
    {
      사업코드: "ME20220028",
      평가구분: "공공주택지구",
      사업명: "의왕군포안산 공공주택지구",
      접수일: "2022.03.02",
      완료일: "",
      진행현황: "초안(진행)",
    },
    {
      사업코드: "ME20220028",
      평가구분: "공공주택지구",
      사업명: "의왕군포안산 공공주택지구",
      접수일: "2022.03.02",
      완료일: "",
      진행현황: "초안(진행)",
    },
    {
      사업코드: "ME20220028",
      평가구분: "공공주택지구",
      사업명: "의왕군포안산 공공주택지구",
      접수일: "2022.03.02",
      완료일: "",
      진행현황: "초안(진행)",
    },
  ];

  return (
    <MainContainer>
      <LeftMenu data={information}></LeftMenu>
      <ContentContainer>
        <SubTitle>전체목록</SubTitle>
        <FilterStyle>
          <FilterGrid>
            <SelectBox>
              <option value="" hidden>
                협의기관
              </option>
              <option value="1">테스트부</option>
              <option value="2">테스트2부</option>
              <option value="3">테스트3부</option>
              <option value="4">테스트4부</option>
            </SelectBox>
            <RadioGroup data={radioData}></RadioGroup>
            <FilterInput size={"small"} placeholder={"사업명을 입력하세요."}></FilterInput>
            <FilterButton color={'#ffffff'} bgColor={'#093d62'} size={'medium'}>검색</FilterButton>
          </FilterGrid>
        </FilterStyle>
        <TableStyle>
          <TableTitle>전략재해영향평가</TableTitle>
          <Table data={tableData}/>
        </TableStyle>
      </ContentContainer>
    </MainContainer>
  );
};

export default Information;