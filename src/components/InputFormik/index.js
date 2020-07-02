import React from 'react';
import { Field as FormikField } from 'formik';

import CustomReactBootstrapInput from './CustomReactBootstrapInput';

export default props => (
  <FormikField {...props} component={CustomReactBootstrapInput} />
);
