import React from 'react'
import {Link } from 'react-router-dom'



export default function ListaTaulukko(props) {
  
  return (
    
    <div className="Ravintolalista">
       
        <h1>{props.nimi}</h1>
        <h2> kuva</h2>

        <Link to={'/Ravintola'}>
          <button onClick = { () => props.ValitseRavintolaFunktio(props.idRavintola) } > valitse tämä ravintola</button>
        </Link>

    </div>
  );
}
