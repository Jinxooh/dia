import { Route, Routes } from 'react-router-dom';
import { Header, Home, About, Assessment, Join, Search, Statistic } from './pages';
import styled from 'styled-components'

const AppBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 5fr;
  justify-content: center;
`

const App = () => {
  return (
    <AppBlock>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/join" element={<Join />} />
        <Route path="/search" element={<Search />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
    </AppBlock>
  );
};

export default App;