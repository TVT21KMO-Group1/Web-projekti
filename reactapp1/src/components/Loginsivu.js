import React from 'react'
import {useState} from 'react'

export default function LoginSivu() {

    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [address, setAddress] = useState("");

    const handleSaldoChange = (event) => {
        setLname(event.target.value);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    




  return (
    <div>
        <div>Kayttajatunnus <input type="text"  value={ name } onChange={ handleNameChange }/></div>  
        <div>Salasana <input type="text" value={ lname } onChange={ handleSaldoChange } /></div> 
        <button onClick >Kirjaudu sisaan</button> 

        
    </div>
  )
}
