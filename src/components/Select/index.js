import React from 'react';
import PropTypes from 'prop-types'

import * as S from './styles'

const Select = React.forwardRef(
  (
    {
      children,
      id,
      label,
      error,
      placeholder,
      className,
      ...props
    },
    ref
  ) => {    

    return (
      <S.Container className={className} >
        {label && (
          <S.Label htmlFor={id}>
            {label}
          </S.Label>
        )}
        <S.Select
          className={error ? 'error' : ''}
          id={id}
          placeholder={placeholder}
          ref={ref}
          {...props}
        >
          {children}
        </S.Select>          
        {error && <S.Error>{error}</S.Error>}
      </S.Container>
    )
  }
)

Select.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
}

Select.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  className: '',
  error: '',
}

export { Select }
