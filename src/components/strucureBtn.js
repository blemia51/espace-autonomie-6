import React, { useState } from 'react';
import styled from 'styled-components';
import Link from './link';
import StrucureCard from './structureCard';

let StructureBtn = styled.div`
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
  padding-left: 2rem;
  transition-duration: 0.25s;
  cursor: pointer;
  font-size: 1.2rem; 
  text-align: left;
  line-height: normal;
  margin: 0.25rem;
  &:hover {
    transform: scale(1.015);
    box-shadow: 0 1rem 2.5rem rgba(22,28,45,.1),0 .5rem 1rem -.75rem rgba(22,28,45,.1);
  }
  `
  export default ({id, to, value, location, personnes, ...props }) => {
    //console.log({...props})
    //console.log(id)
    const [idCard, setIdCard] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
    <Link
      to={to} 
      state={{
        id: id,
        nom: value,
        props: {...props}
      }}
    >
      <StructureBtn id={id} >
        <div className="row align-items-end see-more">
          <div className="col-9">{value}</div>
          <div 
            role="button"
            tabIndex={0}
            className="col-3-auto"
            style={{color:'red', fontSize:'.8rem', marginRight:'8px'}}
            onClick={() => {
              setIdCard(id);
              setIsOpen(!isOpen)
            }}
            onKeyDown={() => {
              return null
            }}>
            {!isOpen ? '+ voir plus' : '- voir moins'}
          </div>
        </div>
        <StrucureCard
          idCard={idCard}
          isOpen={isOpen}
          id={id}
          adresse={props.adresse}
          cp={props.cp}
          ville={props.ville}
          tel={props.tel}
          email={props.email}
          personnes={personnes}
        /> 
      </StructureBtn>
        
    </Link>
  )}
