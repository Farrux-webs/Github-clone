import React from "react";
import "./style.scss";
import {Link} from "react-router-dom"
// import Followers from "../../Api/Followers.json";
import { useState, useEffect } from "react";

function Index() {
  const [followers, setFollowers] = useState([]);

  const Base_Url = "https://api.github.com/users/Farrux-webs";

useEffect(()=>{
    async function FetchData() {
      const res = await fetch(`${Base_Url}/followers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setFollowers(data)
    }
    FetchData()
}, [])



  return (
    <div className="FollowersWrapper">
      <ul className="FollowersList">
        {
      followers.map((e)=>{
        return (
          <li className="FollowersItem">
            <Link>
              <img
                src={e.avatar_url}
                width="60"
                height="60"
                alt=""
                className="followerAvatar"
              />
            </Link>
            <div className="followerData">
              <a
                href={e.html_url}
                target="_blank"
                className="followerUser"
              >
                {e.login}
              </a>
              <button className="btn folllowerstatus">Unfollow</button>
            </div>
          </li>
        );
      })
      }</ul>
    </div>
  );
}

export default Index;
