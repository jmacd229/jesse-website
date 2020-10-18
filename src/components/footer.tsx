import React from "react"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="p-3 d-flex flex-column align-items-center">
      <div className="NA-text">A personal website built by and for Jesse MacDougall</div>
      <div className="NA-text text-center">
        V{process.env.VERSION}
        <br />
        Last Updated: {process.env.RELEASE_DATE}
      </div>
    </footer>
  )
}

export default Footer
