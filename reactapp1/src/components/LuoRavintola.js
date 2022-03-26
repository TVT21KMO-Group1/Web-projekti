import React from "react";
import {useState} from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom'

{/*Nappi uupuu, jäi kesken pähkäily. Lisäksi huomasin Ravintola.js sivun niin ppitäis vissiin keskustella keskeenään näiden. Katsellaan 26.3 LP*/}


export default function RavintolanLisays() {
    const [RavintolanNimi, setRavintolanNimi] = useState(""); 
    const [Hintataso, setHintataso] = useState ("");
    const [RavintolanOsoite, setRavintolanOsoite] = useState ("");
    const [Aukioloajat, setAukioloajat] = useState ("");
    const [KuvaRavintolasta, setKuvaRavintolasta] = useState ("");

    const LuoRavintolasi = async(omaRavintola) => {
        await axios.post('http://localhost:3000/omaRavintola', {
          RavintolanNimi: omaRavintola.RavintolanNimi,
          Hintataso: omaRavintola.Hintataso,
          RavintolanOsoite: omaRavintola.RavintolanOsoite,
          Aukioloajat: omaRavintola.Aukioloajat,
          KuvaRavintolasta: omaRavintola.KuvaRavintolasta,
        })

  
    
        return(
            <div className="LuoRavintolaNakyma"> {/*luo laatikon, jonka sisään haluan tekstin*/}
            <h1>Luo ravintolasi </h1>

            <div>Ravintolan nimi <input type="text"/></div>  
            <div>Ravintolan hintataso <input type="text"/></div>
            <div>Ravintolan osoite <input type="text"/></div>
            <div>Aukioloajat <input type="text"/></div>
            <div>Kuva ravintolasta <input type="text"/></div>


            <button onClick={ () => LuoRavintolasi({ RavintolanNimi, Hintataso, RavintolanOsoite, Aukioloajat, KuvaRavintolasta }) }>Luo Ravintola</button>
            
    
            <h1 className="App"> moikka moi testing</h1> 

        </div>
        
       
        
    )
}
}
