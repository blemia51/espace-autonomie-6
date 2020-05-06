import React, { useState } from 'react';
import {
  Collapse,
  CardBody,
  CardText
} 
from 'reactstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';




const PersonCard = (props) => {
  const { personnes, id } = props
  //console.log(personnes)
  const [idCard, setIdCard] = useState(null)
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className='div-personnes'>
      {personnes !== null &&
      <CardText
        style={{fontStyle:'normal', color:'red', cursor:'pointer', marginLeft:'15px', fontSize:'0.7rem'}}
        onClick={() => {
          setIdCard(id);
          setIsOpen(!isOpen)
        
        }}
      >
      {!isOpen ? '+ collaborateurs' : '- collaborateurs'}
      </CardText >}
      {personnes !== null && 
        personnes.map(staff =>
          <span >
            <Collapse isOpen={idCard === id ? isOpen : false} >
              <CardBody className="person-card" style={{fontSize:'14px'}}>
                <div className="row align-items-end">
                {`${staff.civ} ${staff.nom} ${staff.prenom}`}
                </div>
                <div className="row align-items-end">
                  fonction: {staff.fonction}
                </div>                    
                <div className="row align-items-end">
                  <div className="col-2-auto"><FaPhone className='react-icons'/></div>
                  <div className="col-10">
                    {staff.tel.split(/\r\n|\r|\n/).map(a=>
                      <div>
                        <a href={`tel:+33${a.replace(/\s/gi,'').replace(a.charAt(0),'')}`}>{a}</a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="row align-items-end">
                  <div className="col-2-auto"><FaEnvelope className='react-icons'/></div>
                  <div className="col-10">
                    <a href={`mailto:${staff.email}`}>{staff.email}</a>
                  </div>
                </div>
              </CardBody>
            </Collapse>
          </span>   
        )}
    </div>
  )
}

export default PersonCard;
