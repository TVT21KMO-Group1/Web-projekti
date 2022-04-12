import React from 'react'
import {useState} from 'react'
import {Link } from 'react-router-dom'


export default function LoginSivu(props) {

    const [KayttajaTunnus, setIdKayttaja] = useState("");
    const [Salasana, setSalasana] = useState("");

    const handleKayttajaTunnusChange = (event) => {
        setIdKayttaja(event.target.value);
    }
    const handleSaldoChange = (event) => {
        setSalasana(event.target.value);
    }
    const [KayttajaTunnus2, setKayttajaTunnus] = useState("");
    const [Nimi, setNimi] = useState("");
    const [Salasana2, setSalasana2] = useState("");
    const [Osoite, setOsoite] = useState("");
    const [PuhNro, setPuhNro] = useState("");
    const [onOmistaja, setOnOmistaja] = useState(0);

    const handleKayttajaTunnusChange2 = (event) => {
      setKayttajaTunnus(event.target.value);
    }
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
      setOnOmistaja(!onOmistaja);
    } 

 /*   const [checked, setChecked] = React.useState(0);

  const handleChange = () => {
    setChecked(!checked);
  };*/
    

  return (
   
    <div className="Etusivu">

      <div className="LoginSivu">
          <h1>Kirjaudu sisään</h1>

          <div>Kayttajatunnus </div> 
          <div> <input type="text"  value={ KayttajaTunnus } onChange={ handleKayttajaTunnusChange }/></div>  

          <div>Salasana </div> 
          <div> <input type="password" value={ Salasana } onChange={ handleSaldoChange } /></div> 
          <Link to = '/Kirjauduttu'> <button onClick={ () => props.KirjauduSisaanFunktio(KayttajaTunnus, Salasana)  }>Kirjaudu sisaan</button></Link>
          
      </div>
      <div className="LoginSivu">
          <h1> Luo käyttäjätunnus</h1>

       <div> Kayttajatunnus </div> 
        <div> <input type="text" value={KayttajaTunnus2 } onChange={ handleKayttajaTunnusChange2 }/></div>    

          <div> Nimi </div> 
          <div> <input type="text" value={Nimi} onChange={handleNimilisaa} /></div> 

          <div> Osote </div> 
          <div> <input type="text" value={Osoite} onChange={handleLisaaOsoite} /></div>  

          <div>Puhelinumero </div> 
          <div> <input type="text" value={PuhNro} onChange={handleLisaaPuhNro}/></div> 

          <div> Salasana </div> 
          <div> <input type="password" value={Salasana2} onChange={handleLisaaSalasana}/></div>  

          <div> Oletko omistaja 
           <input type="checkbox"  value={onOmistaja} onChange={handleSetOnOmistaja}/></div>

          <button onClick={ () => props.luoKayttajafunktio(Nimi,Osoite,PuhNro,Salasana2,onOmistaja, KayttajaTunnus2) }>Luo Tunnus</button>

      </div>

     

    </div>

  )
}
