import React, { useState } from "react"
import { BodyText, HeaderText, LinkText, colors, media } from '../utilities';
import styled from 'styled-components';
import diagonalArrow from '../assets/portfolio-icons/diagonal-arrow.svg'
import { animated, useSpring } from 'react-spring'


const CardWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: 32px 0em;
`

const CardHeader = styled.div`
	& div:first-child {
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

const ImageContainer = styled.div`
	display: grid;
	grid-gap: 16px;
	margin: 0 auto;
	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

	${media.med`
		& div:first-child {
			display: none;
		}
		& div:last-child {
			display: none;
		}
	`}
`

const Image = styled.div`
	height: 300px;
	width: 100%;
	background-size: cover;
`

const HeaderSubheader = styled.div`
	padding-bottom: 16px;
`

const LinkWrapper = styled.div`
	padding-top: 16px;

	& a { 
		display: flex;
		align-items: center;
		padding: 0px;
	}
	& img {
		margin-bottom: 0px;
		height: 25px;
	}

	&:hover {
		transition: all 0.3s;
		transform: scale3d(1.02, 1.02, 1.02);
		transform: translate3d(5px, -5px, 0px);
	}
`

const ProjectCard = ({ project }) => (


  <CardWrapper>
	  <CardHeader>
		  <div>
		  	<BodyText>{project.date}</BodyText>
		  </div>
		  <HeaderSubheader>
			  <HeaderText>{project.title}</HeaderText>
			  <BodyText>{project.description}</BodyText>
		  </HeaderSubheader>
		 </CardHeader>
		 <CardContent>
			  <ImageContainer>
			  	<Image style={{backgroundImage: `url(${project.imageOne})`}}></Image>
			  	<Image style={{backgroundImage: `url(${project.imageTwo})`}}></Image>
			  	<Image style={{backgroundImage: `url(${project.imageThree})`}}></Image>
			  </ImageContainer>

			{/* Going to add animation on hover of button*/}
			  <animated.div>
				  <LinkWrapper>
				  	<LinkText style={{textDecoration: 'underline'}}>
				  	{project.link}	
				  		<img src={diagonalArrow} alt=""/>
				  	</LinkText>
				  </LinkWrapper>
			  </animated.div>
		 </CardContent>
  </CardWrapper>
)

export default ProjectCard
