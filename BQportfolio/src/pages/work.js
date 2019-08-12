import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import { HeroTextUnderlined } from '../utilities'
import { wholefoods, ecze } from '../assets/content'


const Work = props => {
	return (
		<Layout props={ props }>
			<HeroTextUnderlined>Work</HeroTextUnderlined>
			<ProjectCard project={ wholefoods } />
			<ProjectCard project={ ecze } />
		</Layout>
	)
}

export default Work
