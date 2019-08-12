import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { LinkText, colors, fontsize, media } from "../utilities"

const Navigation = ({ color, path }) => {
	
	const NavigationWrapper = styled.div`
		display: flex;
		flex-direction: column;

		& a {
			transition: 0.2s;
			font-size: ${fontsize.header};
			color: ${color};
			border-bottom: 2px solid ${colors.black};
			${media.med`
				text-align: center;
			`}

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
					<LinkText 
						style={{borderBottom: `2px solid ${colors.almostWhite}`}} 
						key={i} 
						to={item.link}
					>
						{`${item.title}`}{" "}
					</LinkText>
				) : (
					<LinkText 
						key={i} 
						to={item.link}
					>
						{" "}
						{item.title}
					</LinkText>
				)
			})}
		</NavigationWrapper>
	)
}

export default Navigation
