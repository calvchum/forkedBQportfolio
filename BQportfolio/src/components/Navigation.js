import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { LinkText, colors } from "../utilities"

const Navigation = ({ color, path }) => {
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
	`
	const navArray = [
		{ title: "Home", link: "/" },
		{ title: "Work", link: "/work/" },
		{ title: "About", link: "/about/" },
		{ title: "Process", link: "/process/" },
	]

	return (
		<NavigationWrapper>
			{navArray.map((item, i) => {
				return item.link === path ? (
					<LinkText key={i} to={item.link}>
						{`${item.title}<<<<`}{" "}
					</LinkText>
				) : (
					<LinkText key={i} to={item.link}>
						{" "}
						{item.title}
					</LinkText>
				)
			})}
		</NavigationWrapper>
	)
}

export default Navigation
