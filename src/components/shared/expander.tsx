import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"
import animation from "../../animations/menu.json"
import "../../styles/shared/expander.scss"

interface ExpanderProps {
    label: String,
}

const Expander = (props: ExpanderProps) => {
  let animationContainer = createRef<HTMLDivElement>()

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: animation,
    })
  }, [])

  return (
    <div className="expander" tabIndex={0} >
        <div className="expander-label">{props.label}</div>
      <div className="icon mr-2">
        <div className="animation-container" ref={animationContainer} />
      </div>
    </div>
  )
}

export default Expander

