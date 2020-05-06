import React from 'react';
import {
  Container,
  Navbar
} from 'reactstrap';
import Link from './link'
import Navigation from 'reactstrap-json-nav'
import navigation from '../data/navigation';


const Header = (props) => {
  
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <Link to="/" className="navbar-brand">
         <h4 style={{color:'#403b3b'}}>Espace autonomie 6 Annuaire</h4>
        </Link>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
          <Navigation json={navigation} link={Link}/>
        {/* </Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Header;
