import React from 'react';
import PropTypes from 'prop-types'

import { currency } from './masks'

import * as S from './styles'

const Input = React.forwardRef(
  (
    {
      id,
      label,
      error,
      placeholder,
      className,
      mask,
      ...props
    },
    ref
  ) => {    

    const handleKeyUp = (e) => {
      if (mask === 'currency') {
        return currency(e)
      }       
    }

    return (
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
          onKeyUp={handleKeyUp}
          ref={ref}
          {...props}
        />          
        {error && <S.Error>{error}</S.Error>}
      </S.Container>
    )
  }
)

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  mask: PropTypes.oneOf(['', 'currency']),
}

Input.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  className: '',
  error: '',
  mask: '',
}

export { Input }
