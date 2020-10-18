import React from "react"
import "../../styles/pages/home.scss"
import BackgroundImg from "../../assets/home.jpg"

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Hi, I'm Jesse</h1>
        <h2>A full-stack web developer based in Toronto</h2>
      </div>
      <img src={BackgroundImg} className="h-100" />
    </div>
  )
}

export default Home
