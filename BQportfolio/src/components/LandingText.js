import React from "react"
import { HeroText, colors } from '../utilities';
import styled from 'styled-components';

const LandingTextWrapper = styled.div`
	display: block;
	z-index: 4;
`;
const LandingText = () => (
    <LandingTextWrapper>
      <HeroText color={colors.almostWhite}>Ben Quartermaine</HeroText>
      <HeroText color={colors.almostWhite}>UX Designer</HeroText>
      <HeroText color={colors.almostWhite}>Melbourne, Australia</HeroText>
    </LandingTextWrapper>
)

export default LandingText
