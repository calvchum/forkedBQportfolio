import styled from 'styled-components';

const fontsize = {
	hero: '64px',
	header: '48px',
	body: '18px'
}

const presets = {
	lineHeight: '140%',
	margin: '0em'
}

// TYPOGRAPHY STYLED COMPONENTS
export const HeroText = styled.h1`
	${presets}
	font-size: ${fontsize.hero};
`;

export const HeaderText = styled.h1`
	${presets}
	font-size: ${fontsize.header};
`;

export const BodyText = styled.p`
	${presets}
	font-size: ${fontsize.body};
`;

export const LinkText = styled.a`
	${presets}
	font-size: ${fontsize.body};
`;

