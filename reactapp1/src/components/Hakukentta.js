import React from 'react'

const Hakukentta = ({ searchQuery, setSearchQuery }) => (
    <> {/*tama lisatty jotta hakukentta ei lataa sivua uudelleen, ei toimi*/}
   <form>
        <label htmlFor="header-search">
            <span className="visually-hidden">Etsi ravinteli  </span>
        </label>
        <input
            value={searchQuery}            
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Tuotteen nimi"
            name="s" 
        />
      {/*  <button type="submit" >Search</button> */}
        </form>
</>
);

export default Hakukentta;