import React from "react"
import { BodyText, LinkText, colors } from '../utilities';
import styled from 'styled-components';
import iteration from '../assets/iteration.mp4'

const VideoWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;

const videoStyles = {
	objectFit: 'cover',
  width: '100%',
  height: '100%'
}

const VideoBackground = () => (
	<VideoWrapper>
	  <video style={videoStyles} src={iteration} autoPlay muted loop />
	</VideoWrapper>
)

export default VideoBackground

