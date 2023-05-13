import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import useInput from "../hooks/input";

export const UseInput = () => {
  const email = useInput("", "email");
  const password = useInput("", "password");
  const date = useInput("", "date");

  const onValide = {
    email: email.validate,
    password: password.validate,
    date: date.validate,
  };

  return (
    <Container>
      <h2>Validate Input</h2>
      <InputContainer>
        <Label htmlFor="email">Email</Label>
        <StyledInput
          size="small"
          type="email"
          id="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={onValide.email}
        />
        <Button variant="outlined" bgColor="gray" onClick={onValide.email}>
          submit
        </Button>
        {email.error && <Error>{email.error}</Error>}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">Password</Label>
        <StyledInput
          size="small"
          type="password"
          id="password"
          value={password.value}
          onChange={password.onChange}
          onBlur={onValide.password}
        />
        <Button variant="outlined" bgColor="gray" onClick={onValide.password}>
          submit
        </Button>
        {email.error && <Error>{password.error}</Error>}
      </InputContainer>
      <InputContainer>
        <Label htmlFor="date">Date</Label>
        <StyledInput
          size="small"
          type="date"
          id="date"
          value={date.value}
          onChange={date.onChange}
          onBlur={onValide.date}
        />
        <Button variant="outlined" bgColor="gray" onClick={onValide.date}>
          submit
        </Button>
        {email.error && <Error>{date.error}</Error>}
      </InputContainer>
    </Container>
  );
};

export default UseInput;

const StyledInput = styled.input`
  width: 350px;
  outline: none;
  border-radius: 15px;
  border: none;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  /* border: 2px solid gray;
  background-color: teal; */
  border-radius: 15px;
  padding: 15px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 450px 100px 450px;
  justify-content: center;
  gap: 20px;
`;

const Error = styled.span`
  color: red;
`;
