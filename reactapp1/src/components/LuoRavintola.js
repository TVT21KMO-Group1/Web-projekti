import React from "react";
import {useState} from 'react';
import axios from 'axios';

export default function LuoRavintola(props) {
    const [RavintolanNimi, setRavintolanNimi] = useState(""); 
    const [Hintataso, setHintataso] = useState ("");
    const [RavintolanOsoite, setRavintolanOsoite] = useState ("");
    const [Aukeamisaika, setAukeamisaika] = useState ("");
    const [Sulkemisaika, setSulkemisaika] = useState ("");
    const [KuvaRavintolasta, setKuvaRavintolasta] = useState (null);
    const [RavintolanTyyppi, setRavintolanTyyppi] = useState ("");



    const LisaaRavintolaKuva = e => {
      setKuvaRavintolasta(e.target.files[0]);
  }

    const LuoRavintolasi = async() => {                           //tämä luo ravintolan ja lisää sen käyttäjälle, pitää vielä tehdä rajoitin että vain yhden                                                     
        await axios.post('http://localhost:3306/Ravintolat', {    //ravintolan voi tehdä yhdelle käyttäjälle
          Nimi: RavintolanNimi,
          Hintataso: Hintataso,
          Osoite: RavintolanOsoite,
          Aukeamisaika: Aukeamisaika,
          Sulkemisaika: Sulkemisaika,
          RavintolanTyyppi: RavintolanTyyppi,
          KuvaRavintolasta: KuvaRavintolasta,
        }  ).then (response => { var ravintolaID = response.data.insertId; 
          console.log (ravintolaID)
          console.log(props.KirjautunutKayttajaID)
        axios.put('http://localhost:3306/Kayttaja',{
        Ravintola_idRavintola: ravintolaID,
        idKayttaja: props.KirjautunutKayttajaID} )})
    }

        return(

            <div className="LuoRavintolaNakyma"> {/*luo laatikon, jonka sisään haluan tekstin*/}
            <h1>Luo ravintolasi </h1>

            <div>Ravintolan nimi <input type="text" value={ RavintolanNimi } onInput={e => setRavintolanNimi(e.target.value)}/></div>  
            <div>Ravintolan hintataso <input type="text" value={ Hintataso } onInput={e => setHintataso(e.target.value)}/></div>
            <div>Ravintolan osoite <input type="text" value={ RavintolanOsoite } onInput={e => setRavintolanOsoite(e.target.value)}/></div>
            <div>Aukeamisaika <input type="text" value={ Aukeamisaika } onInput={e => setAukeamisaika(e.target.value)}/></div>
            <div>Sulkemisaika <input type="text" value={ Sulkemisaika } onInput={e => setSulkemisaika(e.target.value)}/></div>
            <div>Ravintolan tyyppi <input type="text" value={ RavintolanTyyppi } onInput={e => setRavintolanTyyppi(e.target.value)}/></div>
            <div>Kuva ravintolasta <input type="file" onChange={LisaaRavintolaKuva} /></div>


          

            <button onClick={ () => LuoRavintolasi({ RavintolanNimi, Hintataso, RavintolanOsoite, Aukeamisaika, Sulkemisaika, RavintolanTyyppi, KuvaRavintolasta }) }>Luo Ravintola</button>
            


            </div>
    )
}

