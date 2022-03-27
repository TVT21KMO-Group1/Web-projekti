import React from 'react'
import loading from '../loading.png'
import LisaaRuoka from './LisaaRuoka'
import {useEffect, useState} from 'react';
import axios from 'axios';
import Tuotekategoriat from './Tuotekategoriat'
import {Link } from 'react-router-dom'


export default function Ravintola (props) {
  /*  if  (props.isLoadingRuoka){                //nayttaa lataa tekstin kun data ei ole saapunut, tahan viel'joku siisti pallura pyorimaan
        return <div className="App">            
        <header className="App-header">
          <img src={loading} className="App-logo" alt="loading" />
          <p className="App">
            odota ladataan ruokia
          </p>
        </header>
      </div>
      }*/
var ValittuRavintola1 = props.ValittuRavintola
      useEffect(() => {                                                   // testia ravintolangakuun
        const haeRavintolanData = async (props) => {
        const results = await axios.get('http://localhost:3000/Ravintolat/'+ValittuRavintola1+'')
        props.setRavintolanData(results.data)
        } 
      haeRavintolanData(props);
      
      }, []);

      useEffect(() => {                                                   // tällä haetaan kaikki kategoriat ravintolasta idnumerolla
        const haeKategoriat = async (props) => {
        const results = await axios.get('http://localhost:3000/Tuotekategoria/'+ValittuRavintola1+'/')
        props.setTuotekategoriat(results.data)
      }
      haeKategoriat(props);
      
      }, []);

      
      if (props.RavintolanData[0] === undefined) {
        
      }else{
      var RavintolanNimi= props.RavintolanData[0].Nimi
      var RavintolanOsoite = props.RavintolanData[0].Osoite
      var RavintolanHintataso = props.RavintolanData[0].Hintataso
      var RavintolanTyyppi = props.RavintolanData[0].RavintolanTyyppi
      }



  return (
    <div>
     <div className="RavintolaSivuIso">
        <div className="RavintolaSivu">
            <div>Ravintola numero {props.ValittuRavintola}</div>
            <div> ravintola nimi {RavintolanNimi}</div>
            <div>Ravintolan Osoite {RavintolanOsoite}  </div>    
            <div> Hintataso {RavintolanHintataso}</div>
            <div> Ravintolan tyyppi {RavintolanTyyppi} </div>
            
        </div>
        <div className="RavintolaSivu"> Ravintolan kuva tahan </div>
    </div>
    
    <Link to = '/Kirjauduttu'> <div className="RavintolaSivuIso"> {props.Tuotekategoriat.map(r => <Tuotekategoriat Tuotekategoria={r.Tuotekategoria} />)}
     </div></Link>{/*tassa viela linkki rikki, eli tahan pitaa keksia toimiva linkki jotta hakee databasesta ruuat oikein*/ }

   
        
    </div> 
     
 
    

  )
}
/*

*/