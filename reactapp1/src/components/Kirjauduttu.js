import React from 'react'
import {useState} from 'react'

export default function Kirjauduttu(props) {
 var output

    //console.log(props)
    
    var KT = props.KirjautunutKayttaja;

if (KT ===0){
  output = (
    <div>
     <div> Kayttajatunnus tai salasana on väärä!!! Ole ystävällinen ja kokeile toista </div>    
    </div>
    )
}
else{
  output = (
    <div>
    <div> Olet kirjautunut sisaan kayttajatunnuksella  </div>
    <div> {KT}
   <div>Pääset selaamaan ravintoloita ylhäältä painamalla Etusivulle </div>
   </div>
   </div>
  )
}
  return (
    <div> {output} </div>
  )
}
