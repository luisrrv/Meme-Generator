import React from "react"
import img from "../images/logo.png"

const Nav = () => {
  return (
  <nav className="nav">
    <img className="nav--image" src={img} alt="logo"/>
    <p className="nav--title">MEME GENERATOR</p>
  </nav>
  )
}

export default Nav
