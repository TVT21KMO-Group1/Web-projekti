import './App.css';
import Etusivu from './components/Etusivu';
import Kirjauduttu from './components/Kirjauduttu'
import axios from 'axios';
import Loginsivu from './components/Loginsivu'
import {Link } from 'react-router-dom'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState} from 'react';
import KirjauduUlos from './components/KirjauduUlos';
import Ravintola from './components/Ravintola'
import LuoRavintola from './components/LuoRavintola';
import Ostoskori from './components/Ostoskori'
import TilausHistoria from './components/TilausHistoria'
import RuokalistaTulostus  from './components/RuokalistaTulostus';


function App() {
const [KirjautunutKayttaja, setKirjautunutKayttaja] = useState([]);
const [KirjautunutKayttajaID, setKirjautunutKayttajaID] = useState([]);
const [onOmistaja, setOnOmistaja] = useState([false]);
const [isLoadingKirjaudu, setLoadingKirjaudu] = useState([false]);
const [isLoadingRuoka, setLoadingRuoka] = useState([false]);
const [ValittuRavintola, setValittuRavintola] = useState([]);
const [RavintolanData, setRavintolanData] = useState([]);
const [Tuotekategoriat, setTuotekategoriat] = useState([]);
const [RavintolanRuuat, setRavintolanRuuat] = useState([]);
const [tilausHistoria, setTilausHistoria] = useState([]);
        
const [ostosTaulu, setOstosTaulu] = useState([]);

useEffect(() => {
  const getData = async () => {
  const results = await axios.get('http://localhost:3000/tilaushistoria/'+KirjautunutKayttajaID+'')
    console.log(results.data);
  setTilausHistoria(results.data);
  }
  getData();
}, []);


const lisaaOstoskoriin = (Tuote, Kuvaus, Hinta, idRuoka) => {
    
  let newProducts = [...ostosTaulu, { 
    idRuokaOstoskori: ostosTaulu.length + 1,
    idRuoka: idRuoka,
    Tuote: Tuote,
    Kuvaus: Kuvaus,
    Hinta : Hinta
    }];
   setOstosTaulu(newProducts); 

}

const poistaOstoskorista = (item) => {
  let newProducts = [...ostosTaulu];
  let deletedItemIndex = newProducts.findIndex(p=> p.idRuokaOstoskori === item.idRuokaOstoskori);
  newProducts.splice(deletedItemIndex, 1);
  setOstosTaulu(newProducts);
  }

const ostaFunktio = async(kokonaishinta) => { 
  //kun ostoskorissa painetaan osta-nappulaa
  await axios.post('http://localhost:3000/tilaus', {
    "Summa": kokonaishinta,
    "idKayttaja": KirjautunutKayttajaID,      // Käyttäjän id pitäisi saada jostain
    "OstosTaulu" : ostosTaulu
  })
 // let idTilaus = results.data.insertId;
  //tuotteetTietokantaan(idTilaus);
}
/*
const tuotteetTietokantaan = async(idTilaus) => {
  for(let i = 0; i<ostosTaulu.length; i++){
  let idRuoka = ostosTaulu[i].idRuoka;        //pystyisköhän ruuat tallentamaan varchar:ina tietokantaan kaikki yhdelle riville?
  console.log(idRuoka);
  await axios.post('http://localhost:3000/tilatuttuotteet', {
    Tuotteet: idRuoka,
    Tilaus_idTilaus: idTilaus
  })}
}*/
const haeKirjautunutKayttaja = async(KayttajaTunnus) => {
   await axios.get('http://localhost:3000/Kayttaja/'+KayttajaTunnus+'').then(response => {
        setKirjautunutKayttajaID(response.data[0].idKayttaja);
      })
}


const KirjauduSisaanFunktio = (KayttajaTunnus, Salasana) => {

   axios.post('http://localhost:3000/login/', {
    "KayttajaTunnus": KayttajaTunnus,
    "Salasana": Salasana
  }).then(response => {
    if (response.data == true){
      setKirjautunutKayttaja(KayttajaTunnus);
      setOnOmistaja(false);
      setLoadingKirjaudu(false);
      haeKirjautunutKayttaja(KayttajaTunnus);

      
    } else if (response.data == "OnOmistaja"){
      setKirjautunutKayttaja(KayttajaTunnus);
      setOnOmistaja(true);
      setLoadingKirjaudu(false);
      haeKirjautunutKayttaja(KayttajaTunnus);

    }
    else {
      console.log("yritappa uuelleen")
      setLoadingKirjaudu(false);
      haeKirjautunutKayttaja(0); // tämän toiminta pitää tarkastaa toimnta

    }
    })
}


const ValitseRavintolaFunktio = (idRavintola) => {
setValittuRavintola(idRavintola);
}

const luoKayttajafunktio = ( Nimi, Osoite, PuhNro, Salasana2, OnOmistaja, KayttajaTunnus) => {

  axios.post('http://localhost:3000/kayttaja/', {
   
   "Nimi": Nimi,
   "Osoite": Osoite,
   "PuhNro": PuhNro,
   "Salasana": Salasana2,
   "OnOmistaja": OnOmistaja,
   "KayttajaTunnus": KayttajaTunnus
 }).then(response => {
    if (response.data === "1048")
     console.log("Osa tiedoista puuttuu")
    else{
      console.log("käyttäjä luotu")
    }
   }
 )
}
var NaytaLisaaRavintola             //Nailla riveilla muokataan palkin tulostus siten etta
var NaytaOstoskori                  //kayttaja nakee ostoskorin ja omistaja lisaa ravintolan
var NaytaTilausHistoria
var KirjauduUlos1
var KirjauduSisaan
if(KirjautunutKayttaja == ""){
  KirjauduSisaan = <div>Kirjaudu sisaan</div>

  }else {
    if(onOmistaja == true){
      NaytaLisaaRavintola = <div>Luo Ravintola</div>
      NaytaTilausHistoria = <div>tilaushistoria</div>
      KirjauduUlos1 = <div>Kirjaudu Ulos</div>
    }else{
    NaytaOstoskori = <div>ostoskori</div>
    NaytaTilausHistoria = <div>tilaushistoria</div>
    KirjauduUlos1 = <div>Kirjaudu Ulos</div>

  }}

  
  return (
    <BrowserRouter> 
    <div> 
      <div className='MenuPalkki'>
        <Link to='/'><div>Etusivulle</div></Link>
        <Link to ='Loginsivu'><div>{KirjauduSisaan} </div></Link>
        <Link to ='LuoRavintola'><div>Luo ravintola</div></Link>
        <Link to ='Ostoskori'><div>{NaytaOstoskori}</div></Link>
        <Link to ='LuoRavintola'><div>{NaytaLisaaRavintola}</div> </Link>
        <Link to ='TilausHistoria'><div>{NaytaTilausHistoria}</div></Link>
        <Link to ='KirjauduUlos'><div>{KirjauduUlos1}</div></Link>
      </div>
      <Routes>
        <Route path = "/" element= { <Etusivu onOmistaja={onOmistaja} KirjautunutKayttaja={KirjautunutKayttaja} setRavintolanData={setRavintolanData} ValitseRavintolaFunktio={ValitseRavintolaFunktio}/> } />
        <Route path = "Loginsivu" element = { <Loginsivu KirjauduSisaanFunktio={KirjauduSisaanFunktio} luoKayttajafunktio={luoKayttajafunktio}/>}/>
        <Route path = "Kirjauduttu" element = { <Kirjauduttu KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja}/>}/>
        <Route path = "KirjauduUlos" element = { <KirjauduUlos KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja} setOnOmistaja={setOnOmistaja} setKirjautunutKayttaja={setKirjautunutKayttaja}/>}/>
        <Route path = "Ravintola" element = { <Ravintola onOmistaja={onOmistaja} ValittuRavintola={ValittuRavintola} RavintolanData={RavintolanData} setRavintolanData={setRavintolanData} isLoadingRuoka={isLoadingRuoka} setLoadingRuoka={setLoadingRuoka} Tuotekategoriat={Tuotekategoriat} setTuotekategoriat={setTuotekategoriat} RavintolanRuuat={RavintolanRuuat} setRavintolanRuuat={setRavintolanRuuat} lisaaOstoskoriin={lisaaOstoskoriin}/>}/>
        <Route path = "LuoRavintola" element = { <LuoRavintola KirjautunutKayttajaID={KirjautunutKayttajaID} /> } />
        <Route path = "Ostoskori" element = { <Ostoskori KirjautunutKayttaja = {KirjautunutKayttaja} ostosTaulu = {ostosTaulu} poistaOstoskorista={poistaOstoskorista} ostaFunktio={ostaFunktio} /> } />
        <Route path = "TilausHistoria" element = { <TilausHistoria tilausHistoria = {tilausHistoria} KirjautunutKayttajaID={KirjautunutKayttajaID}/>} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
