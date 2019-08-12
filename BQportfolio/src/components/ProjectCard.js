import React from "react"
import { BodyText, HeaderText, LinkText, colors, media } from '../utilities';
import styled from 'styled-components';

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
	}
`

const ImageContainer = styled.div`
	display: grid;
	grid-gap: 16px;
	margin: 0 auto;
	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );

	${media.small`
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
			  <LinkWrapper>
			  	<LinkText>{project.link}</LinkText>	
			  </LinkWrapper>
		 </CardContent>
  </CardWrapper>
)

export default ProjectCard
