// import React, { useState, useEffect, useRef, useContext, createContext} from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import LetterBtn from './letterBtn';
// import ServiceBtn from './serviceBtn';
// import styled from "styled-components";
// import InputSearch from './inputSearch';

// let LetterButtonList = styled.div`
// margin-bottom: 2vh;
// `
// const Services = (props) => {
//   const data = useStaticQuery(graphql`
//     {
//       allStrapiService {
//         nodes {
//           nom
//           team
//           letter {
//             id
//             lettre
//           }
//           lieux {
//             nom
//             adresse
//             details
//           }
//         }
//       }
//       allStrapiLetter {
//         nodes {
//           id
//           lettre
//         }
//       }
//     }
//   `)

//   const service = data.allStrapiService.nodes
//   console.log(data.allStrapiService.nodes.map(a=>a.lieux.map(n=>n.nom)))
//   useEffect(() => {
//     console.log('I will run only once');
//   }, []);

//   const [datas, setDatas] = useState(service);
//   const [isSelected, setIsSelected] = useState(false);
//   const toggle = () => setIsSelected(!isSelected);
//   const ServiceContext = createContext(service)
  
//   const filterByLetter = (letter) => {
//     let result = data.allStrapiService.nodes.filter((a, index) => a.letter.lettre === letter)
//     console.log(result)
//     return setDatas(result)
//   }

//   const handleChangeColor = (id) => {
//     let toto = document.getElementById(id)
//     toto.style.background = '#c5bce0'
//     toto.style.color = 'white'
//   }

//   const handleRestoreColor = (id) => {
//     let toto = document.getElementById(id)
//     toto.style.background = 'white'
//     toto.style.color = 'grey'
//   }

//   const handleReset = () => {
//     return (
//       setDatas(service)
//     )
//   }

//   const refContainer = useRef();
  
//   {if (data) { 
//     return (  
//       <div>
//         <LetterButtonList>
//           {data.allStrapiLetter.nodes.map((a, index) => 
//             <span key={index}>
//               <LetterBtn 
//                 ref = {refContainer}
//                 id = {a.id}
//                 onClick={() => {
//                   filterByLetter(a.lettre);
//                   toggle();
//                   isSelected ?
//                   handleRestoreColor(a.id)
//                   :
//                   handleChangeColor(a.id)
//                   console.log(refContainer.current)
//                 }}
//                 >
//                 {a.lettre}
//               </LetterBtn>
//             </span>
//           )}
//           <br></br><br></br>
//           <button onClick={() => handleReset()}>Reset filters</button>
//         </LetterButtonList>
//         <InputSearch />
//         <div>
//           {datas.length > 0 
//           ? 
//           datas.map(a => 
            
//               <ServiceBtn 
//                 to = '/test'
//                 id = {a.id}
//                 name={a.nom}
//                 team={a.team}
//                 key = {a.id}
//                 lieu ={a.lieux}
//                 {...props}>
//                 {a.nom}
                
//               </ServiceBtn>
//             )
//           :
//             <p className="text-muted">Pas de résultats</p>
//           }
//         </div>
//       </div>
//     )
//   }
//     return null
//   }
// }

// export default Services
