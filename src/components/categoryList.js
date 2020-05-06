import React, { useState, useEffect } from 'react';
//import { useStaticQuery, graphql } from "gatsby";
import CategoryBtn from './categoryBtn';
import InputSearch from './inputSearch';
import { Container, Row } from 'reactstrap';
import annuairejson from '../data/annuairejson.json';

const deburr = require('lodash.deburr');

const StructureCard = () => {
  //** REQUETTE à conserver en attente du back strappi **//
  // const datatemp = useStaticQuery(graphql`
  //   {
  //     allStrapiCategorie {
  //       nodes {
  //         id
  //         nom
  //         structures {
  //           civ
  //           nom
  //           prenom
  //           adresse
  //           cp
  //           ville
  //           tel
  //           email
  //           divers
  //         }
  //       }
  //     }
  //   }
  // `)

let data = annuairejson ;
//console.log(data)
const category = data.allStrapiCategorie.nodes
  console.log(category)
  let [input, setState] = useState();
  let [datas, setDatas] = useState(category)
  let [structures, setStructures] = useState([])
  
  structures = structures.flatMap(a=>a)
  structures && console.log(structures)

  useEffect(() => {
    setDatas(category)
    setStructures(structures)
  }, []);
  
  const searchField = (event) => {
    setState(input = event.target.value)
    return (
      //input.length > 1 ? filterByInputCategory(input) : setDatas(category)
      input.length > 1 ? filterByInputStructure(input) : setDatas(category)
      )
  }

  // const filterByInputCategory = (value) => {
  //   let result = category.filter((a, index) =>
  //     deburr(a.nom.toLowerCase()).includes(deburr(value.toLowerCase()))
  //   )
  //     console.log(result)
  //     return setDatas(result)
  // }

  const filterByInputStructure = (value) => {
    let structure = category.map((a, index) =>
      a.structures.filter(a =>
      // a.nom.toLowerCase() === val.toLowerCase()))
      deburr(`${a.civ} ${a.nom} ${a.prenom}`.toLowerCase()).includes(deburr(value.toLowerCase()))
      ))
      console.log(structure)
      return setStructures(structure)
  }

  return (
    <div>
      <Container className="py-5">
        <Row className="d-flex justify-content-center">
          <InputSearch searchField={searchField} input={input}/>
        </Row>
      </Container>
     
      {datas.length > 0 ? datas.map(a => 
        <CategoryBtn 
          id={a.id}
          value={a.nom}
          to='/results'
          props={a.structures}
          personnes={a.structures.personnes}
        >
        </CategoryBtn>
      ) : <p>aucun resultats</p>
      }
      <div>
        {structures.map(p => 
          <div>
            <ul style={{listStyle:'none'}}>
              <li>{p.civ} {p.nom} {p.prenom} </li>
              <li>{p.adresse}</li>
              <li>{p.tel}</li>
            </ul>
          </div>
          
          )}
      </div>
    </div>
  )
}

export default StructureCar
