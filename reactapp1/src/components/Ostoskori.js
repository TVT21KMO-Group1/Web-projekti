import React from 'react'
import RuokalistaTulostus  from './RuokalistaTulostus';
import { useState } from 'react';

export default function Ostoskori(props) {

  console.log(props)
  const [RavintolanRuuat, setRavintolanRuuat] = useState([]);
  const OnOstoskori = 1;


  return (

    <div className="Ostoskori"> Ostoskori

    {props.ostosTaulu.map(r => <RuokalistaTulostus RavintolanRuuat={r} OnOstoskori={OnOstoskori} poistaOstoskorista={props.poistaOstoskorista}/>)} 

    <button> Osta </button>
    
    </div>
  )
}
