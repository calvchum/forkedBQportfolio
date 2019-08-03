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


<<<<<<< HEAD
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
=======
const About = props => (
	<Layout props={props}>
		<SEO title="Page two" />
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
>>>>>>> 866dd0586174083038c3a2d9a34db2a6608d25a9
)

export default About
