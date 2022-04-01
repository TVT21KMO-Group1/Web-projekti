import React from 'react'
import {Link} from 'react-router-dom'

export default function Tuotekategoriat(props) {
  //props.setValittuKategoria(props.idTuotekategoria);
 // console.log(props)

 
 
//
  return (
    
    <div className="Ravintolalista" onClick={()=> props.setValittuKategoria(props.idTuotekategoria) }>
       
          <div > {props.Tuotekategoria}</div>
  
    </div>
  );
}
