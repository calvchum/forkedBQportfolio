import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Navigation from './Navigation';
import { colors } from '../utilities';

const ResponsiveNavStyles = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${colors.black};
  padding: 100px 2em 2em 2em;
`;

const ResponsiveNav = ({ style }) => (
    <ResponsiveNavStyles style={style}>
      	<Navigation color={colors.almostWhite} /> 
    </ResponsiveNavStyles>
  );

export default ResponsiveNav;
