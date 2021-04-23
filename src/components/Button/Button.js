import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
