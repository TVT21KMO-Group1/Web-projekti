import loading from './loading.png'
import './App.css';
import Etusivu from './components/Etusivu';
import Kirjauduttu from './components/Kirjauduttu'
import axios from 'axios';
import Loginsivu from './components/Loginsivu'
import Ruokalista from './components/Ruokalista'
import {Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState} from 'react';



function App() {
const [ravintolat, setRavintolat] = useState([]);  
const [isLoadingRavintolat, setLoadingRavintolat] = useState([true]);
const [KirjautunutKayttaja, setKirjautunutKayttaja] = useState([]);
const [onOmistaja, setOnOmistaja] = useState([false]);
const [isLoadingKirjaudu, setLoadingKirjaudu] = useState([false]);

        

useEffect(() => {                                                //Tahan tulee haku databasesta axioksen avulla //tälä haetaan kaikki tuotteet 
  const getData = async () => {
  axios.get('http://localhost:3000/Ravintolat').then(response => {
    setRavintolat(response.data);
    setLoadingRavintolat(false);                //Tanne tehty wait funktio
  })
}
getData();

}, []);
  
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
    }
  )
  

}

const luoKayttajafunktio = (Kayttajatunnus, Nimi, Osoite, PuhNro, Salasana, OnOmistaja) => {

  axios.post('http://localhost:3000/kayttaja/', {
   "Kayttajatunnus": Kayttajatunnus,
   "Nimi": Nimi,
   "Osoite": Osoite,
   "PuhNro": PuhNro,
   "Salasana": Salasana,
   "Onomistaja": OnOmistaja
 }).then(response => {
   if (response.data == true){
     
     
   }
   else {
     console.log("yritappa uuelleen")
    
   }
   }
 )
 

}
  
  return (
    <BrowserRouter> 
    <div> 
      <div className='MenuPalkki'>
        <Link to='/'><div>Etusivulle</div></Link>
        <Link to ='Loginsivu'><div>Kirjaudu </div></Link>
        <Link to ='Ruokalista'><div>Ruokalista</div></Link>
      </div>
      <Routes>
        <Route path = "/" element= { <Etusivu ravintolat={ravintolat}/> } />
        <Route path = "Loginsivu" element = { <Loginsivu KirjauduSisaanFunktio={KirjauduSisaanFunktio}/>}/>
        <Route path = "Kirjauduttu" element = { <Kirjauduttu KirjautunutKayttaja={KirjautunutKayttaja} onOmistaja={onOmistaja}/>}/>
        <Route path = "Ruokalista" element = { <Ruokalista /> } />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
