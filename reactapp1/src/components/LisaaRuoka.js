import React from 'react';
import {useState} from 'react';

export default function LisaaRuoka(props) {
    const [tuote, setTuote] = useState("");
    const [kuvaus, setKuvaus] = useState("");
    const [hinta, setHinta] = useState("");
    const [kategoria, setKategoria] = useState("");
    const [kuva, setKuva] = useState(null);

    const onPictureChange = e => {
        setKuva(e.target.files[0]);
    }

    return(
        <div className="flex">
            <div className="flex column">Uusi tuote
                <input type="text" placeholder="Tuote" value={ tuote } onInput={e => setTuote(e.target.value)} />
            </div>
            <div className="flex column">Kuvaus
                <input type="text" placeholder="Kuvaus" value={ kuvaus } onInput={e => setKuvaus(e.target.value)}/>
            </div>
            <div className="flex column">Hinta
                <input type="number" placeholder="Hinta" value={ hinta } onInput={e => setHinta(e.target.value)}/>
            </div>
            <div className="flex column">Kategoria
                <input type="text" placeholder="Kategoria" value={ kategoria } onInput={e => setKategoria(e.target.value)}/>
            </div>
            <div className="flex column">Kuva
                <input type="file" onChange={ onPictureChange }/>
            </div>
            <button onClick={ () => props.onAddClick({ tuote, kuvaus, hinta, kategoria, kuva }) }>Lisää ruoka</button>
        </div>
    )
}