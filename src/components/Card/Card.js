import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Header, Content } from './styles'

/** Primary UI component for displaying preview data */
const Card = ({ data }) => {
  console.log(data)

  return (
    <Wrapper aria-label='Card'>
      <Header>Card header</Header>
      <Content>Card content</Content>
    </Wrapper>
  )
}

Card.propTypes = {
  /** Main data object for this card */
  data: PropTypes.object.isRequired,
}

export default Card
