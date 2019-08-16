import React from "react"
import styled from "styled-components"
import { LinkText, colors, fontsize } from "../utilities"

const Navigation = ({ color, path }) => {
	const NavigationWrapper = styled.div`
		display: flex;
		flex-direction: column;

		& a {
			transition: 0.2s;
			font-size: ${fontsize.header};
			color: ${color};
			border-bottom: 2px solid ${colors.black};

			&:hover {
				transition: 0.2s;
				border-bottom: 2px solid ${colors.almostWhite};
			}
		}
	`
	const navArray = [
		{ title: "Home", link: "/"  },
		{ title: "Work", link: "/work/"},
		{ title: "About", link: "/about/"},
	]

	return (
		<NavigationWrapper>
			{navArray.map((item, i) => {
				return item.link === path ? (
					<LinkText 
						key={i} 
						to='/' 
						style={{borderBottom: `2px solid ${colors.almostWhite}`, width: '100%'}}
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
