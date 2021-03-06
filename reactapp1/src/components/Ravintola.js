import React from 'react'
import loading from '../loading.png'
import LisaaRuoka from './LisaaRuoka'
import {useEffect, useState} from 'react';
import axios from 'axios';
import Tuotekategoriat from './Tuotekategoriat'
import {Link } from 'react-router-dom'
import RuokalistaTulostus from './RuokalistaTulostus';
import TilausHistoria from './TilausHistoria'


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
var ValittuRavintola1 = 0;
 ValittuRavintola1 = props.ValittuRavintola

      useEffect(() => {                                                   //Hakee ravintolan datan idlla
        const haeRavintolanData = async (props) => {
        const results = await axios.get('http://localhost:3306/Ravintolat/'+ValittuRavintola1+'')
        props.setRavintolanData(results.data)
        }  
      haeRavintolanData(props);
      
    }, []);

      useEffect(() => {                                                   // tällä haetaan kaikki kategoriat ravintolasta idnumerolla
        const haeKategoriat = async (props) => {
        const results = await axios.get('http://localhost:3306/Tuotekategoria/'+ValittuRavintola1+'/')
        props.setTuotekategoriat(results.data)
      }
      haeKategoriat(props);
      
      }, [props.RavintolanRuuat]);

      useEffect(() => {                                                   // Ravintolan ruokien haku
        const haeRavintolanRuuat = async (props) => {
            const results = await axios.get('http://localhost:3306/ruoka/'+ValittuRavintola1+'')
            setRavintolanRuuat(results.data)
          }
        haeRavintolanRuuat(props);
      }, [props.idRavintola, props.RavintolanRuuat]);

       useEffect(() => {                                                   // Ravintolan tietyn kategorian ruokien haku
        const haeRavintolanRuuat = async (props) => {
        const results = await axios.get('http://localhost:3306/ruoka/'+ValittuRavintola1+'/'+ValittuKategoria+'')
        setRavintolanRuuat(results.data)
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
 
      const lisaaKategoria = async(ruoka) => {        //Lisää uuden tuotekategorian
        let kategoria = await axios.post('http://localhost:3306/tuotekategoria', {
          tuotekategoria: ruoka.kategoria,
          Ravintola_idRavintola: ValittuRavintola1
      })
        let idKategoria = kategoria.data.insertId;    //Uuden tuotekategorian id tallennetaan idKategoria muuttujaan
        lisaaRuoka(ruoka, idKategoria);               //ja välitetään lisaaRuoka-funktiolle
    }

      const onAddClick = (ruoka) => {                 //Kun LisääRuoka-komponentin lisää-nappia painetaan
        let kategoriat = props.Tuotekategoriat;
        let foundKategoriaIndex = kategoriat.map(o => o.Tuotekategoria.toLowerCase()).indexOf(ruoka.kategoria.toLowerCase());
        if(foundKategoriaIndex === -1){     //Jos kategorioista ei löytynyt annettua kategoriaa se lisätään tietokantaan
          lisaaKategoria(ruoka);
          }
        else{                               //Jos kategoria löytyi, se välitetään lisaaRuoka-funktiolle
          let idKategoria = kategoriat[foundKategoriaIndex].idTuotekategoria;
          lisaaRuoka(ruoka, idKategoria);
        }
      }

  const lisaaRuoka = async(ruoka, idKategoria) => {       //Lisää ruoan tietokantaan
    if(ruoka.kuva !== null){
      console.log(ruoka.kuva);
      
      var formData = new FormData();
      formData.append('tuote', ruoka.tuote);
      formData.append('kuvaus', ruoka.kuvaus);
      formData.append('hinta', ruoka.hinta);
      formData.append('tuotekategoria_idTuotekategoria', idKategoria);
      formData.append('image', ruoka.kuva);
      const config = {
        headers : { 'content-type': 'multipart/form-data' }
      }
      console.log(formData);
      await axios.post('/ruoka/kuva', formData, config);
    }else{
      await axios.post('http://localhost:3306/ruoka', {
      tuote: ruoka.tuote,
      kuvaus: ruoka.kuvaus,
      hinta: ruoka.hinta,
      tuotekategoria_idtuotekategoria: idKategoria
    })}
    props.setRavintolanRuuat ([...props.RavintolanRuuat, {    //Tämä päivittää näytölle kategoriat ja ruuat
      tuote: ruoka.tuote,
      kuvaus: ruoka.kuvaus,
      hinta: ruoka.hinta,
      tuotekategoria_idtuotekategoria: idKategoria}]);
    };

  let naytaLisaaRuoka;
  if(props.onOmistaja === true){
    naytaLisaaRuoka = <LisaaRuoka onAddClick={onAddClick} />
  }

  if(ValittuRavintola1 == props.LukittuRavintola || props.LukittuRavintola === 0 || props.LukittuRavintola == "" ){
   // console.log("valittu on sama kuin lukittu, osto mahdollista")

  } else{
   // console.log("ravintolat ei täsmää")
   // console.log("valitturavintola ", ValittuRavintola1)
   // console.log("props.lukitturavintola ", props.LukittuRavintola)
return(<div> Ostoskorissasi on toisen ravintolan tuotteita, sinun tulee poistaa ne ennenkuin voit lisätä tuotteita tasta ravintolasta</div>)  }

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
    <button onClick={()=>setValittuKategoria("")}>Nollaa kategoriat</button>
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
        <div>{RavintolanRuuat.map(r => <RuokalistaTulostus onOmistaja={props.onOmistaja} RavintolanRuuat={r} lisaaOstoskoriin ={props.lisaaOstoskoriin} ValittuRavintola={ValittuRavintola1}/>)} </div>

    {naytaLisaaRuoka}
    <Link to ='/TilausHistoria' ><div> Tilaushistoria</div></Link>
    
    </div>   
    </div> 
     
 
    

  )
}
/*

*/