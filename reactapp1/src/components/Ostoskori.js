import React from 'react'
import RuokalistaTulostus  from './RuokalistaTulostus';
import { useState } from 'react';

export default function Ostoskori(props) {

  const [RavintolanRuuat, setRavintolanRuuat] = useState([]);


  return (

    <div className="Ostoskori"> Ostoskori

    {props.ostosTaulu.map(r => <RuokalistaTulostus RavintolanRuuat={r}/>)} 

    <button> Osta </button>
    
    </div>
  )
}
