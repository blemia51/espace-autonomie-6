import React, { useState, useRef, useEffect } from 'react';
//import { useStaticQuery, graphql } from "gatsby";
import CategoryBtn from './categoryBtn';
import StructureBtn from './strucureBtn'
import InputSearch from './inputSearch';
import { Container, Row, Col } from 'reactstrap';
import annuairejson from '../data/annuairejson.json';
import Button from './btn'

const deburr = require('lodash.deburr');

const CategoryList = () => {
  //** REQUETTE à conserver en attente du back strappi **//
  //const data = useStaticQuery(graphql`
  // {
  //   allStrapiCategorie(sort: {fields: nom, order: ASC}) {
  //     nodes {
  //       id
  //       nom
  //       structures {
  //         id
  //         civ
  //         nom
  //         prenom
  //         adresse
  //         cp
  //         ville
  //         tel
  //         email
  //         divers
  //       }
  //     }
  //   }
  //   allStrapiStructure(sort: {fields: nom, order: ASC}) {
  //     nodes {
  //       categories {
  //         id
  //         nom
  //       }
  //       id
  //       civ
  //       nom
  //       prenom
  //       adresse
  //       cp
  //       ville
  //       tel
  //       email
  //       divers
  //       personnes {
  //         id
  //         civ
  //         nom
  //         prenom
  //         fonction
  //         tel
  //         email
  //         divers
  //       }
  //      }
  //    }
  //  }
  // }
  //`)

let data = annuairejson ;

const category = data.allStrapiCategorie.nodes
  //console.log(category)
  let [input, setState] = useState('');
  let [datas, setDatas] = useState(category);
  let [structures, setStructures] = useState([]);
  let [structuresCp, setStructuresCp] = useState([])
  let [structuresVille, setStructuresVille] = useState([])
  // eslint-disable-next-line
  let [codesPostaux, setCodesPostaux] = useState([])
  let [cpFilter, setCpFilter] = useState([])

  let refInput = useRef('');
  let refDropdown = useRef()

  let codePostalArray = [];
  
  const codePostal = () => {
    const codePostalTemp = structures.map(c => {
      return `${c.cp} - ${c.ville.toUpperCase()}`
    });
    //console.log(codePostalTemp) 
    codePostalTemp.forEach(cp =>
      codePostalArray.indexOf(cp) === -1 &&
      codePostalArray.push(cp)
    );
    //console.log(codePostalArray)
    codePostalArray.sort()
    return setCodesPostaux(codePostalArray);
  }

  const onSelectCp = (e) => {
    setCpFilter(cpFilter = e.target.value)
    e.preventDefault()
    onCpFilter()
  }

  const onCpFilter = () => {
    let cpSelected = structures.filter(a =>
      deburr(`${a.cp} - ${a.ville}`.toLocaleLowerCase()) === deburr(cpFilter.toLocaleLowerCase())
    )
    return setStructures(cpSelected)
  }

/* eslint-disable */
  useEffect(() => {
      codePostal()
      setStructures(structures)
      setCodesPostaux(codePostalArray)
  },[input])
/* eslint-enable */

  useEffect(() => {
    setCodesPostaux([cpFilter])
  },[cpFilter])

  const searchField = (event) => {
    setState(input = event.target.value)
    event.preventDefault()
    codePostal()
    return (
      input.length > 1 ? filterByInputCategory(input) : setDatas(category),
      input.length > 1 ? filterByInputStructure(input) : setStructures([]),
      input.length > 1 ? filterByInputStructureCp(input) : setStructuresCp([]),
      input.length > 1 ? filterByInputStructureVille(input) : setStructuresVille([])
      //input.length > 1 ? filterByInputPersonne(input) : setStructures([])
      
    )
  }

  const filterByInputCategory = (value) => {
    let result = category.filter((a, index) =>
      deburr(a.nom.toLowerCase())
      .includes(deburr(value.toLowerCase()))
    )
      return setDatas(result)
  }

  const filterByInputStructure = (value) => {
    let structure = category.flatMap((a, index) =>
      a.structures.filter(a =>
      deburr(`${a.civ} ${a.nom} ${a.prenom}`.toLowerCase())
      .includes(deburr(value.toLowerCase()))
      ))
      return setStructures(structure)
  }

  // const filterByInputPersonne = (value) => {
  //   let personne = category.map((a, index) => 
  //   a.structures.map(p => p.personnes && p.personnes.filter(p =>
  //     deburr(`${p.nom} ${p.prenom}`.toLowerCase())
  //     .includes(deburr(value.toLowerCase()))
  //   )))
  //   //personne = personne.filter(p => p !== null)
  //     console.log(personne)
  // }

  const filterByInputStructureVille = (value) => {
    let structureVille = category.flatMap((a, index) =>
      a.structures.filter(a =>
        deburr(a.ville.toLowerCase()).includes(deburr(value.toLowerCase()))
      )
    )
    return setStructuresVille(structureVille);
  }

  const filterByInputStructureCp = (value) => {
    let structureCp = category.flatMap((a, index) =>
      a.structures.filter(a =>
        a.cp.includes(value)
      )
    )
    return setStructuresCp(structureCp);
  }

  const resetSearch = () => {
    setState('')
    setDatas(category)
    setStructures([])
    setStructuresVille([])
    setStructuresCp([])
    setCodesPostaux([])
    setCpFilter([])
    refDropdown.current.selectedIndex = 0
  }

  return (
    <Container fluid={true}>
      <Row style={{marginBottom:'40px'}} >
        <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign:'center'}} >
          <InputSearch searchField={searchField} ref={refInput} input={input}/>
          <div className='cp-dropdown'>
          <span style={{paddingRight:'12px',fontSize:'0.8rem', color:'#3aa7bd'}}>filtrer par </span> 
            
            <select
              class="custom-select"
              id="cp-filter"
              disabled={input.length > 1 && structures.length !== 0 ? false : true}
              onChange={onSelectCp}
              ref={refDropdown}
              >
              <option selected disabled>cp/ville</option>
              {codesPostaux.map(a =>
                <option value={a}>{a}</option>
              )}
            </select>
          </div>
          {input.length > 1 &&
          <Button onClick={resetSearch}>Annuler</Button>}
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          {datas.length > 0 ? datas.map((a, index) => 
            <CategoryBtn
              key={index}
              id={a.id}
              value={a.nom}
              to='/results'
              props={a.structures}
              personnes={a.structures.personnes}
            >
            </CategoryBtn>
          ) : (datas.length === 0 &&
            structures.length === 0 &&
            structuresCp.length === 0 &&
            structuresVille.length === 0) ?
            <p style={{textAlign:'center'}}>Pas de résultats</p> : null
          }
          <div>
            {structures.length > 0 && structures.map((p, index) => 
              <div key={index}>
                <StructureBtn
                  value={!p.civ && !p.prenom ? p.nom : `${p.civ} ${p.nom} ${p.prenom}`}
                  adresse={p.adresse}
                  cp={p.cp}
                  ville={p.ville}
                  tel={p.tel}
                  email={p.email}
                  id={p.id}
                  personnes={p.personnes}>
                </StructureBtn>
              </div>
            )}
          </div>
          <div>
            {structuresCp.length > 0 && structuresCp.map((p, index) => 
              <div key={index}>
                <StructureBtn
                  value={!p.civ && !p.prenom ? p.nom : `${p.civ} ${p.nom} ${p.prenom}`}
                  adresse={p.adresse}
                  cp={p.cp}
                  ville={p.ville}
                  tel={p.tel}
                  id={p.id}
                  personnes={p.personnes}>
                </StructureBtn>
              </div>
            )}
          </div>
          <div>
            {structuresVille.length > 0 && structuresVille.map((p, index) => 
              <div key={index}>
                <StructureBtn
                  value={!p.civ && !p.prenom ? p.nom : `${p.civ} ${p.nom} ${p.prenom}`}
                  adresse={p.adresse}
                  cp={p.cp}
                  ville={p.ville}
                  tel={p.tel}
                  id={p.id}
                  personnes={p.personnes}>
                </StructureBtn>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container> 
  )
}

export default CategoryList;
