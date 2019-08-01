// import { Link } from "gatsby"
import React from "react"
import { BodyText, LinkText, colors } from '../utilities';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	height: 80px;
	background: ${colors.black};
	color: ${colors.almostWhite};
	padding: 0em 2em;
`;

const Footer = () => (
  <FooterWrapper>
  	<BodyText>Designed and built by Dark Green Design</BodyText>
  </FooterWrapper>
)

export default Footer
