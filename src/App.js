import styled from "styled-components";
import { Counter } from "./components/Counter";
import UseInput from "./components/UseInput";
import Timer from "./components/Timer";

function App() {
  return (
    <Container>
      <UseInput />
      <Cont>
        <Counter />
        <Timer />
      </Cont>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
`;

const Cont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  justify-content: center;
  justify-content: space-around;
`;

export default App;
