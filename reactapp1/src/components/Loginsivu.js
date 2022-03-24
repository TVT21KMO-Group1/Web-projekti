import React from 'react'
import {useState} from 'react'
import {Link } from 'react-router-dom'


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
   
    <div className="Etusivu">

      <div className="LoginSivu">
          <h1>Kirjaudu sisään</h1>

          <div>Kayttajatunnus </div> 
          <div> <input type="text"  value={ idKayttaja } onChange={ handleIdKayttajaChange }/></div>  

          <div>Salasana </div> 
          <div> <input type="text" value={ Salasana } onChange={ handleSaldoChange } /></div> 
          <Link to = '/Kirjauduttu'> <button onClick={ () => props.KirjauduSisaanFunktio(idKayttaja, Salasana)  }>Kirjaudu sisaan</button></Link>
          
      </div>
      <div className="LoginSivu">
          <h1> Luo käyttäjätunnus</h1>

          <div> Kayttajatunnus </div> 
          <div> <input type="text" /></div>  

          <div> Nimi </div> 
          <div> <input type="text" /></div> 

          <div> Osote </div> 
          <div> <input type="text" /></div>  

          <div>Puhelinumero </div> 
          <div> <input type="text" /></div> 

          <div> Salasana </div> 
          <div> <input type="text" /></div>  

          <div> Oletko omistaja </div> 
          <div> <input type="text" /></div>

          <Link to = '/Kirjauduttu'> <button onClick={ () => props }>Luo Tunnus</button></Link>

      </div>

     

    </div>

  )
}
