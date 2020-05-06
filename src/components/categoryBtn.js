import React from 'react'
import styled from 'styled-components'
import Link from './link'
import { FaAddressCard } from 'react-icons/fa'

let CategoryBtn = styled.div`
  -webkit-appearance: unset !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 2px;
  border: 1px solid lightgrey;
  background: white;
  box-shadow: 0 .5rem .5rem rgba(22,28,45,.1);
  color: #3aa7bd;
  display: inline-block;
  padding: .8rem;
  transition-duration: 0.25s;
  cursor: pointer;
  font-size: 1.2rem; 
  text-align: center;
  line-height: normal;
  margin: 0.25rem;
  &:hover {
    transform: scale(1.015);
    box-shadow: 0 1rem 1rem rgba(22,28,45,.1),0 .5rem 1rem -.75rem rgba(22,28,45,.1);
  }
  `

  export default ({ id, to, value, location, personnes, ...props }) => {
    //console.log({value})
    return (
    <Link
      to={to} 
      state={{
        id: id,
        nom: value,
        personnes: {personnes},
        props: {...props}
      }}
    >
        <CategoryBtn {...props}>
          <div className="row align-items-end">
            <div className="col-10">{value}</div>
            <div className="col-2"><FaAddressCard className='farS' size='1.8rem'/></div>
          </div>
        </CategoryBtn> 
    </Link>
  )}
