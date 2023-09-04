import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const name = props.nav === "bar" ? "nav" : "nav home";

  const listElement = props.data.map((item) => {
    return (
      <li
        key={item.id}
        className={item.show}
        onClick={() => props.handleCLick(item.id)}
      >
        <Link to={item.to}>{item.name}</Link>
      </li>
    );
  });

  return (
    <div className="nav-cover">
      <nav className={name}>
        {props.nav === "bar" && <h1>Nwaokocha Shedrack</h1>}
        <ul>
          {listElement}
          <div className={props.menu} onClick={props.toggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
        </ul>
      </nav>
      {props.menu === "menu active" && (
        <div className="list-down">{listElement}</div>
      )}
    </div>
  );
}
