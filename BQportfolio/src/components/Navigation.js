import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { LinkText, colors } from '../utilities'

const NavigationWrapper = styled.ul`
	margin: 0em;
	list-style: none;
	text-decoration: none;
	transition: 0.2s;
	&:hover {
		text-decoration: underline;
	}
`;

const Navigation = () => (
  <NavigationWrapper>
    <LinkText>Work</LinkText>
    <LinkText>About</LinkText>
    <LinkText>Process</LinkText>
  </NavigationWrapper>
)

export default Navigation
