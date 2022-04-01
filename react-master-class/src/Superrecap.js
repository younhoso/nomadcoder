import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ${Title}:hover {
    color: teal;
    font-size: 99px;
  }
`;

const Title = styled.h1`
  color: tomato;
  transition: all 0.2s ease-in-out;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: tomato;
`;

const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: tomato;
`;

export const anim = keyframes`
	from {
		color: tomato;
	} to {
		color	: teal;
	}
`;

const Box2 = styled.button`
  animation: ${anim} 0.5s infinite;
`;

function Superrecap() {
  return (
    <Wrapper>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Log in</Btn>
      <Btn as="a" href="#">
        Go Home2
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
      <Box2>hello</Box2>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default Superrecap;
