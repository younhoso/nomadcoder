import styled from "styled-components";
import Superrecap, { anim } from "./Superrecap";

const Box = styled.button`
  animation: ${anim} 0.5s infinite;
`;

function App() {
  return (
    <>
      <Box>animation test</Box>
      <Superrecap />;
    </>
  );
}

export default App;
