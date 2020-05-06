import React from 'react'
import {Container, Row, Col} from 'reactstrap'
//import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
//import Link from './link';
import styled from "styled-components"

const Footer = styled.footer`
  padding: 3rem 0;
  background: #f8f9fa;
 
  /* ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
    }
  } */
`

// let SocialLink = ({Icon}) => (
//   <Link to="/" className="mr-2">
//     <Icon size={30}/>
//   </Link>
// )

// let FooterLink = ({to, children}) => (
//   <li>
//     <Link to={to}>
//       {children}
//     </Link>
//   </li>
// )

export default () => (
  <Footer>
    <Container>
      <Row>
        <Col>
          <h5>Espace autonomie 6 Annuaire</h5>
          <ul>
            
          </ul>
        </Col>
        <Col>
          
          <ul>
            
          </ul>
        </Col>
        <Col>
         
          <ul>
          </ul>
        </Col>
        <Col>
         
          
        </Col>
      </Row>
    </Container>
  </Footer>
)
