import React from 'react'
import styled from 'styled-components'

const ItalizedText = styled.p`
  font-style: italic;
`

const CallToAction = () => (
  <ItalizedText>
    If you enjoyed this post, please subsribe to my{' '}
    <a href="http://eepurl.com/c8xBc9">email newsletter</a> and{' '}
    <a href="https://www.youtube.com/channel/UClqbavbIJWxl-iMBpHb37JA">
      Youtube channel
    </a>
    .
  </ItalizedText>
)

export default CallToAction
