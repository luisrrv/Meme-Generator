import React from "react"
import { AiFillGithub } from "react-icons/ai"

const Footer = (props) => {
  return (
  <footer className="footer">
    <p id={props.darkMode ? "" : "dark-text"}>&copy;coded by <a href="https://github.com/luisrrv" target="_blank" rel="noreferrer"><AiFillGithub /> luisrrv</a></p>
  </footer>
  )
}

export default Footer
