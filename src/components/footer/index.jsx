import React from 'react'
import "./style.scss"

function index() {
  return (
    <footer>
      <div className="container FooterWrapper">
        <a href="https://github.com/" className="bi bi-github footerLogo"></a>
        <span className="FooterText">© 2022 GitHub, Inc.</span>
        <ul className="FooterList">
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Terms</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Privacy</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Security</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Status</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Docs</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Contact GitHub</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Pricing</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">API</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Training</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">Blog</a></li>
            <li className="FooterItem"><a href="https://github.com/" className="FooterLink">About</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default index