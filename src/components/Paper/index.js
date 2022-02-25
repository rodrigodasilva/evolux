import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Paper = ({ children, ...props }) => (
  <S.Paper {...props}>{children}</S.Paper>
)

Paper.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Paper }
