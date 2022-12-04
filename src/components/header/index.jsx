import Logo from "../../assets/github.png"
import React from 'react'
import { NavLink } from "react-router-dom";
import Ava from "../../assets/ava.jpg"
import "./style.scss"
import { useState, useEffect } from "react"
import Dropdown from "./dropdown"

function Index() {


  const [display, setdisplay] = useState("none");
  function showDropDown() {
    if (display == "none") {
      setdisplay("block");
    } else {
      setdisplay("none");
    }
  }

const [user, setuser] = useState("")


  const Base_Url = "https://api.github.com/users";

  useEffect(() => {
    async function FetchData() {
      const res = await fetch(`${Base_Url}/` + `${user.login}` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setuser(data);
    }
   
  }, []);







  return (
    <header className="Header">
      <i className="bi bi-github Logo"></i>
      <input
        type="text"
        placeholder="Search or jump to..."
        className="searchUser"
        value={user}
        onChange={(e)=> setuser(e.target.value)}
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
          <div className="AddSmth" onClick={() => showDropDown()}>
            <span>+</span>
            <i className="bi bi-caret-down-fill"></i>
          </div>
          <div className="ControlProfile">
            <img src={Ava} alt="" width="30" height="30" className="Ava" />
            <i className="bi bi-caret-down-fill"></i>
            <p className="d-none profiledropdown">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </nav>

      <Dropdown display={display} />
    </header>
  );
}
export default Index
