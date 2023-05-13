import React from "react";
import styled from "styled-components";

export const Button = ({ children, bgColor, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} bgColor={bgColor}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: ${(props) => props.bgColor};
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  font-size:15px;
  color: #ffff;
  &:hover {
    background-color: #6c6122;
  }
`;
