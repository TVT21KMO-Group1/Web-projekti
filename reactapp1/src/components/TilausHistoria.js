import React from 'react'
import HistoriaTulostus from "./HistoriaTulostus";
import axios from 'axios';
import { useEffect, useState} from 'react';


export default function TilausHistoria(props) {

  const [tilausHistoria, setTilausHistoria] = useState([]);

  useEffect(() => {
    const haeHistoria = async () => {
    const results = await axios.get('http://localhost:3000/tilaushistoria/'+props.KirjautunutKayttajaID+'')
     //console.log(results.data);
    setTilausHistoria(results.data);
    //console.log(KirjautunutKayttajaID);
    }
    haeHistoria();
  }, []);

  return (
    <div>
      <div>
        <div> ID </div>
        <div> Päivämäärä </div>
        <div> Ravintola </div>
        <div> Tuote </div>
        <div> hinta </div>
      </div>  

        <div className="">  
         { tilausHistoria.map(p => <HistoriaTulostus idtilaus={p.idtilaus} aika={p.aika} nimi={p.nimi} tuote={p.tuote} summa={p.summa}/>) }  
      </div>
            
     
    </div>
  )
}
