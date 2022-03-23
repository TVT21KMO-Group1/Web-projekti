import React from 'react'
import {useState} from 'react'

export default function LoginSivu(props) {

    const [idKayttaja, setIdKayttaja] = useState("");
    const [Salasana, setSalasana] = useState("");

    const handleIdKayttajaChange = (event) => {
        setIdKayttaja(event.target.value);
    }
    const handleSaldoChange = (event) => {
        setSalasana(event.target.value);
    }
    
    




  return (
    <div>
        <div>Kayttajatunnus <input type="text"  value={ idKayttaja } onChange={ handleIdKayttajaChange }/></div>  
        <div>Salasana <input type="text" value={ Salasana } onChange={ handleSaldoChange } /></div> 
        <button onClick={ () => props.KirjauduSisaanFunktio(idKayttaja, Salasana) }>Kirjaudu sisaan</button> 
        
        
    </div>
  )
}
