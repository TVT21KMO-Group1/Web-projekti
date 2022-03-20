import logo from './logo.svg';
import './App.css';
import Etusivu from './components/Etusivu';
import axios from 'axios';

import { useEffect, useState} from 'react';


function App() {


//const ravintolat = [];
const [ravintolat, setRavintolat] = useState([])          

useEffect(() => {                                                //Tahan tulee haku databasesta axioksen avulla //tälä haetaan kaikki tuotteet 
  const getData = async () => {
  const results = await axios.get('http://localhost:3000/Ravintolat')
  console.log(results);
  setRavintolat(results.data)
}
getData();

}, []);
  

  let output = <Etusivu ravintolat={ravintolat} /> //nää liittyy outputtiin
  
  return (
    <div> 

      {output}
      

    </div>
  );
}

export default App;
