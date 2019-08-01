import React from "react"
import { Link } from "gatsby"
import { HeroTextUnderlined, BodyText } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const SectionWrapper = styled.section`
	
	
`

const ContentWrapper = styled.div`
	max-width: 600px;
`


const About = () => (
  <Layout>
    <SEO title="About Page" />
    <SectionWrapper>
    	<HeroTextUnderlined>About</HeroTextUnderlined>
    	<ContentWrapper>
    		<BodyText>Welcome to page 2 and how it is we're going to Welcome to page 2 and how it is we're going toWelcome to page 2 and how it is we're going toWelcome to page 2 and how it is we're going toWelcome to page 2 and how it is we're going toWelcome to page 2 and how it is we're going toWelcome to page 2 and how it is we're going to</BodyText>
    	</ContentWrapper>
    </SectionWrapper>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
