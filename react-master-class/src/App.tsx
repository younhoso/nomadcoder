import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log(event);
  };
  return (
    <Container>
      <H1>protected</H1>
      <Dummy active={true} text="hello" />
      <button onClick={onClick}>click me</button>
    </Container>
  );
}

export default App;
