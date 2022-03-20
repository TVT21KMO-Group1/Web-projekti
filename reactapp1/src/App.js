import logo from './logo.svg';
import './App.css';
import Etusivu from './components/Etusivu';

import { useEffect, useState} from 'react';


function App() {


const ravintolat = [

  {
    idRavintola: 1,
    Nimi:"kyna",
    Osoite: "asdf",
    Aukeamisaika: 100,
    Sulkemisaika: 100,
    RavintolanTyyppi: "roska",
    Hintataso: "$$$$$"
  },
  {
    idRavintola: 2,
    Nimi:"tee",
    Osoite: "aaaa",
    Aukeamisaika: 100,
    Sulkemisaika: 100,
    RavintolanTyyppi: "roska",
    Hintataso: "$$$$$"
  },
  {
    idRavintola: 3,
    Nimi:"kyna",
    Osoite: "asdf",
    Aukeamisaika: 100,
    Sulkemisaika: 100,
    RavintolanTyyppi: "roska",
    Hintataso: "$$$$$"
  },
  {
    idRavintola: 4,
    Nimi:"kyna",
    Osoite: "asdf",
    Aukeamisaika: 100,
    Sulkemisaika: 100,
    RavintolanTyyppi: "roska",
    Hintataso: "$$$$$"
  },
  {
    idRavintola: 5,
    Nimi:"kyna",
    Osoite: "asdf",
    Aukeamisaika: 100,
    Sulkemisaika: 100,
    RavintolanTyyppi: "roska",
    Hintataso: "$$$$$"
  }
  
  ];

  let output = <Etusivu ravintolat={ravintolat} /> //nää liittyy outputtiin
  
  return (
    <div> 

      {output}
      

    </div>
  );
}

export default App;
