import Logo from "../../assets/github.png"
import React from 'react'
import { NavLink } from "react-router-dom";
import Ava from "../../assets/ava.jpg"
import "./style.scss"

function index() {



  return (
    <header className="Header">
      <i class="bi bi-github Logo"></i>
      <input
        type="text"
        placeholder="Search or jump to..."
        className="searchUser"
      />
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <NavLink className="NavLink">Pull Requests</NavLink>
          </li>
          <li className="navItem">
            <NavLink className="NavLink">Issues</NavLink>
          </li>
          <li className="navItem">
            <NavLink className="NavLink">Codespaces</NavLink>
          </li>
          <li className="navItem">
            <NavLink className="NavLink">Marketplace</NavLink>
          </li>
          <li className="navItem">
            <NavLink className="NavLink">Eplore</NavLink>
          </li>
        </ul>
        <div className="header-left">
          <i className="bi bi-bell"></i>
          <div className="AddSmth">
            <span>+</span>
            <i className="bi bi-caret-down-fill"></i>
          </div>
          <div className="ControlProfile">
            <img src={Ava} alt="" width="30" height="30" className="Ava" />
            <i className="bi bi-caret-down-fill"></i>
            <p className="d-none profiledropdown">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default index
