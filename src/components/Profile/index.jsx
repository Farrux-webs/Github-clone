import React from 'react'
import User from "../../Api/User.json"
import Followers from "../../Api/Followers.json"
import Ava from "../../assets/ava.jpg"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

import "./style.scss"

function Index() {



  const [followings, setfollowings] = useState([]);

  const Base_Url = "https://api.github.com/users/Farrux-webs";

  useEffect(() => {
    async function FetchData() {
      const res = await fetch(`${Base_Url}/following`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setfollowings(data);
    }
    FetchData();
  }, []);



  return (
    <>
      <aside className="Profile">
        <img src={Ava} width="350" height="350" alt="" className="Avatarka" />
        <div className="aboutProfile">
          <span className="userName">{User.name}</span>
          <span className="Login">{User.login}</span>
          <button className="btn edit">Edit Profile</button>
        </div>
        <div className="Follows">
          <Link to="/followers" className="bi bi-people Followers">
            <strong>{Followers.length}</strong> Followers
          </Link>
          <Link to="/followings" className="Following">
            <strong>{followings.length}</strong> Following
          </Link>
        </div>
        <div className="Personaldata">
          <p className=" m-0 Company">
            <span className="bi bi-buildings"></span>
            {User.company}
          </p>
          <p className="m-0  Location">
            <span className="bi bi-geo-alt"></span>
            {User.location}
          </p>
          <a href={User.blog} target="_blank" className="blog ">
            <span className="bi bi-link-45deg instaLink"></span>
            {User.blog}
          </a>
        </div>
      </aside>
    </>
  );
}

export default Index