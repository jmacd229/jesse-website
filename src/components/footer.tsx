import React from "react"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer>
      <p>
        Test Footer {new Date().getFullYear().toString()}{" "}
      </p>
    </footer>
  )
}

export default Footer