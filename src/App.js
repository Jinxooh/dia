import { Route, Routes } from 'react-router-dom';
import { Header, Home, About } from './pages';
import styled from 'styled-components'

const AppBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 5fr;
`

const App = () => {
  return (
    <AppBlock>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AppBlock>
  );
};

export default App;