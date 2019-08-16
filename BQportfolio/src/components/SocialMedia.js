import React from "react"
import styled from 'styled-components';
import { socialIcons } from '../assets/content.js'

const IconWrapper = styled.div`
	display: flex;
`;

const Icon = styled.div`
	height: 50px;
	width: 50px;
	background-size: cover;
	margin: 8px;
	&:first-child {
		margin-left: 0px;
	}
`;

const SocialMedia = () => (
  <IconWrapper>
  	{socialIcons.map((icon, key) => <Icon key={key} style={{backgroundImage: `url(${icon})`}}/>)}
  </IconWrapper>
)

export default SocialMedia
