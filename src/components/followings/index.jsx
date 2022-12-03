import React from 'react'
import "./style.scss"
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Index() {

const [followings, setfollowings] = useState([])

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
      <div className="followingsWrapper">
        <ul className="followingsList">
          {followings.map((e) => {
            return (
              <li className="followingsItem">
                <Link>
                  <img
                    src={e.avatar_url}
                    width="60"
                    height="60"
                    alt=""
                    className="followingAvatar"
                  />
                </Link>
                <div className="followingData">
                  <a href={e.html_url} target="_blank" className="followingUser">
                    {e.login}
                  </a>
                  <button className="btn folllowingsstatus">Unfollow</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
  );
}

export default Index