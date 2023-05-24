import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About/About";
import Resume from "./components/Pages/Resume/Resume";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";
import Certificates from "./components/Pages/Certificate/Certificates";
// import Toggler from "./components/Toggler/Toggler";
// import ThemeContext from "./components/Toggler/ThemeContext";
// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
// body{
//   background-color: ${(props) => (props.darkMode ? "#334" : "#eef")};
//   color: ${(props) => (props.darkMode ? "#eee" : "#222")};
// }
// `;

function App() {
  // const [theme, setTheme] = useState("light");
  // // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

  return (
      // <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
    <main>
        {/* <GlobalStyles darkMode={darkMode} />
        <Toggler /> */}
      <Sidebar />
      <div className="main-content">
      <Router>
        {/* <Navbar toggleTheme={toggleTheme}/> */}
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/certificate" element={<Certificates />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    </main>
    // </ThemeContext.Provider>
  );
}

export default App;
