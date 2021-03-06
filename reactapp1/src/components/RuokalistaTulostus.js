import React from 'react'

export default function (props) {
    let nappi;
    if(props.onOmistaja === false){
      nappi=<button onClick={()=>props.lisaaOstoskoriin(props.RavintolanRuuat.Tuote, props.RavintolanRuuat.Kuvaus, props.RavintolanRuuat.Hinta, props.RavintolanRuuat.idRuoka, props.ValittuRavintola)}>Lisää ostoskoriin</button>
    }
    
      if(props.OnOstoskori === 1){
      nappi= <button onClick={()=>props.poistaOstoskorista(props.RavintolanRuuat)}>Poista Tuote</button> 
    }

  return (
    <div>
        <div className="RavintolaSivuIso">

            <img src={ props.RavintolanRuuat.Kuva } alt="Kuvan lataus epäonnistui" className="RavintolaSivu" />
            <div className="RavintolaSivu"> {props.RavintolanRuuat.Tuote}</div>
            <div className="RavintolaSivu">{props.RavintolanRuuat.Kuvaus}</div>
            <div className="RavintolaSivu">{props.RavintolanRuuat.Hinta}</div> 
            
            {nappi}
        </div>
    </div>
  )
}
