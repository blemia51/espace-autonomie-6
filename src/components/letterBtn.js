import React from 'react'
//import Link from './link'
import styled from 'styled-components'

let LetterBtn = styled.div`
 -webkit-appearance: unset !important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid lightgrey;
  background: ${props => props.isSelected ? '#c5bce0' : 'white'};
  box-shadow: 0 .5rem 1.5rem rgba(22,28,45,.1);
  color: ${props => props.isSelected ? 'white' : 'grey'};
  display: inline-block;
  padding: .8rem;
  transition-duration: 0.25s;
  cursor: pointer;
  font-size: 1.5rem;
  width: 4vw; 
  text-align: center;
  line-height: normal;
  margin: 0.25rem;
  &:hover {
    transform: translateY(-3px);
    background: #c5bce0;
    color: white;
    box-shadow: 0 1rem 2.5rem rgba(22,28,45,.1),0 .5rem 1rem -.75rem rgba(22,28,45,.1);
  }
  `

export default React.forwardRef((props, ref) => {
    const { onClick } = props
    return (
    <LetterBtn onClick={onClick} ref={ref} {...props}>{props.children}</LetterBtn>
    )
})
