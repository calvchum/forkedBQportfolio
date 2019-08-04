import React from "react"
import { Link } from "gatsby"
import { HeroTextUnderlined, BodyText, media } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { about } from '../assets/content'

const SectionWrapper = styled.section`
    max-width: 960px;
    margin: 0 auto;
    padding: 3em 0em;
`

const ContentWrapper = styled.div`
	max-width: 700px;
    margin-right: 0;
    margin-left: auto;
    padding-top: 3em;
    
    ${media.med`
        margin: 0 3em;
    `}

`

const About = props => (
  <Layout props={props}>
    <SEO title="About Page" />
    <SectionWrapper>
    	<HeroTextUnderlined>{about.title}</HeroTextUnderlined>
    	<ContentWrapper>
    		<BodyText>{about.content}</BodyText>
    	</ContentWrapper>
    </SectionWrapper>
    <SectionWrapper>
        <HeroTextUnderlined>{about.title}</HeroTextUnderlined>
        <ContentWrapper>
            <BodyText>{about.content}</BodyText>
        </ContentWrapper>
    </SectionWrapper>
    <SectionWrapper>
        <HeroTextUnderlined>{about.title}</HeroTextUnderlined>
        <ContentWrapper>
            <BodyText>{about.content}</BodyText>
        </ContentWrapper>
    </SectionWrapper>
  </Layout>
)

export default About
