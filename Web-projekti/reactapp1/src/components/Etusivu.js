import React from 'react'
import ListaTaulukko from './ListaTaulukko'
import Hakukentta from './Hakukentta'



export default function Etusivu(props) {
  const { search } = window.location;
const query = new URLSearchParams(search).get('s');
console.log(props.ravintolat);
//const [products2, setProducts] = useState([...products])

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

const filteredProducts = filterProducts(props.ravintolat, query);      //tämän pitää olla tässä jostainsyystä, ei jaksanu debuggailla



/*
const SearchBar = () => (
 <form>
      <label htmlFor="header-search">
          <span className="visually-hidden">Etsi tuotteista</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Tuotteen nimi"
          name="s" 
      />
      <button type="submit" >Search</button>
      </form>
);*/


  return (
     
    <div>
         
        <button> kirjaudunappu</button>
        <div></div>
    <Hakukentta/>
    <div className="Etusivu"> 
    

            {filteredProducts.map(r => <ListaTaulukko nimi={r.Nimi}/>)}
            
        </div>



    </div>
  )
}
