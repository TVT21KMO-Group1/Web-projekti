import React from 'react'
import RuokalistaTulostus  from './RuokalistaTulostus';
import { useState } from 'react';

export default function Ostoskori(props) {

  const [RavintolanRuuat, setRavintolanRuuat] = useState([]);
  const OnOstoskori = 1;
  let kokonaishinta = 0;
  for (let i = 0; i < props.ostosTaulu.length; i++) {
    kokonaishinta += props.ostosTaulu[i].Hinta;
  }
/*
  const ostaNyt = async() => { //tama kaipaa veila vahan ajatusta, saattaa olla etta vaatii mqsql proseduurin
    
      await axios.post('http://localhost:3000/ruoka', {
        tuote: ruoka.tuote,
        kuvaus: ruoka.kuvaus,
        hinta: ruoka.hinta,
        tuotekategoria_idtuotekategoria: idKategoria
      })
    

  }
*/
  return (

    <div className="Ostoskori"> Ostoskori

    {props.ostosTaulu.map(r => <RuokalistaTulostus RavintolanRuuat={r} OnOstoskori={OnOstoskori} poistaOstoskorista={props.poistaOstoskorista}/>)} 
    
    <button onClick={ () => props.ostaFunktio(kokonaishinta) }> Osta </button>
    <div>Kokonaishinta {kokonaishinta}</div>
    
    </div>
  )
}
