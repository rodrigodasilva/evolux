import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column;  
`

export const Label = styled.label`
  color: #fff;
  font-size: 14px;
`

export const Input = styled.input`
  border: 2px solid #6c757d;
  background-color: transparent;
  color: #fff;
  padding: .375rem .75rem;
  border-radius: 4px;
  width: 100%;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }  

  &.error {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
  } 
`

export const Error = styled.div`
  font-weight: 500;
  font-size: 12px;  
  display: block;
  margin-top: 4px;
  color: #dc3545;
`
