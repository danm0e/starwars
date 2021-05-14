import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Header, Content, Title } from './styles'

/** Primary UI component for displaying preview data */
const Card = ({ data }) => {
  console.log(data)

  return (
    <Wrapper aria-label='Card'>
      <Header src='https://via.placeholder.com/300x200' alt='' />
      <Content>
        <Title>Luke SkyWalker</Title>
      </Content>
    </Wrapper>
  )
}

Card.propTypes = {
  /** Main data object for this card */
  data: PropTypes.object.isRequired,
}

export default Card
