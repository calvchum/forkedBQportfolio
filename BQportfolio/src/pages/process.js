import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import DraggableList from "../components/DraggableList"
import { HeroTextUnderlined, BodyText } from "../utilities"
import SEO from "../components/seo"

const ProcessWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	// & div:last-child {
	// 	display: flex;
	// 	justify-content: flex-end;
	// }
`
const DisclaimerWrapper = styled.div`
		padding: 16px 0px;
	}
`

const Process = props => (
	<Layout props={props}>
		<ProcessWrapper>
			<SEO title="Process" />
			<HeroTextUnderlined>Process*</HeroTextUnderlined>
			<DisclaimerWrapper>
				<BodyText>*Not necessarily in this order</BodyText>
			</DisclaimerWrapper>
			<div>
				<DraggableList items={['Refine', 'Ideate', 'Prototype', 'Test']} />
			</div>
		</ProcessWrapper>
	</Layout>
)

export default Process


