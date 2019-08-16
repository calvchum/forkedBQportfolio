import React, { useState } from "react"
import { BodyText, HeaderText, LinkTextStyle } from '../utilities';
import styled from 'styled-components';
import diagonalArrow from '../assets/portfolio-icons/diagonal-arrow.svg'
import { animated, useSpring } from 'react-spring'

const CardWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: 32px 0em;
`
const CardHeader = styled.div`
	& p:first-child {
		display: flex;
		justify-content: flex-end;
		padding-bottom: 8px;
	}
`
const CardContent = styled.div`
	& div:last-child {
		display: flex;
		justify-content: flex-end;
		align-itmes: center;
	}
`
const Image = styled.div`
	height: 300px;
	width: 100%;
	background-size: cover;
`
const HeaderSubheader = styled.div`
	padding-bottom: 16px;
`
const LinkWrapper = styled(animated.div)`
	padding-top: 16px;
	& p { 
		display: flex;
		align-items: center;
		padding: 0px;
	}
	& img {
		margin-bottom: 0px;
		height: 25px;
	}
`

const ProjectCard = ({ project }) => {
		 const [isHovered, setHovered] = useState(false);
		 const buttonAnimation = useSpring({ transform: isHovered ? `translate3d(10px, -5px, 0px)` : `translate3d(0px, 0px, 0px)` })
	 
	  return (
	  <CardWrapper>
		  <CardHeader>
			  <BodyText>{project.date}</BodyText>
			  <HeaderSubheader>
				  <HeaderText>{project.title}</HeaderText>
				  <BodyText>{project.description}</BodyText>
			  </HeaderSubheader>
			 </CardHeader>
			 <CardContent>
				<Image style={{backgroundImage: `url(${project.imageOne})`}}></Image>
			  <LinkWrapper
	     	 	style={buttonAnimation}
	     	 	onMouseEnter={() => setHovered(true)}
	     	 	onMouseLeave={() => setHovered(false)}
			  >
			  	<LinkTextStyle style={{textDecoration: 'underline'}}>
			  	{project.link}	
			  		<img src={diagonalArrow} alt=""/>
			  	</LinkTextStyle>
			  </LinkWrapper>
			 </CardContent>
	  </CardWrapper>
	)
}

export default ProjectCard
