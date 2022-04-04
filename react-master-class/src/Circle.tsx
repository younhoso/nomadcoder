import styled from "styled-components";

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}
export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) => {
  return `Hello ${playerObj.name} you are ${playerObj.age} years old.`;
};

sayHello({ name: "nico", age: 12 });
sayHello({ name: "hi", age: 12, hello: 1 });
