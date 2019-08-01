import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import BurgerMenu from "../components/BurgerMenu"
import SEO from "../components/seo"
import { HeroText, colors } from '../utilities'
import styled from 'styled-components'

const IndexWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.black};
  padding: 2em;
  display: flex;
  justify-content: space-between;
`;

const IndexPage = () => (
  <IndexWrapper>
    <div>
      <HeroText color={colors.almostWhite}>Ben Quartermaine</HeroText>
      <HeroText color={colors.almostWhite}>UX Designer</HeroText>
      <HeroText color={colors.almostWhite}>Melbourne, Australia</HeroText>
    </div>
    <BurgerMenu />
  </IndexWrapper>
)

export default IndexPage
