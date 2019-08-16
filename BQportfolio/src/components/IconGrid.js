import React from "react"
import styled from 'styled-components'
import { tools } from '../assets/content'
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
        {tools.map((tool, key) => <Icon key={key} style={{ backgroundImage: `url(${tool})`}} />)}
    </IconWrapper>
  )
}

export default IconGrid
