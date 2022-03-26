import React from 'react'
import loading from '../loading.png'
import Ruokalista from './Ruokalista'

export default function Ravintola (props) {
    
     if  (props.isLoadingRuoka){                //nayttaa lataa tekstin kun data ei ole saapunut, tahan viel'joku siisti pallura pyorimaan
        return <div className="App">            
        <header className="App-header">
          <img src={loading} className="App-logo" alt="loading" />
          <p className="App">
            odota ladataan ruokia
          </p>
        </header>
      </div>
      }

/*


       /// tassaa  ajatuksena kayttaa tata samaa hakukentta pohjaa siihen etta tuotekategoria napeista painamalla haetaan vain tuotteet siina kategoriassa
      const { search } = window.location;                     //hakukenttaan liittyvia
      const query = new URLSearchParams(search).get('s');
      const [searchQuery, setSearchQuery] = useState(query || '');    
      
      const filterProducts = (products2, query) => {                      //filterproducts hakukenttää varten
        if (!query) {                                                     //tulostaa filterproductsin mutta jos haku tyhjä, sisältää kaikki tuotteet
            return products2;
        }
        return products2.filter((product) => {
          console.log(product);
            const productName = product.Tuotekategoria.toLowerCase(); //Tama pitaa viela selvittaa koska ruoka taulukossa ei ole kategoriaa suoraan
            return productName.includes(query);                 //taytyy varmaaan tehda rajajapinta joka hakee ravintolaidlla ja tuotekategorialla
        });
      };
      const filteredProducts = filterProducts(props.ravintolat, searchQuery);

*/

  return (
    <div>
     <div className="RavintolaSivuIso">
        <div className="RavintolaSivu">
            <div>Ravintola numero {props.ValittuRavintola}</div>
            <div> ravintola nimi {props.RavintolanData[0].Nimi}</div>
            <div>Ravintolan Osoite {props.RavintolanData[0].Osoite}  </div>    
            <div> Hintataso {props.RavintolanData[0].Hintataso}</div>
            <div> Ravintolan tyyppi {props.RavintolanData[0].RavintolanTyyppi} </div>
        </div>
        <div className="RavintolaSivu"> Ravintolan kuva tahan </div>
    
   
    </div>   
    Ruokalista
  
    </div>

  )
}
