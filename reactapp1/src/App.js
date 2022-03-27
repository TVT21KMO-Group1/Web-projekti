import loading from './loading.png'
import './App.css';
import Etusivu from './components/Etusivu';
import Kirjauduttu from './components/Kirjauduttu'
import axios from 'axios';
import Loginsivu from './components/Loginsivu'
import LisaaRuoka from './components/LisaaRuoka'
import {Link } from 'react-router-dom'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState} from 'react';
import KirjauduUlos from './components/KirjauduUlos';
import Ravintola from './components/Ravintola'
import LuoRavintola from './components/LuoRavintola';
import Ostoskori from './components/Ostoskori'
import TilausHistoria from './components/TilausHistoria'


function App() {
const [ravintolat, setRavintolat] = useState([]);  
const [isLoadingRavintolat, setLoadingRavintolat] = useState([true]);
const [KirjautunutKayttaja, setKirjautunutKayttaja] = useState([]);
const [onOmistaja, setOnOmistaja] = useState([false]);
const [isLoadingKirjaudu, setLoadingKirjaudu] = useState([false]);
const [isLoadingRuoka, setLoadingRuoka] = useState([false]);
const [ValittuRavintola, setValittuRavintola] = useState([]);
const [RavintolanData, setRavintolanData] = useState([]);
const [Tuotekategoriat, setTuotekategoriat] = useState([]);
const [RavintolanRuuat, setRavintolanRuuat] = useState([]);
        

useEffect(() => {                                                //Tahan tulee haku databasesta axioksen avulla //tälä haetaan kaikki tuotteet 
  const getData =  async () => { // tan voisi nimeta uudelleen
  axios.get('http://localhost:3000/Ravintolat').then(response => {
    setRavintolat(response.data);
    setLoadingRavintolat(false);                //Tanne tehty wait funktio
  })
}
getData();

}, []);
 
                                          // taman voisi siirtaa omaan komponenttiin
if  (isLoadingRavintolat){                //nayttaa lataa tekstin kun data ei ole saapunut, tahan viel'joku siisti pallura pyorimaan
  return <div className="App">
  <header className="App-header">
    <img src={loading} className="App-logo" alt="loading" />
    <p className="App">
      odota ladataan
    </p>
  </header>
</div>
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
      
    } else if (response.data == "OnOmistaja"){
      setKirjautunutKayttaja(KayttajaTunnus);
      setOnOmistaja(true);
      setLoadingKirjaudu(false);
    }
    else {
      console.log("yritappa uuelleen")
      setLoadingKirjaudu(false);
    }
    })
}

const ValitseRavintolaFunktio = (idRavintola) => {
setValittuRavintola(idRavintola);
}
/*
const ValitseRavintolaFuktio = (idRavintola) => {
  setValittuRavintola(idRavintola);
useEffect(() => {                                                   // testia ravintolangakuun
  const haeRavintolanData = async () => {
  const results = await axios.get('http://localhost:3000/Ravintolat/'+idRavintola+'')
  setRavintolanData(results.data)
  console.log(results.data)
  } 
haeRavintolanData();

}, []);

useEffect(() => {                                                   // tällä haetaan kaikki kategoriat ravintolasta idnumerolla
  const haeKategoriat = async () => {
  const results = await axios.get('http://localhost:3000/Tuotekategoria/'+ValittuRavintola+'/')
  setTuotekategoriat(results.data)
}
haeKategoriat();

}, []);
}
*/
 /* tasta alkaa vanha yritys, ylla  uudempi
const ValitseRavintolaFuktio = (idRavintola) => {             //tama hakee yhden  ravintolan datan idlla
  setValittuRavintola(idRavintola);
  setLoadingRuoka(true);
  const haeRavintolanData = async () => {
  await axios.get('http://localhost:3000/Ravintolat/'+idRavintola+'').then(response => {
      setRavintolanData(response.data);
      //setLoadingRuoka(false);
    })
  }
   haeRavintolanData();

  const haeKategoriat = async () => {
    await axios.get('http://localhost:3000/Tuotekategoria/'+ValittuRavintola+'/').then(response => {
      setTuotekategoriat(response.data);
      setLoadingRuoka(false);                //Tanne tehty wait funktio
      console.log(response.data)  
    })
  }

    haeKategoriat()
}
*/

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
if(KirjautunutKayttaja == ""){
  }else {
    if(onOmistaja == true){
    }else{
    NaytaOstoskori = <div>ostoskori</div>
    NaytaTilausHistoria = <div>tilaushistoria</div>

  }}
if(onOmistaja == true){
  NaytaLisaaRavintola = <div>Luo Ravintola</div>
  NaytaTilausHistoria = <div>tilaushistoria</div>
}  
  
  return (
    <BrowserRouter> 
    <div> 
      <div className='MenuPalkki'>
        <Link to='/'><div>Etusivulle</div></Link>
        <Link to ='Loginsivu'><div>Kirjaudu </div></Link>
        <Link to ='LisaaRuoka'><div>Lisää ruoka</div></Link>    {/* tässä vain testinä, siirrettävä omistajan ravintolanäkymään */}
        <Link to ='LuoRavintola'><div>Luo ravintola</div></Link>
        <Link to ='Ostoskori'><div>{NaytaOstoskori}</div></Link>
        <Link to ='LuoRavintola'><div>{NaytaLisaaRavintola}</div> </Link>
        <Link to ='TilausHistoria'><div>{NaytaTilausHistoria}</div></Link>
      </div>
      <Routes>
        <Route path = "/" element= { <Etusivu ravintolat={ravintolat} setRavintolanData={setRavintolanData} ValitseRavintolaFunktio={ValitseRavintolaFunktio}/> } />
        <Route path = "Loginsivu" element = { <Loginsivu KirjauduSisaanFunktio={KirjauduSisaanFunktio} luoKayttajafunktio={luoKayttajafunktio}/>}/>
        <Route path = "Kirjauduttu" element = { <Kirjauduttu KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja}/>}/>
        <Route path = "LisaaRuoka" element = { <LisaaRuoka /> } />
        <Route path = "KirjauduUlos" element = { <KirjauduUlos KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja} setOnOmistaja={setOnOmistaja} setKirjautunutKayttaja={setKirjautunutKayttaja}/>}/>
        <Route path = "Ravintola" element = { <Ravintola ValittuRavintola={ValittuRavintola} RavintolanData={RavintolanData} setRavintolanData={setRavintolanData} isLoadingRuoka={isLoadingRuoka} setLoadingRuoka={setLoadingRuoka} Tuotekategoriat={Tuotekategoriat} setTuotekategoriat={setTuotekategoriat} RavintolanRuuat={RavintolanRuuat} setRavintolanRuuat={setRavintolanRuuat}/>}/>
        <Route path = "LuoRavintola" element = { <LuoRavintola /> } />
        <Route path = "Ostoskori" element = { <Ostoskori KirjautunutKayttaja = {KirjautunutKayttaja}/> } />
        <Route path = "TilausHistoria" element = { <TilausHistoria/>} />
      
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
