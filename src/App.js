import React, { useState, createContext } from "react";
import Sidebar from './components/Sidebar/Sidebar';
import Education from './components/Education/Education';
import Testimonial from './components/Testimonial/Testimonial';
import WorkExperience from './components/WorkExperience/WorkExperience';

import"./App.css";
import NavbarMobileView from "./components/Sidebar/NavbarMobileView";
import Project from "./components/Projects/Project";
import TechStack from "./components/TechStack/TechStack";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
        <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
<NavbarMobileView changeTheme={changeTheme} theme={theme}/>
        <Sidebar changeTheme={changeTheme} theme={theme}/>
     
    <TechStack/>
    <Project/>
    <WorkExperience/>
    <Testimonial/>
    <Education/>
    </div>

   </ThemeContext.Provider>
   </>
  )
}

export default App