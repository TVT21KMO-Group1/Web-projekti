import React from 'react'
import ListaTaulukko from './ListaTaulukko'
import Hakukentta from './Hakukentta'
import {useState, useEffect} from 'react'
import Loginsivu from './Loginsivu'
import {Link } from 'react-router-dom'
import axios from 'axios';
import loading from '../loading.png'

export default function Etusivu(props) {
  const { search } = window.location;                     //hakukenttaan liittyvia
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const [ravintolat, setRavintolat] = useState([]);  
  const [isLoadingRavintolat, setLoadingRavintolat] = useState([true]);
  const KirjautunutKayttaja = props.KirjautunutKayttaja;

const filterProducts = (products2, query) => {                      //filterproducts hakukenttää varten
  if (!query) {                                                     //tulostaa filterproductsin mutta jos haku tyhjä, sisältää kaikki tuotteet
      return products2;
  }
  return products2.filter((product) => {
      const productName = product.Nimi.toLowerCase();
      return productName.includes(query);
  });
};

const filteredProducts = filterProducts(ravintolat, searchQuery);
var ValittuRavintola2 = props.valittuRavintola;

useEffect(() => {
  if(props.onOmistaja === true){
    const getData =  async () => { // tan voisi nimeta uudelleen
      axios.get('http://localhost:3000/Ravintolat/owner/'+KirjautunutKayttaja+'/').then(response => {
        console.log(response.data);
        setRavintolat(response.data);
        setLoadingRavintolat(false);                //Tanne tehty wait funktio
      })
    }
    getData();
  }
  else{
    const getData =  async () => { // tan voisi nimeta uudelleen
      axios.get('http://localhost:3000/Ravintolat').then(response => {
        setRavintolat(response.data);
        setLoadingRavintolat(false);                //Tanne tehty wait funktio
      })
    }
    getData();
  }                                                //Tahan tulee haku databasesta axioksen avulla //tälä haetaan kaikki tuotteet 

}, []);
 
                                          // taman voisi siirtaa omaan komponenttiin
if  (isLoadingRavintolat){                //nayttaa lataa tekstin kun data ei ole saapunut, tahan viel'joku siisti pallura pyorimaan
  return <div className="App">
  <header className="App-header">
    <img src={loading} className="App-logo" alt="loading" />
    <p className="App">
      odota ladataan
    </p>
  </header>
</div>
}
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
