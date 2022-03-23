import loading from './loading.png'
import './App.css';
import Etusivu from './components/Etusivu';
import axios from 'axios';
import Loginsivu from './components/Loginsivu'

import {BrowserRouter, Routes, Route } from 'react-router-dom'


import { useEffect, useState} from 'react';


function App() {
const [ravintolat, setRavintolat] = useState([]);  
const [isLoadingRavintolat, setLoadingRavintolat] = useState([true]);
//const [loginMode, setLoginMode] = useState(false);        

useEffect(() => {                                                //Tahan tulee haku databasesta axioksen avulla //tälä haetaan kaikki tuotteet 
  const getData = async () => {
  /*const results = await */axios.get('http://localhost:3000/Ravintolat').then(response => {
    setRavintolat(response.data);
    setLoadingRavintolat(false);                //Tanne tehty wait funktio
  })
  //console.log(results);
  //setRavintolat(results.data)                 //tama vanhassa kaytossa
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

//let ser = 0;
//<button onClick={()=> setLoginMode(!loginMode)}>appjs kirjaudu</button>
//      {output} 
//tahan voisi tehda vaikka switch case rakennelman siita etta mita tuo output sisaltaa
// vaihtoehtona on se etta if lauseilla rakennetaan outputtiin aina tarvittava tieto
 
// let output = <Etusivu ravintolat={ravintolat} /> //nää liittyy outputtiin
//if (loginMode == true){
//  output = <Loginsivu />;
//}

  
  return (
    <BrowserRouter> 
    <div> 
      <Routes>
        <Route path = "/" element= { <Etusivu ravintolat={ravintolat}/> } />
        <Route path = "Loginsivu" element = { <Loginsivu/>}/>


      </Routes>



      
      

    </div>
    </BrowserRouter>
  );
}

export default App;
