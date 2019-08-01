import React, { useState } from "react"
import { useSpring, animated } from 'react-spring'; 
import { Link } from "gatsby"
import styled from "styled-components"
import ResponsiveNav from "./ResponsiveNav"
import { paddingDefaults, colors, media } from "../utilities"


const BurgerWrapper = styled.div`
  cursor: pointer;
`
const Span = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 40px;
  padding-bottom: 8px;
  border-bottom: 2px ${colors.almostWhite} solid;
  transform: rotate(180deg);
`

const BurgerMenu = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0)`
      : `translate3d(100%,0,0)`
  });
  const middleLine = useSpring({
    width: isNavOpen ? `32px` : `40px`,
  });
  const bottomLine = useSpring({
    width: isNavOpen ? `16px` : `40px`,
  });

  return (
    <div>
      <BurgerWrapper onClick={() => setNavOpen(!isNavOpen)}>
        <Span></Span>
        <Span style={middleLine}></Span>
        <Span style={bottomLine}></Span>
      </BurgerWrapper>
      <ResponsiveNav style={navAnimation} />
    </div>

  )
}

export default BurgerMenu
