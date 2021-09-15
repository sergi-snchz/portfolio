import Main from "./Main";
import About from "./AboutMe";
import Projects from "./Projects";
import themes from "../utils/themes";

import { useState } from "react";

function App() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme ? storedTheme : "dark");

  const currentTheme = themes[theme];
  return (
    <div className={currentTheme.bodyBackground}>
      <h1 className={"text-6xl font-medium text-center py-9 leading-tight mx-5 " + currentTheme.textColor}>Hi, I'm Sergio S&aacute;nchez</h1>
      <Main theme={currentTheme} setTheme={setTheme}/>
      <About theme={currentTheme}/>
      <Projects theme={currentTheme}/>
      <footer className={"text-center text-lg font-medium pb-5 " + currentTheme.textColor}>Sergio S&aacute;nchez {new Date().getFullYear().toString()}</footer>
    </div>
  );
}

export default App;
