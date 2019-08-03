import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
<<<<<<< HEAD
import styled from 'styled-components'
import { HeaderText, colors, media } from '../utilities'
import BurgerMenu from './BurgerMenu'
=======
import styled from "styled-components"
import { HeaderText, colors } from "../utilities"
import BurgerMenu from "./BurgerMenu"
>>>>>>> 866dd0586174083038c3a2d9a34db2a6608d25a9

const HeaderWrapper = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 2em;
  color: ${colors.almostWhite};
  background: ${colors.black};
<<<<<<< HEAD

`;

const Header = () => (
=======
`

const Header = ({ siteTitle, path }) => (
>>>>>>> 866dd0586174083038c3a2d9a34db2a6608d25a9
  <HeaderWrapper>
    <HeaderText>Ben Quartermaine</HeaderText>
    <BurgerMenu path={path} />
  </HeaderWrapper>
)

export default Header
