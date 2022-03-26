import React from 'react'
import {Link } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';


export default function ListaTaulukko(props) {
  
  /*
  const [isLoadingRuoka, setLoadingRuoka] = useState([false]);
const [ValittuRavintola, setValittuRavintola] = useState([]);
const [RavintolanData, setRavintolanData] = useState([]);

  const ValitseRavintolaFuktio = (idRavintola) => {             //tama hakee yhden  ravintolan datan idlla
    setValittuRavintola(idRavintola);
    setLoadingRuoka(true);
    const getData = async () => {
    axios.get('http://localhost:3000/Ravintolat/'+idRavintola+'').then(response => {
        setRavintolanData(response.data);
        setLoadingRuoka(false);
      })
    }
    getData();
      
  }
  */

  return (
    
    <div className="Ravintolalista">
       
        <h1>{props.nimi}</h1>
        <h2> kuva</h2>

        <Link to={'/Ravintola'}>
          <button onClick = { () => props.ValitseRavintolaFuktio(props.idRavintola) } > valitse tämä ravintola</button>
        </Link>

    </div>
  );
}
