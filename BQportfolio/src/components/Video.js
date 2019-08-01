import React from 'react'
import styled from 'styled-components'

const VideoWrapper = styled.div`

`;


const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoWrapper>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoWrapper>
)

export default Video;
