import React from 'react';
import PropTypes from 'prop-types'

import * as S from './styles'

const Input = React.forwardRef(
  (
    {
      id,
      label,
      error,
      placeholder,
      className,
      ...props
    },
    ref
  ) => 
  (
    <S.Container className={className} >
      {label && (
        <S.Label htmlFor={id}>
          {label}
        </S.Label>
      )}
      <S.Input
        className={error ? 'error' : ''}
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />          
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
)

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
}

Input.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  className: '',
  error: '',
}

export { Input }
