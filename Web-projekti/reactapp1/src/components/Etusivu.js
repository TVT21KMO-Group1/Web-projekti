import React from 'react'
import ListaTaulukko from './ListaTaulukko'

export default function Etusivu(props) {
  return (
     
    <div>
         
        <button> kirjaudunappu</button>
    
        <div className="Etusivu"> 
            {props.ravintolat.map(r => <ListaTaulukko nimi={r.Nimi}/>)}
            
        </div>



    </div>
  )
}
