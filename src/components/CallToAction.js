import React from 'react'
import styled from 'styled-components'

const ItalizedText = styled.p`
  font-style: italic;
`

const CallToAction = () => (
  <ItalizedText>
    If you enjoyed this post, please subsribe to my{' '}
    <a href="http://eepurl.com/c8xBc9">newsletter</a>.
  </ItalizedText>
)

export default CallToAction
