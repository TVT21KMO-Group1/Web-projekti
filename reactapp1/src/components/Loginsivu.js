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

    const [Nimi, setNimi] = useState("");
    const [Salasana2, setSalasana2] = useState("");
    const [Osoite, setOsoite] = useState("");
    const [PuhNro, setPuhNro] = useState("");
    const [onOmistaja, setOnOmistaja] = useState("");


    const handleNimilisaa = (event) => {
      setNimi(event.target.value);
    }
    const handleLisaaSalasana = (event) => {
      setSalasana2(event.target.value);
    }
    const handleLisaaOsoite = (event) => {
      setOsoite(event.target.value);
    }
    const handleLisaaPuhNro = (event) => {
      setPuhNro(event.target.value);
    }
    const handleSetOnOmistaja = (event) => {
      setOnOmistaja(event.target.value);
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
          <div> <input type="text" value={Nimi} onChange={handleNimilisaa} /></div> 

          <div> Osote </div> 
          <div> <input type="text" value={Osoite} onChange={handleLisaaOsoite} /></div>  

          <div>Puhelinumero </div> 
          <div> <input type="text" value={PuhNro} onChange={handleLisaaPuhNro}/></div> 

          <div> Salasana </div> 
          <div> <input type="text" value={Salasana2} onChange={handleLisaaSalasana}/></div>  

          <div> Oletko omistaja </div> 
          <div> <input type="text" value={onOmistaja} onChange={handleSetOnOmistaja}/></div>

          <button onClick={ () => props.luoKayttajaFunktio(Nimi,Osoite,PuhNro,Salasana2,onOmistaja) }>Luo Tunnus</button>

      </div>

     

    </div>

  )
}
