import loading from './loading.png'
import './App.css';
import Etusivu from './components/Etusivu';
import Kirjauduttu from './components/Kirjauduttu'
import axios from 'axios';
import Loginsivu from './components/Loginsivu'
import LisaaRuoka from './components/LisaaRuoka'
import {Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState} from 'react';
import KirjauduUlos from './components/KirjauduUlos';
import Ravintola from './components/Ravintola'
import LuoRavintola from './components/LuoRavintola';


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
        

useEffect(() => {                                                //Tahan tulee haku databasesta axioksen avulla //tälä haetaan kaikki tuotteet 
  const getData = async () => { // tan voisi nimeta uudelleen
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



const KirjauduSisaanFunktio = (idKayttaja, Salasana) => {

   axios.post('http://localhost:3000/login/', {
    "idKayttaja": idKayttaja,
    "Salasana": Salasana
  }).then(response => {
    if (response.data == true){
      setKirjautunutKayttaja(idKayttaja);
      setOnOmistaja(false);
      setLoadingKirjaudu(false);
      
    } else if (response.data == "OnOmistaja"){
      setKirjautunutKayttaja(idKayttaja);
      setOnOmistaja(true);
      setLoadingKirjaudu(false);
    }
    else {
      console.log("yritappa uuelleen")
      setLoadingKirjaudu(false);
    }
    })
}

const ValitseRavintolaFuktio = (idRavintola) => {             //tama hakee yhden  ravintolan datan idlla
  setValittuRavintola(idRavintola);
  setLoadingRuoka(true);
  const haeRavintolanData = async () => {
  axios.get('http://localhost:3000/Ravintolat/'+idRavintola+'').then(response => {
      setRavintolanData(response.data);
      //setLoadingRuoka(false);
    })
  }
  const haeKategoriat = async () => {
    axios.get('http://localhost:3000/Tuotekategoria/'+ValittuRavintola+'/').then(response => {
      setTuotekategoriat(response.data);
      setLoadingRuoka(false);                //Tanne tehty wait funktio
      console.log(response.data)
    })
  }

  haeRavintolanData();
    haeKategoriat()
}


const luoKayttajafunktio = (Kayttajatunnus, Nimi, Osoite, PuhNro, Salasana2, OnOmistaja) => {

  axios.post('http://localhost:3000/kayttaja/', {
   "Kayttajatunnus": Kayttajatunnus,
   "Nimi": Nimi,
   "Osoite": Osoite,
   "PuhNro": PuhNro,
   "Salasana": Salasana2,
   "Onomistaja": OnOmistaja
 }).then(response => {
   if (response.data == true){
    console.log("käyttäjä lisätty")
     
   }
   else {
     console.log("yritappa uuelleen")
    
   }
   }
 )
 luoKayttajafunktio={luoKayttajafunktio}

}
  
  return (
    <BrowserRouter> 
    <div> 
      <div className='MenuPalkki'>
        <Link to='/'><div>Etusivulle</div></Link>
        <Link to ='Loginsivu'><div>Kirjaudu </div></Link>
        <Link to ='LisaaRuoka'><div>Lisää ruoka</div></Link>    {/* tässä vain testinä, siirrettävä omistajan ravintolanäkymään */}
        <Link to ='LuoRavintola'><div>Luo ravintola</div></Link>
      </div>
      <Routes>
        <Route path = "/" element= { <Etusivu ravintolat={ravintolat}  ValitseRavintolaFuktio={ValitseRavintolaFuktio}/> } />
        <Route path = "Loginsivu" element = { <Loginsivu KirjauduSisaanFunktio={KirjauduSisaanFunktio}/>}/>
        <Route path = "Kirjauduttu" element = { <Kirjauduttu KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja}/>}/>
        <Route path = "LisaaRuoka" element = { <LisaaRuoka /> } />
        <Route path = "KirjauduUlos" element = { <KirjauduUlos KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja} setOnOmistaja={setOnOmistaja} setKirjautunutKayttaja={setKirjautunutKayttaja}/>}/>
        <Route path = "Ravintola" element = { <Ravintola ValittuRavintola={ValittuRavintola} RavintolanData={RavintolanData} isLoadingRuoka={isLoadingRuoka} setLoadingRuoka={setLoadingRuoka} Tuotekategoriat={Tuotekategoriat} />}/>
        <Route path = "LuoRavintola" element = { <LuoRavintola /> } />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
