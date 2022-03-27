import React from 'react'
import ListaTaulukko from './ListaTaulukko'
import Hakukentta from './Hakukentta'
import {useState, useEffect} from 'react'
import Loginsivu from './Loginsivu'
import {Link } from 'react-router-dom'
import axios from 'axios';



export default function Etusivu(props) {
  const { search } = window.location;                     //hakukenttaan liittyvia
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || ''); 

const filterProducts = (products2, query) => {                      //filterproducts hakukenttää varten
  if (!query) {                                                     //tulostaa filterproductsin mutta jos haku tyhjä, sisältää kaikki tuotteet
      return products2;
  }
  return products2.filter((product) => {
      const productName = product.Nimi.toLowerCase();
      return productName.includes(query);
  });
};

const filteredProducts = filterProducts(props.ravintolat, searchQuery);
var ValittuRavintola2 = props.valittuRavintola;
/*
useEffect(() => {                                                   // testia ravintolangakuun
  const haeRavintolanData = async (props) => {
  const results = await axios.get('http://localhost:3000/Ravintolat/'+ValittuRavintola2+'')
  props.setRavintolanData(results.data)

  //console.log(results.data)
  } 
haeRavintolanData(props);

}, []);
*/
  return (
    <div>    
          
      <Hakukentta 
              searchQuery={searchQuery}                
              setSearchQuery={setSearchQuery}
      />
      <div className="Etusivu"> 
          {filteredProducts.map(r => <ListaTaulukko ValitseRavintolaFunktio={props.ValitseRavintolaFunktio} nimi={r.Nimi} idRavintola={r.idRavintola} />)}
      </div>
    </div>
  )


}
