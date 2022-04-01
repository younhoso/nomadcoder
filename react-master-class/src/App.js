import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Superrecap, { anim } from "./Superrecap";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const Box = styled.button`
  animation: ${anim} 0.5s infinite;
`;

const modeTheme = (prevState) => {
  return prevState ? false : true;
};

function App() {
  const [themes, setThemes] = useState(true);
  const mode = () => {
    setThemes(modeTheme);
  };
  return (
    <ThemeProvider theme={themes ? darkTheme : lightTheme}>
      <Box onClick={mode}>animation test</Box>
      <Superrecap />;
    </ThemeProvider>
  );
}

export default App;
