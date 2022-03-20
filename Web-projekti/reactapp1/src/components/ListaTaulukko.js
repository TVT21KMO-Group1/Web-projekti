import React from 'react'

export default function ListaTaulukko(props) {
  return (
    <div className="Ravintolalista">
       
        <h1>{props.nimi}</h1>
        <h2> kuva</h2>
        <button> valitse tämä ravintola</button>
        

    </div>
  );
}
