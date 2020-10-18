import { Link } from "gatsby"
import React from "react"
import { Pages } from "../enums/pages.enum"
import "../styles/header.scss"

const Header = () => {
  return (
    <header>
      {getLinks()}
    </header>
  )
}

function getLinks() {
  if(!process.env.IS_UNDER_CONSTRUCTION){
    return Object.values(Pages).map((link, i) => link !== "" ? <HeaderLink key={i}>{link}</HeaderLink> : null);
  } else {
    return <div className="NA-text mr-4">More coming soon...</div>;
  }
}

const HeaderLink = props => {
  function test(event) {
    console.log(event)
  }

  return (
    <button className="btn" onClick={test}>
      {props.children}
      <div className="underline"></div>
    </button>
  )
}

export default Header
