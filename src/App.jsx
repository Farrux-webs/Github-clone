import React from "react";
import Header from "./components/header";
import Profile from "./components/Profile";
import Followers from "./components/Followers"
import Followings from "./components/followings"
import Menu from "./components/menu"
import Overview from "./components/overview"
import Repos from "./components/repos"
import Footer from "./components/footer"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="container d-flex">
        <Profile />
        <Routes>
          <Route path="followers" element={<Followers />} />
          <Route path="followings" element={<Followings />} />
          <Route path="/" element={<Overview />} />
          <Route path="/repos" element={<Repos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
