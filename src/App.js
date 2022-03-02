import { Route, Routes } from 'react-router-dom';
import { Home, About } from './pages';
import { Header } from './components';
import styled from 'styled-components'

const AppBlock = styled.div`
  width: 100vw;
  height: 100vh;
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