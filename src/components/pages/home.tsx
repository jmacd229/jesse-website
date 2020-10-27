import React, { ReactElement } from "react"
import "../../styles/pages/home.scss"
import BackgroundImg from "../../assets/home.jpg"
import UnderConstruction from "../under-construction"

const Home = (): ReactElement => {
  return (
    <div className="home">
      <div>
        <h1 className="m-0">Hi, I&apos;m Jesse</h1>
        <h2 className="mb-4">A full-stack web developer based in Toronto</h2>
        <UnderConstruction/>
      </div>
      <img src={BackgroundImg} className="background-image" />
    </div>
  )
}

export default Home
