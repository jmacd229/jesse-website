import { Link } from "gatsby"
import React from "react"
import "../styles/header.scss"

const links = ['About Me','Work','Contact']

const Header = () => {
return <header>{links.map((link, i) =><HeaderLink key={i}>{link}</HeaderLink>)}</header>
}

const HeaderLink = (props) => {

  function test(event){
    console.log(event);
  }

  return <button className="btn" onClick={test}>{props.children}<div className="underline"></div></button>
}

export default Header