import React from "react";

// listan tulostus

export default function HistoriaTulostus(props){
  return (
      <div className='Paalista'>
        <div className="ListaVierekkain"> { props.idtilaus }  </div>
        <div className="ListaVierekkain"> { props.aika }  </div>
        <div className="ListaVierekkain"> { props.nimi }  </div>
        <div className="ListaVierekkain"> { props.tuote }  </div>
        <div className="ListaVierekkain"> { props.summa }  </div>
      </div>
  );
}