import React from 'react'
import loading from '../loading.png'
import LisaaRuoka from './LisaaRuoka'
import {useEffect, useState} from 'react';
import axios from 'axios';
import Tuotekategoriat from './Tuotekategoriat'
import {Link } from 'react-router-dom'





export default function Ravintola (props) {
        
    if  (props.isLoadingRuoka){                //nayttaa lataa tekstin kun data ei ole saapunut, tahan viel'joku siisti pallura pyorimaan
        return <div className="App">            
        <header className="App-header">
          <img src={loading} className="App-logo" alt="loading" />
          <p className="App">
            odota ladataan ruokia
          </p>
        </header>
      </div>
      }


  return (
    <div>
     <div className="RavintolaSivuIso">
        <div className="RavintolaSivu">
            <div>Ravintola numero {props.ValittuRavintola}</div>
            <div> ravintola nimi {props.RavintolanData[0].Nimi}</div>
            <div>Ravintolan Osoite {props.RavintolanData[0].Osoite}  </div>    
            <div> Hintataso {props.RavintolanData[0].Hintataso}</div>
            <div> Ravintolan tyyppi {props.RavintolanData[0].RavintolanTyyppi} </div>
        </div>
        <div className="RavintolaSivu"> Ravintolan kuva tahan </div>
    </div>
    
    <Link to = '/Kirjauduttu'> <div className="RavintolaSivuIso"> {props.Tuotekategoriat.map(r => <Tuotekategoriat Tuotekategoria={r.Tuotekategoria} />)}
     </div></Link>{/*tassa viela linkki rikki, eli tahan pitaa keksia toimiva linkki jotta hakee databasesta ruuat oikein*/ }

   
        
    </div> 
     
 
    

  )
}
