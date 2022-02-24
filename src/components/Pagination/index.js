import React from 'react'

import { Pagination as PaginationContainer } from '../../containers'

import * as S from './styles'

const Pagination = ({ current, limit, records, onChange, isLoading, ...rest}) => {

  const total = Math.ceil(Math.max(1, records / limit))

  return (
    <S.PaginationWrapper {...rest}> 
      <PaginationContainer> 
        <PaginationContainer.First 
          disabled={current === 1 || isLoading} 
          onClick={() => onChange(1)}
        />
        <PaginationContainer.Prev 
          disabled={current === 1 || isLoading} 
          onClick={() => onChange(current -1)}
        />        

        <PaginationContainer.Item disabled>{current} de {total}</PaginationContainer.Item>        

        <PaginationContainer.Next 
          disabled={current === total || isLoading} 
          onClick={() => onChange(current + 1)}
        />
        <PaginationContainer.Last 
          disabled={current === total || isLoading} 
          onClick={() => onChange(total)}
        />
      </PaginationContainer>
    </S.PaginationWrapper>    
  )
}

export { Pagination }