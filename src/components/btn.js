import React from 'react'
import Link from './link'
import styled from 'styled-components'

let Button = styled.div`
  -webkit-appearance: unset !important;
  border-radius: 0.25rem;
  background: white;
  box-shadow: 0 .5rem 1.5rem rgba(22,28,45,.1);
  border: 1px solid lightgrey;
  color: red;
  display: inline-block;
  padding: .5rem 1.25rem;
  transition-duration: 0.25s;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2.5rem rgba(22,28,45,.1),0 .5rem 1rem -.75rem rgba(22,28,45,.1);
  }
`

export default ({to, children, ...props}) => (
  <Link to={to}>
    <Button {...props}>{children}</Button>
  </Link>
)
