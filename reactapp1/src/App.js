import loading from './loading.png'
import './App.css';
import Etusivu from './components/Etusivu';
import axios from 'axios';
import Loginsivu from './components/Loginsivu'
import {Link } from 'react-router-dom'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState} from 'react';


function App() {
const [ravintolat, setRavintolat] = useState([]);  
const [isLoadingRavintolat, setLoadingRavintolat] = useState([true]);
const [KirjautunutKayttaja, setKirjautunutKayttaja] = useState([]);
const [onRavintoloitsija, setOnRavintoloitsija] = useState([false]);
        

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
      </div>
      <Routes>
        <Route path = "/" element= { <Etusivu ravintolat={ravintolat}/> } />
        <Route path = "Loginsivu" element = { <Loginsivu KirjauduSisaanFunktio={KirjauduSisaanFunktio}/>}/>


      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
