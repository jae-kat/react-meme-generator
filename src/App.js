import './App.css';
import styled from '@emotion/styled';
import MemeGenerator from './MemeGenerator';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <h1>memes generator</h1>
      <MemeGenerator />
    </Container>
  );
}

export default App;
