import React from 'react'
import HistoriaTulostus from "./HistoriaTulostus";


export default function TilausHistoria(props) {

  return (
    <div>
  
       

        <div className="">  
         { props.tilausHistoria.map(p => <HistoriaTulostus idtilaus={p.idtilaus} aika={p.aika} nimi={p.nimi} tuote={p.tuote} summa={p.summa}/>) }  
      </div>
            
     
    </div>
  )
}
