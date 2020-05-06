import React from "react"
import { Container } from 'reactstrap'
import Layout from "../components/layout"
import PersonCard from '../components/personCard';
import Link from '../components/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronLeft } from 'react-icons/fa';
import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

const Results = ({ location }) => {
  //console.log(location.state.props.props) //!TODO AMELIORER NOM PASSAGE DE PROPS
 
  return (
    <Layout>
      <Container className="py-5">
        <div style={{marginBottom:'50px', color:'#3aa7bd'}}>
          <Link to='/' style={{textDecoration:'none'}}>
           <p style={{color:'#3aa7bd'}}><FaChevronLeft size='15' color='#3aa7bd'/> retour</p>
          </Link>
          <h5>{location.state.nom ? `${location.state.nom.toUpperCase()}` : null}</h5>
        </div>
        <div className='container'>
          <div className="row">
            {location.state.props.props ? location.state.props.props.map((a, index) =>
              <div className="col-md-4"
                style={{ marginBottom:'20px'}}
                key={index}
              >
                <Card style={{boxShadow:'0 .5rem 1rem rgba(22,28,45,.1)'}}>
                  <CardHeader>
                    {!a.civ && !a.prenom ?
                      a.nom.toUpperCase() :
                      `${a.civ} ${a.nom.toUpperCase()} ${a.prenom.toUpperCase()}`
                    }
                  </CardHeader>
                  <CardBody >
                    <div className="row align-items-start">
                      <div className="col-2">
                        <FaMapMarkerAlt className= 'react-icons'/>
                      </div>
                      <div className="col-10" style={{padding:'0'}}>
                        {a.adresse.toLowerCase()}
                      </div>
                    </div>
                    <div className="row align-items-end">
                      <div className="col-2"></div>
                      <div className="col-10" style={{padding:'0'}}>
                        {`${a.cp} ${a.ville}`}
                      </div>
                    </div>
                    <div className="row align-items-start">
                      <div className="col-2">
                        {a.tel ?
                          <FaPhone className= 'react-icons'/> : 
                          null
                        }    
                      </div>
                      <div className="col-10" style={{padding:'0'}}>{a.tel.split(/\r\n|\r|\n/)
                        .map(a=>
                          <div>
                            <a href={`tel:+33${a.replace(/\s/gi,'').replace(a.charAt(0),'')}`}>{a}</a>
                          </div>
                        )
                      }
                      </div>
                    </div>
                    <div className="row align-items-end">
                      <div className="col-2">
                        {a.email ?
                          <FaEnvelope className= 'react-icons'/> :
                          null
                        }
                      </div>
                      <div className="col-10" style={{padding:'0'}}>
                        <a href={`mailto:${a.email}`}>{a.email}</a>
                      </div>
                    </div>
                    <div className="row align-items-start">
                      <div className="col-2"></div>
                      <div className="col-10" style={{padding:'0'}}>
                        {a.divers}
                      </div>
                    </div>
                  </CardBody>
                  <PersonCard personnes={a.personnes} id={a.id}/>
                </Card>
              </div>
            ) : null
            }
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Results;
