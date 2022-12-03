import React from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment"

function Index() {
    
  const [repos, setrepos] = useState([]);

  const Base_Url = "https://api.github.com/users/Farrux-webs";

  useEffect(() => {
    async function FetchData() {
      const res = await fetch(`${Base_Url}/repos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setrepos(data);
    }
    FetchData();
  }, []);

  return (
    <div classList="reposBottom">
      <ul className="reposList">
        {repos.map((e) => {
          return (
            <li className="reposItem">
              <div className="reposItemTop">
                <div classList="reposItemTopleft">
                  <a href={e.svn_url} target="_blank">
                    {e.name}
                  </a>
                  <span>{e.visibility}</span>
                </div>
                <button className="btn starBtn">
                  <div classList="starstatus">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      className="octicon octicon-star UnderlineNav-octicon hide-sm svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                      ></path>
                    </svg>
                    star
                  </div>
                  <i className="bi bi-caret-down-fill"></i>
                </button>
              </div>
              <div className="reposItembottom">
                <span className="lang">{e.language}</span>
                <p className="stars">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className="octicon octicon-star UnderlineNav-octicon hide-sm svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                    ></path>
                  </svg>
                  {e.stargazers_count}
                </p>
                <p className="updatedDate">Updated {moment(e.updated_at, "YYYYMMDD").fromNow()}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Index