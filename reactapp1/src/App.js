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
const [LukittuRavintola, setLukittuRavintola] = useState([])
const [RavintolanData, setRavintolanData] = useState([]);
const [Tuotekategoriat, setTuotekategoriat] = useState([]);
const [RavintolanRuuat, setRavintolanRuuat] = useState([]);
const [tilausHistoria, setTilausHistoria] = useState([]);
        
const [ostosTaulu, setOstosTaulu] = useState([]);
const [kayttajaLuotuOutput, setKayttajaLuotuOutput] = useState([]);
const [TuotteetOstettu, setTuotteetOstettu] = useState([]);

//console.log("Kirjautunut käyttäjä = ",KirjautunutKayttaja)
//console.log("Kirjautunut käyttäjäID = ",KirjautunutKayttajaID)

const lisaaOstoskoriin = (Tuote, Kuvaus, Hinta, idRuoka, ValittuRavintola) => {
  setTuotteetOstettu("")
    
  let newProducts = [...ostosTaulu, { 
    idRuokaOstoskori: ostosTaulu.length + 1,
    idRuoka: idRuoka,
    Tuote: Tuote,
    Kuvaus: Kuvaus,
    Hinta : Hinta
    }];
   setOstosTaulu(newProducts); 
     setLukittuRavintola(ValittuRavintola);
}

const poistaOstoskorista = (item) => {
  setTuotteetOstettu("")
  let newProducts = [...ostosTaulu];
  let deletedItemIndex = newProducts.findIndex(p=> p.idRuokaOstoskori === item.idRuokaOstoskori);
  newProducts.splice(deletedItemIndex, 1);
  setOstosTaulu(newProducts);
    if (ostosTaulu.length === 1) {
      setLukittuRavintola(0);
     // console.log ("Lukitus  pois")
    }
  
  }

const ostaFunktio = async(kokonaishinta) => { 
  //kun ostoskorissa painetaan osta-nappulaa
  await axios.post('http://localhost:3306/tilaus', {
    "Summa": kokonaishinta,
    "idKayttaja": KirjautunutKayttajaID,
    "OstosTaulu" : ostosTaulu,
    "idRavintola": ValittuRavintola
  }).then(response => { 
    if(response.data.affectedRows > 0) {
      setTuotteetOstettu("Tuotteet ostettu!!")
      setOstosTaulu([]);
    }
  })
  
 // let idTilaus = results.data.insertId;
  //tuotteetTietokantaan(idTilaus);
}

const haeKirjautunutKayttaja = async(KayttajaTunnus) => {
   await axios.get('http://localhost:3306/Kayttaja/'+KayttajaTunnus+'').then(response => {
        setKirjautunutKayttajaID(response.data[0].idKayttaja);
      })
}


