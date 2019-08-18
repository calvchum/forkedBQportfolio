import React from "react"
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { about, tools } from '../assets/content'
import './layout.css'


const IconWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(130px, 1fr) );
    grid-gap: 16px;
`

const Icon = styled.div`
    width: 130px;
    height: 130px;
    background-size: cover;
    &:hover {
      transition: 0.3s;
      transform: scale3d(1.02, 1.02, 1.02);
    }
`

const IconGrid = () => {
  return (
    <IconWrapper>
        {tools.map(tool => <Icon style={{ backgroundImage: `url(${tool})`}} />)}
    </IconWrapper>
  )
}

export default IconGrid
