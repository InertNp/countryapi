// import { nextCountries } from "./APIs/nextCountries";
import { useState } from "react";
import { Body } from "./resources/body";
import { NavBar } from "./resources/navbar";
import { Container } from "./styles/Common";

function App() {
  const lightTheme = {
    NavBarContainerBshadow: "1px 2px 5px hsl(0, 0%, 95%)",
    darkButtonHoverShadow: "0px 0px 5px hsl(0, 0%, 90%)",
    NavBarbgColor: "white",
    color: "hsl(200, 15%, 8%)",
    bgColor: "hsl(0, 0%, 98%)",
  };
  const DarkTheme = {
    NavBarContainerBshadow: "1px 2px 5px hsl(207, 26%, 20%)",
    darkButtonHoverShadow: "0px 0px 5px hsl(209, 23%, 20%)",
    NavBarbgColor: "hsl(209, 23%, 22%)",
    color: " hsl(0, 0%, 100%)",
    bgColor: "hsl(207, 26%, 17%)",
  };
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  function themeChanger() {
    if (darkMode === true) {
      setDarkMode(false);
      setTheme(lightTheme);
    } else {
      setDarkMode(true);
      setTheme(DarkTheme);
    }
  }
  // console.log(theme);
  return (
    <Container theme={theme}>
      <NavBar
        onclick={() => {
          themeChanger();
        }}
        theme={theme}
      />
      <Body theme={theme} />
    </Container>
  );
}

export default App;
