import React from 'react'
import loading from '../loading.png'
import LisaaRuoka from './LisaaRuoka'
import {useEffect, useState} from 'react';
import axios from 'axios';
import Tuotekategoriat from './Tuotekategoriat'
import {Link } from 'react-router-dom'
import RuokalistaTulostus from './RuokalistaTulostus';


export default function Ravintola (props) {
  //console.log(props)
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

//var HaeKaikkiRuuat = 0;   // talla jos 0 niin hakee vain tietyt ruuat kategorian valinnalla, ja jos 1 niin hakee kaikki ravintolan ruuat
const  [ValittuKategoria, setValittuKategoria] = useState([]); /// tama pitaa viela muuttaa muuttumaan kun valitsee kategorian
const [RavintolanRuuat, setRavintolanRuuat] = useState([]);
var ValittuRavintola1 = props.ValittuRavintola

      useEffect(() => {                                                   //Hakee ravintolan datan
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
        console.log(ValittuKategoria)
      }
      haeKategoriat(props);
      
      }, []);

      useEffect(() => {                                                   // Ravintolan ruokien haku
        const haeRavintolanRuuat = async (props) => {
        const results = await axios.get('http://localhost:3000/ruoka/'+ValittuRavintola1+'')
        setRavintolanRuuat(results.data)
        } 
      haeRavintolanRuuat(props);
      
      }, [ValittuKategoria, props.idRavintola]);

      useEffect(() => {                                                   // Ravintolan tietyn kategorian ruokien haku
        const haeRavintolanRuuat = async (props) => {
        const results = await axios.get('http://localhost:3000/ruoka/'+ValittuRavintola1+'/'+ValittuKategoria+'')
        if(ValittuKategoria != 0){
        setRavintolanRuuat(results.data)
        }
        } 
      haeRavintolanRuuat(props);
      
      }, [ValittuKategoria]);
      
      
      if (props.RavintolanData[0] === undefined) {
      }else{
      var RavintolanNimi= props.RavintolanData[0].Nimi
      var RavintolanOsoite = props.RavintolanData[0].Osoite
      var RavintolanHintataso = props.RavintolanData[0].Hintataso
      var RavintolanTyyppi = props.RavintolanData[0].RavintolanTyyppi
      }
    
  let naytaLisaaRuoka;
  if(props.onOmistaja === true){
    naytaLisaaRuoka = <LisaaRuoka />
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
    <button onClick={()=>setValittuKategoria(0)}>Nollaa kategoriat</button>
     <div className="RavintolaSivuIso"> {props.Tuotekategoriat.map(r => <Tuotekategoriat setValittuKategoria={setValittuKategoria} Tuotekategoria={r.Tuotekategoria} idTuotekategoria={r.idTuotekategoria} />)}
     </div> 

   
     <div >
     <div className="RavintolaSivuIso"> 
        <div className="RavintolaSivu">Kuva</div>
        <div className="RavintolaSivu">Tuote</div>
        <div className="RavintolaSivu">Kuvaus</div>
        <div className="RavintolaSivu">Hinta</div>
        <div className="RavintolaSivu"> nappula</div>
        </div>
        <div>{RavintolanRuuat.map(r => <RuokalistaTulostus RavintolanRuuat={r} lisaaOstoskoriin ={props.lisaaOstoskoriin}/>)} </div>

    {naytaLisaaRuoka}
    
    </div>   
    </div> 
     
 
    

  )
}
/*

*/