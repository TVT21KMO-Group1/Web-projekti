import React from 'react'
import RuokalistaTulostus  from './RuokalistaTulostus';
import { useState } from 'react';

export default function Ostoskori(props) {

  const [Nimi, setNimi] = useState("");
  const [Osoite, setOsoite] = useState("");
  const [Postinumro, setPostinumero] = useState("");
  const [Postitoimipaikka, setPostitoimipaikka] = useState("");

  const handleNimiChange = (event) => {
    setNimi(event.target.value);
  }
  const handleOsoiteChange = (event) => {
      setOsoite(event.target.value);
  }
  const handlePostinumeroChange = (event) => {
      setPostinumero(event.target.value);
  }
  const handlePostitoimipaikkaChange = (event) => {
    setPostitoimipaikka(event.target.value);
  }

  const [RavintolanRuuat, setRavintolanRuuat] = useState([]);
  const OnOstoskori = 1;
  let kokonaishinta = 0;
  for (let i = 0; i < props.ostosTaulu.length; i++) {
    kokonaishinta += props.ostosTaulu[i].Hinta;
  }
/*
  const ostaNyt = async() => { //tama kaipaa veila vahan ajatusta, saattaa olla etta vaatii mqsql proseduurin
    
      await axios.post('http://localhost:3000/ruoka', {
        tuote: ruoka.tuote,
        kuvaus: ruoka.kuvaus,
        hinta: ruoka.hinta,
        tuotekategoria_idtuotekategoria: idKategoria
      })
    

  }
*/
  return (

    <div className="Ostoskori"> Ostoskori

    {props.ostosTaulu.map(r => <RuokalistaTulostus RavintolanRuuat={r} OnOstoskori={OnOstoskori} poistaOstoskorista={props.poistaOstoskorista}/>)} 
    <div>Kokonaishinta {kokonaishinta}€ </div>
    <div>---------------------</div>


          <div> Anna toimitusosoite </div>

          <div> Nimi </div> 
          <div> <input type="text" value={Nimi} onChange={handleNimiChange} /></div> 

          <div> Osoite </div> 
          <div> <input type="text" value={Osoite} onChange={handleOsoiteChange} /></div>  

          <div>Postinumero </div> 
          <div> <input type="text" value={Postinumro} onChange={handlePostinumeroChange}/></div> 

          <div> Postitoimipaikka </div> 
          <div> <input type="text" value={Postitoimipaikka} onChange={handlePostitoimipaikkaChange}/></div> 
    
          <button onClick={ () => props.ostaFunktio(kokonaishinta) }> Osta </button>
        

    </div>
  )
}
