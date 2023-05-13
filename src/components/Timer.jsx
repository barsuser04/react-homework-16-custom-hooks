import React, { useState } from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";
import { useTimer } from "../hooks/timer";

const Timer = () => {
  const [timeInput, setTimeInput] = useState("");
  const { time, start, stop, restart, isActive } = useTimer();
  const [timer, setTime] = useState(0);
  const formattedTime = formatTime(time);

  function handleStart() {
    if (timeInput) {
      const timeInSeconds = parseInt(timeInput) * 60;
      setTimeInput("");
      restart(timeInSeconds);
    } else {
      start();
    }
    const formattedTime = formatTime(time);

    setTime(formattedTime);
  }

  function handleStop() {
    stop();
  }

  function handleRestart() {
    setTimeInput("");
    restart(0);
    stop();
  }

  function handleTimeInputChange(event) {
    setTimeInput(event.target.value);
  }

  function formatTime(timeInSeconds) {
    if (timeInSeconds <= 0) {
      return "00:00"}
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

    return (
      <Container>
        <h2>Timer</h2>
        <InputDiv>
          <InputStyled
            min={1}
            type="number"
            value={timeInput}
            onChange={handleTimeInputChange}
          />
          <span>{formattedTime}</span>
        </InputDiv>

        <BtnDiv>
          <Button
            bgColor={isActive ? "black" : "darkblue"}
            onClick={isActive ? handleStop : handleStart}
          >
            {" "}
            {isActive ? "stop" : "start"}{" "}
          </Button>
          <Button bgColor="violet" onClick={handleRestart}>
            reset
          </Button>
        </BtnDiv>
      </Container>
    );
  }

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputStyled = styled.input`
  width: 80px;
  height: 30px;
  outline: none;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  font-weight: 600;
`;

const Container = styled.div`
  width: 15%;
  padding: 20px;
  border: 2px solid gray;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: teal;
  border-radius: 15px;
  span {
    color: #fff;
    font-weight: 600;
    font-size: 25px;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 10px;
`;

export default Timer;
