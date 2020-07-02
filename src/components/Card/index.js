import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Card = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};

export default Card;
