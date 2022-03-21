import loading from './loading.png'
import './App.css';
import Etusivu from './components/Etusivu';
import axios from 'axios';

import { useEffect, useState} from 'react';


function App() {


//const ravintolat = [];
const [ravintolat, setRavintolat] = useState([])  
const [isLoadingRavintolat, setLoadingRavintolat] = useState([true])        

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
  let output = <Etusivu ravintolat={ravintolat} /> //nää liittyy outputtiin
  
  return (
    <div> 

      {output}
      

    </div>
  );
}

export default App;
