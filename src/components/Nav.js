import React from "react"
import img from "../images/logo.png"

const Nav = (props) => {
  const slider = document.querySelector(".toggler--slider")
  return (
  <nav className="nav">
    <div className="app-name">
      <img className="nav--image" src={img} alt="logo"/>
      <p className="nav--title">MEME GENERATOR</p>
    </div>
    <div className="toggler">
      <p className="toggler--light">Light</p>
      <div className="toggler--slider" id={props.darkMode ? "toggle-dark" : ""} onClick={props.toggleDarkMode}>
        <div className="toggler--slider--circle"></div>
      </div>
      <p className="toggler--dark">Dark</p>
    </div>
  </nav>
  )
}

export default Nav
