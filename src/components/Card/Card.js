import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Header, Content, Title } from './styles'

/** Wrapper component for card data */
const Card = ({ title, image, url, onClick }) => {
  return (
    <Wrapper aria-label='Card' onClick={onClick}>
      <Header {...image} />
      <Content>
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  )
}

Card.propTypes = {
  /** Title of card */
  title: PropTypes.string.isRequired,
  /** Image of card */
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** URL of card */
  url: PropTypes.string.isRequired,
  /** Click event */
  onClick: PropTypes.func.isRequired,
}

export default Card
