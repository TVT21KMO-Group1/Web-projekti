import React from 'react'
import {useState} from 'react'

export default function Kirjauduttu(props) {

    //console.log(props)
    
    var KT = props.KirjautunutKayttaja;


  return (
    <div> 
    <div> Olet kirjautunut sisaan kayttajatunnuksella  </div>
    <div> {KT}
    <div>Pääset selaamaan ravintoloita ylhäältä painamalla Etusivulle </div>
    
    </div>
    </div>
  )
}
