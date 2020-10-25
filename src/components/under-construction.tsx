import React, { useEffect, createRef, ReactElement } from "react"

import lottie from "lottie-web"
import animation from "./../animations/under-construction.json"
import "../styles/under-construction.scss"
import Expander from "./shared/expander"

const UnderConstruction = (): ReactElement => {
  const animationContainer = createRef<HTMLDivElement>()

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    })
  }, [])

  return (
    <div className="d-flex">
        <div className="icon mr-2">
          <div className="animation-container" ref={animationContainer} />
        </div>
        <div className="d-flex flex-column mt-3">
          <div>
            Sorry, this site is still in progress - please check back later for
            updates!
          </div>
        <Expander label="More info" maxWidth={500} maxHeight={200}></Expander>
      </div>
    </div>
  )
}

export default UnderConstruction
