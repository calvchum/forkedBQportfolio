import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { HeaderText, colors, media } from '../utilities'
import BurgerMenu from './BurgerMenu'


const HeaderWrapper = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 2em;
  color: ${colors.almostWhite};
  background: ${colors.black};

  & a {
    text-decoration: none;
    color: ${colors.almostWhite};
  }
`;


const Header = ({ path }) => {
  return (
    <HeaderWrapper>
      <HeaderText><Link to="/">BQ</Link></HeaderText>
      <BurgerMenu path={path} />
    </HeaderWrapper>
  )
}


export default Header
