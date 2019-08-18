import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import BurgerMenu from "../components/BurgerMenu"
import SEO from "../components/seo"
import LandingText from "../components/LandingText"
import VideoBackground from "../components/VideoBackground"
import { HeroText, colors, media } from "../utilities"
import styled from "styled-components"


const IndexWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.black};
  padding: 2em;
  display: flex;
  justify-content: space-between;
  
  ${media.small`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-end;
  `}

`

const IndexPage = props => (
  <IndexWrapper>
    <LandingText />
    <BurgerMenu path={ props.path } />
    <VideoBackground />
  </IndexWrapper>
)

export default IndexPage
