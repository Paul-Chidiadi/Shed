import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Data from "./Data";

function App() {
  const [nav, setNav] = React.useState(Data);
  const [menu, setMenu] = React.useState("menu");

  function handleCLick(id) {
    setNav(function (prevNav) {
      return prevNav.map(function (item) {
        return item.id === id
          ? { ...item, show: "active" }
          : { ...item, show: "" };
      });
    });
    setMenu("menu");
  }
  function toggleMenu() {
    setMenu((prevMenu) => {
      return prevMenu === "menu" ? "menu active" : "menu";
    });
  }

  return (
    <div className="App">
      {nav[0].show !== "active" && (
        <Nav
          nav="bar"
          data={nav}
          handleCLick={handleCLick}
          toggleMenu={toggleMenu}
          menu={menu}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={nav}
              handleCLick={handleCLick}
              toggleMenu={toggleMenu}
              menu={menu}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
