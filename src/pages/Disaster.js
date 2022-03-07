import { BasicButton, BasicInput, ContentContainer, LeftMenu, MainContainer, RadioGroup, Table, CheckBox } from "../components";
import Data from '../assets/data/data.json'
import styled from "styled-components";

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
  grid-template-columns: 1fr 3fr 1fr 3fr;
  grid-auto-rows: 40px;
  padding: 25px;
  align-items: center;
  gap: 10px;

  label {
    font-weight: 700;
  }
`

const SelectBox = styled.select`
  grid-column: span 6;
  width: 150px;
  height: 40px;
  padding: 10px;
  margin: 0 10px;
`

const YearSelectBox = styled(SelectBox)`
  width: 100px;
`

const FilterInputArea = styled.div`
  grid-column: span 4;
  display: flex;
  width: 100%;
  align-items: center;
`

const FilterInput = styled(BasicInput)`
  display: flex;
  align-items: center;
  width: 70%;
`
const FilterInputButtonArea = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 15px;
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

const CheckBoxStyle = styled.div`
  grid-column: span 3;
  display: flex;
  gap: 25px;

  span {
    margin-left: 10px;
  }
`

const FilterPartStyle = styled.div`
  grid-column: span 4;
`
const FilterPart2Style = styled.div`
  grid-column: span 4;
  display: flex;
`

const Disaster = () => {
  const { information } = Data.leftMenu;
  
  const filterData = {
    filter1: [
      '완료',
      '진행중',
      '전체',
    ],
    filter2: [
      '공개',
      '비공개',
      '전체',
    ],
    filter3: [
      '초안',
      '평가서',
      '재협의',
      '약식평가',
      '변경합의',
    ],
    filter4: [
      '사업명',
      '사업지주소',
      '사업코드',
      '사업시행자',
      '평가대행자',
    ],
    filter5: [
      '2022',
      '2021',
      '2020',
      '2019',
      '2018',
    ]
  }

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
        <SubTitle>전략재해영향평가</SubTitle>
        <FilterStyle>
          <FilterGrid>
            <label>진행현황</label>
            <RadioGroup data={filterData.filter1}></RadioGroup>
            <label>원문공개여부</label>
            <RadioGroup data={filterData.filter2}></RadioGroup>
            <label>진행구분</label>
            <CheckBoxStyle>
              {filterData.filter3.map(item =>
                <div>
                  <CheckBox />
                  <span>{item}</span>
                </div>
              )}
            </CheckBoxStyle>
            <label>접수년도</label>
            <div>
              <YearSelectBox>
                <option value="" hidden>
                  년도
                </option>
                {filterData.filter5.map((item, index) =>
                  <option value={index}>{item}</option>
                )}
              </YearSelectBox>
              ~
              <YearSelectBox>
                <option value="" hidden>
                  년도
                </option>
                {filterData.filter5.map((item, index) =>
                  <option value={index}>{item}</option>
                )}
              </YearSelectBox>
            </div>
            <label>협의년도</label>
            <div>
              <YearSelectBox>
                <option value="" hidden>
                  년도
                </option>
                {filterData.filter5.map((item, index) =>
                  <option value={index}>{item}</option>
                )}
              </YearSelectBox>
              ~
              <YearSelectBox>
                <option value="" hidden>
                  년도
                </option>
                {filterData.filter5.map((item, index) =>
                  <option value={index}>{item}</option>
                )}
              </YearSelectBox>
            </div>
            <FilterPartStyle>
              <SelectBox>
                <option value="" hidden>
                  협의기관
                </option>
                <option value="1">테스트부</option>
                <option value="2">테스트2부</option>
                <option value="3">테스트3부</option>
                <option value="4">테스트4부</option>
              </SelectBox>
              <SelectBox>
                <option value="" hidden>
                  생태계보전부담금
                </option>
                <option value="1">테스트부</option>
                <option value="2">테스트2부</option>
                <option value="3">테스트3부</option>
                <option value="4">테스트4부</option>
              </SelectBox>
            </FilterPartStyle>
            <FilterPart2Style>
              <RadioGroup data={filterData.filter4}></RadioGroup>
            </FilterPart2Style>
            <FilterInputArea>
              <FilterInput size={"small"} placeholder={"사업명을 입력하세요."}></FilterInput>
              <FilterInputButtonArea>
                <FilterButton color={'#ffffff'} bgColor={'#093d62'} size={'medium'}>검색</FilterButton>
                <FilterButton color={'#ffffff'} bgColor={'#093d62'} size={'medium'}>상세검색</FilterButton>
              </FilterInputButtonArea>
            </FilterInputArea>
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

export default Disaster;