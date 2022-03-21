import React from 'react'

const Hakukentta = () => (
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

);

export default Hakukentta;