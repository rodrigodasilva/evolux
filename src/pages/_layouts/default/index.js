import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const DefaultLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
