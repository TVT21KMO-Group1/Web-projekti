import React from 'react'
import HistoriaTulostus from "./HistoriaTulostus";
import axios from 'axios';
import { useEffect, useState} from 'react';


export default function TilausHistoria(props) {

  const [tilausHistoria, setTilausHistoria] = useState([]);

  useEffect(() => {
    const haeHistoria = async () => {
    const results = await axios.get('/tilaushistoria/'+props.KirjautunutKayttajaID+'')
     //console.log(results.data);
    setTilausHistoria(results.data);
    //console.log(KirjautunutKayttajaID);
    }
    haeHistoria();
  }, []);

  return (
    <div>

      <h1 className='RiviValit3'> Ostoshistoria </h1>

      <div className='OtsikkoTilausHistoria'>
        <div className='RiviValit1'> ID </div>
        <div className='RiviValit2'> Päivämäärä </div>
        <div className='RiviValit3'> Rafla </div>
        <div className='RiviValit4'> Tuote </div>
        <div className='RiviValit5'> hinta </div>
      </div>  

        <div className="">  
         { tilausHistoria.map(p => <HistoriaTulostus idtilaus={p.idtilaus} aika={p.aika} nimi={p.nimi} tuote={p.tuote} summa={p.summa}/>) }  
      </div>
            
     
    </div>
  )
}
