import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from '../components/slider'
import styled from 'styled-components'
import CategoryList from '../components/structures'


let StyledBackground = styled.div`
  background: linear-gradient(to bottom,#f9fbfd 0,#fff 100%);
`

export default () => (
  
  <Layout>
    <SEO title="Home" />
    <Slider/>
    <Container className="pt-4">
      <div className="text-center">
        <h4>Annuaire</h4>
        <p className="text-muted"></p>
      </div>
    </Container>
      
    <Container fluid={true}>
      <CategoryList />
    </Container>
   
    <div className="text-center py-5">
    </div>
    <StyledBackground>

      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              
            </Col>
          </Row>
        </Container>
      </div>
    </StyledBackground>
  </Layout>
)
