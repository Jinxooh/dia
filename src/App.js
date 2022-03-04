import { Route, Routes } from 'react-router-dom';
import { Home, About, Assessment, Join, Search, Statistic } from './pages';
import { Header, Gnb } from './components';
import styled from 'styled-components'

const AppBlock = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 60px 1fr;
  grid-template-columns: 1fr;
  /* justify-content: center; */
`

const RouteBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const App = () => {
  return (
    <AppBlock>
      <Header />
      <Gnb />
      <RouteBlock>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/join" element={<Join />} />
          <Route path="/search" element={<Search />} />
          <Route path="/statistic" element={<Statistic />} />
        </Routes>
      </RouteBlock>
    </AppBlock>
  );     
};

export default App;