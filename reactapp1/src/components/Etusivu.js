import React from 'react'
import ListaTaulukko from './ListaTaulukko'
import Hakukentta from './Hakukentta'
import {useState} from 'react'
import Loginsivu from './Loginsivu'
import {Link } from 'react-router-dom'



export default function Etusivu(props) {

const { search } = window.location;                     //hakukenttaan liittyvia
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || ''); 

//const [loginMode, setLoginMode] = useState(false);


const filterProducts = (products2, query) => {                      //filterproducts hakukenttää varten
  console.log(products2)
  if (!query) {                                                     //tulostaa filterproductsin mutta jos haku tyhjä, sisältää kaikki tuotteet
      return products2;
  }
  return products2.filter((product) => {
    console.log(product);
      const productName = product.Nimi.toLowerCase();
      return productName.includes(query);
  });
};
const filteredProducts = filterProducts(props.ravintolat, searchQuery);

  return (
    <div>    
          
      <Hakukentta 
              searchQuery={searchQuery}                
              setSearchQuery={setSearchQuery}
      />
      <div className="Etusivu"> 
            {filteredProducts.map(r => <ListaTaulukko nimi={r.Nimi}/>)}
      </div>
    </div>
  )


}
