import React from "react";
import Nav from "./Nav";
import Socials from "./Socials";

export default function Home(props) {
  return (
    <div className="home">
      <h1 className="name-text">Nwaokocha Shedrack</h1>
      <h3 className="bio-text">
        Physiologist || Youth counselor and Value Coach || Visual Design
      </h3>
      <Nav
        nav="home"
        data={props.data}
        handleCLick={props.handleCLick}
        toggleMenu={props.toggleMenu}
        menu={props.menu}
      />
      <Socials />
    </div>
  );
}
