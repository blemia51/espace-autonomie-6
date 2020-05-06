import React from 'react';
import {
  Collapse,
  CardText
} from 'reactstrap';
import PersonCard from './personCard'
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'


export default function StructureCard(props) {
  const { id, adresse, cp, ville, tel, email, idCard, isOpen, personnes } = props
//console.log(structures)
//console.log(id)
  return (
    <div>
      <Collapse isOpen={idCard === id ? isOpen : false}>
        <CardText style={{fontSize:'1rem', color:'#5e5b5a',backgroundColor:'white', padding:'15px',  textAlign:'left'}}>
        <div className="row align-items-start structure-card">
          <div className="col-2-auto">
            <FaMapMarkerAlt className= 'react-icons'/>
          </div>
          <div className="col-10">{adresse}<br></br>{cp}{' '}{ville}</div>
        </div>
        <div className="row align-items-start">
          <div className="col-2-auto">
            {tel ? <FaPhone className= 'react-icons'/> : null}
          </div>
          <div className="col-10">
            {tel.split(/\r\n|\r|\n/).map(a =>
              <div>
                <a href={`tel:+33${a.replace(/\s/gi,'').replace(a.charAt(0),'')}`}>{a}</a>
              </div>
            )}
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col-2-auto">
            {email ? <FaEnvelope className= 'react-icons'/> : null}
          </div>
          <div className="col-10">
            <a href={`mailto:${email}`} >{email}</a>
          </div>
        </div>
        <PersonCard personnes={personnes} id={id}/>
        </CardText>
      </Collapse>
    </div>
  )
}
