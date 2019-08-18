import React, { useState } from "react"
import { useSpring, useTransition, animated } from "react-spring"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import { paddingDefaults, colors, media } from "../utilities"

const BurgerWrapper = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 6;
`
const Span = styled(animated.div)`
  z-index: 6;
  display: flex;
  flex-direction: column;
  width: 40px;
  padding-bottom: 8px;
  border-bottom: 2px ${colors.almostWhite} solid;
  transform: rotate(180deg);
`

const ResponsiveNavStyles = styled(animated.div)`
  z-index: 5;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  background: ${colors.black};
  padding: 100px 2em 2em 2em;
  ${media.med`
    width: 70%;
  `}
  ${media.small`
    width: 100%;
  `}
`

const BurgerMenu = ({ path }) => {
  const [currentPath, setPath] = useState(path)
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useTransition(isNavOpen, null, {
    from: { transform: `translate3d(100%,0,0)` },
    enter: { transform: `translate3d(0,0,0)` },
    leave: { transform: `translate3d(100%,0,0)` },
  })
  const middleLine = useSpring({
    width: isNavOpen ? `32px` : `40px`,
  })
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
      <div>
        {navAnimation.map(
          ({ item, key, props }) =>
            item && (
              <ResponsiveNavStyles key={key} style={props}>
                <Navigation color={colors.almostWhite} path={currentPath} />
              </ResponsiveNavStyles>
            )
        )}
      </div>
    </div>
  )
}

export default BurgerMenu
