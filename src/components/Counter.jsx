import React from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";
import { useCounter } from "../hooks/counter";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <Container>
      <h2>Counter</h2>
      <h1>{count}</h1>
      <BtnDiv>
        <Button onClick={() => (count !== 0 ? decrement(10) : 0)} bgColor="orange">
          minus
        </Button>
        <Button onClick={() => reset()} bgColor="gray">
          reset
        </Button>
        <Button onClick={() => increment(40)} bgColor="green">
          plus
        </Button>
      </BtnDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 15%;
  padding: 10px;
  border: 2px solid gray;
  text-align: center;
  background-color: teal;
  border-radius: 15px;
  h1 {
    color: #ffff;
    font-weight: 600;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 10px;
`;
