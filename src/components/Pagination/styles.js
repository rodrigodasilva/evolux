import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  .page-link {
    background: none !important;
    border: none !important;
  }

  .page-item.active .page-link {
    font-weight: bold;
  }
`

export const PaginationItem = styled.button`
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background: none;
  border: none;
`