const KirjauduSisaanFunktio = (KayttajaTunnus, Salasana) => {
  setOstosTaulu([]);
   axios.post('http://localhost:3306/login/', {
    "KayttajaTunnus": KayttajaTunnus,
    "Salasana": Salasana
  }).then(response => {
    console.log(response.data)
    if (response.data == true){
      setKirjautunutKayttaja(KayttajaTunnus);
      setOnOmistaja(false);
      setLoadingKirjaudu(false);
      haeKirjautunutKayttaja(KayttajaTunnus);
      setLukittuRavintola(0);

      
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

console.log('appjss', ValittuRavintola)
const ValitseRavintolaFunktio = (idRavintola) => {
setValittuRavintola(idRavintola);
}

const luoKayttajafunktio = ( Nimi, Osoite, PuhNro, Salasana2, OnOmistaja, KayttajaTunnus) => {
  setKayttajaLuotuOutput("");
  axios.post('http://localhost:3306/kayttaja/', {
   
   "Nimi": Nimi,
   "Osoite": Osoite,
   "PuhNro": PuhNro,
   "Salasana": Salasana2,
   "OnOmistaja": OnOmistaja,
   "KayttajaTunnus": KayttajaTunnus
 }).then(response => {
  // console.log(response.data)
   if (response.data === 1048)
   {//console.log("Osa tiedoista puuttuu")   
}
     if (response.data === 1062)
     {setKayttajaLuotuOutput ("Käyttäjä on jo luotu, kokeile toista käyttäjätunnusta")
    //console.log(kayttajaLuotuOutput)
}
     else{
       setKayttajaLuotuOutput("Kayttajatunnus luotu onnistuneesti")

      //console.log("käyttäjä luotu")
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
      
      KirjauduUlos1 = <div>Kirjaudu Ulos</div>
    }else{
    NaytaLisaaRavintola = <div></div>
    NaytaOstoskori = <div>ostoskori</div>
    NaytaTilausHistoria = <div>tilaushistoria</div>
    KirjauduUlos1 = <div>Kirjaudu Ulos</div>

  }}

 //console.log("valittu ravintola app.js", ValittuRavintola)  
  return (
    <BrowserRouter> 
    <div> 
      <div className='MenuPalkki'>
        <Link to='/'><div>Etusivulle</div></Link>
        <Link to ='Loginsivu'><div>{KirjauduSisaan} </div></Link>

        <Link to ='Ostoskori'><div>{NaytaOstoskori}</div></Link>
        <Link to ='LuoRavintola'><div>{NaytaLisaaRavintola}</div> </Link>
        <Link to ='TilausHistoria'><div>{NaytaTilausHistoria}</div></Link>
        <Link to ='KirjauduUlos'><div>{KirjauduUlos1} </div></Link>
      </div>
      <Routes>
        <Route path = "/" element= { <Etusivu onOmistaja={onOmistaja} KirjautunutKayttaja={KirjautunutKayttaja} setRavintolanData={setRavintolanData} ValitseRavintolaFunktio={ValitseRavintolaFunktio} setTuotteetOstettu={setTuotteetOstettu} /> } />
        <Route path = "Loginsivu" element = { <Loginsivu KirjauduSisaanFunktio={KirjauduSisaanFunktio} luoKayttajafunktio={luoKayttajafunktio} kayttajaLuotuOutput={kayttajaLuotuOutput}/>}/>
        <Route path = "Kirjauduttu" element = { <Kirjauduttu KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja}/>}/>
        <Route path = "KirjauduUlos" element = { <KirjauduUlos KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja} setOnOmistaja={setOnOmistaja} setKirjautunutKayttaja={setKirjautunutKayttaja} setLukittuRavintola={setLukittuRavintola} setKirjautunutKayttajaID={setKirjautunutKayttajaID}/>}/>
        <Route path = "Ravintola" element = { <Ravintola onOmistaja={onOmistaja} ValittuRavintola={ValittuRavintola} RavintolanData={RavintolanData} setRavintolanData={setRavintolanData} isLoadingRuoka={isLoadingRuoka} setLoadingRuoka={setLoadingRuoka} Tuotekategoriat={Tuotekategoriat} setTuotekategoriat={setTuotekategoriat} RavintolanRuuat={RavintolanRuuat} setRavintolanRuuat={setRavintolanRuuat} lisaaOstoskoriin={lisaaOstoskoriin} LukittuRavintola={LukittuRavintola}/>}/>
        <Route path = "LuoRavintola" element = { <LuoRavintola KirjautunutKayttajaID={KirjautunutKayttajaID} /> } />
        <Route path = "Ostoskori" element = { <Ostoskori KirjautunutKayttaja = {KirjautunutKayttaja} ostosTaulu = {ostosTaulu} poistaOstoskorista={poistaOstoskorista} ostaFunktio={ostaFunktio} TuotteetOstettu={TuotteetOstettu}/> } />
        <Route path = "TilausHistoria" element = { <TilausHistoria tilausHistoria = {tilausHistoria} KirjautunutKayttajaID={KirjautunutKayttajaID} onOmistaja={onOmistaja} ValittuRavintola={ValittuRavintola}/>} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
