import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { LinkText, colors } from '../utilities'


const Navigation = ({ color }) => {
	const NavigationWrapper = styled.div`
		display: flex;
		flex-direction: column;
		& a {
			transition: 0.2s;
			color: ${color};
			border-bottom: 2px solid ${colors.black};
			&:hover {
				border-bottom: 2px solid ${colors.almostWhite};
			}
		}
	`;

	return (
	  <NavigationWrapper>
	    <LinkText to="/">Home</LinkText>
	    <LinkText to="/work/">Work</LinkText>
	    <LinkText to="/about/">About</LinkText>
	    <LinkText to="/process/">Process</LinkText>
	  </NavigationWrapper>
	)
}

export default Navigation

