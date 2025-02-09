import logo from "./logo.svg";
import "./App.css";
// import './Applight.css';
import { createContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { About } from "./components/About";


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
      <NavBar toggleTheme={toggleTheme} currentTheme={theme}/>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
