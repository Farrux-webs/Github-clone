import React from 'react'
import "./style.scss"
import { useState, useEffect } from "react"

function Index(props) {





  return (
    <>
    <ul className="dropdown"  style={{display: props.display}}>
        <li className="dropdown_item"><a href="https://github.com" target="_blank" className="dropdown-link">New repository</a></li>
        <li className="dropdown_item"><a href="https://github.com" target="_blank" className="dropdown-link">Import repository</a></li>
        <li className="dropdown_item"><a href="https://github.com" target="_blank" className="dropdown-link">New codespace</a></li>
        <li className="dropdown_item"><a href="https://github.com" target="_blank" className="dropdown-link">New gist</a></li>
        <li className="dropdown_item"><a href="https://github.com" target="_blank" className="dropdown-link">New organization</a></li>
        <li className="dropdown_item"><a href="https://github.com" target="_blank" className="dropdown-link">New project</a></li>
    </ul>
    </>
  )
}

export default Index