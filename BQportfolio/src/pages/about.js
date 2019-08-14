import React from "react"
import { Link } from "gatsby"
import { HeroTextUnderlined, BodyText, media } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"
import IconGrid from "../components/IconGrid"
import SocialMedia from "../components/SocialMedia"
import styled from 'styled-components'
import { about, problems } from '../assets/content'

const SectionWrapper = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 3em;
`

const ContentWrapper = styled.div`
  padding-top: 2em;
  
`

const ProblemList = styled.div`
  padding: 16px 0px;
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
        <HeroTextUnderlined>Contact</HeroTextUnderlined>
        <ContentWrapper>
            <SocialMedia />
        </ContentWrapper>
    </SectionWrapper>
    <SectionWrapper>
        <HeroTextUnderlined>{problems.title}</HeroTextUnderlined>
        <ContentWrapper>
        <BodyText>{problems.introduction}</BodyText>
            <ProblemList>
              <ul>
                  {problems.content.map(problem => <li><BodyText>{problem}</BodyText></li>)}
              </ul>
            </ProblemList>
        </ContentWrapper>
    </SectionWrapper>

    <SectionWrapper>
        <HeroTextUnderlined>Tools</HeroTextUnderlined>
        <ContentWrapper>
            <IconGrid />
        </ContentWrapper>
    </SectionWrapper>
  </Layout>
)

export default About
