import React from "react"
import { Link } from "gatsby"
import { HeroTextUnderlined } from '../utilities'
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <HeroTextUnderlined>About</HeroTextUnderlined>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
