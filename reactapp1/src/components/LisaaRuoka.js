import React from 'react';
import {useState} from 'react';
import axios from 'axios';

export default function LisaaRuoka() {
    const [tuote, setTuote] = useState("");
    const [kuvaus, setKuvaus] = useState("");
    const [hinta, setHinta] = useState("");
    const [kategoria, setKategoria] = useState("");
    const [kuva, setKuva] = useState("");

    const lisaaRuoka = async(ruoka) => {
        await axios.post('http://localhost:3000/ruoka', {
          tuote: ruoka.tuote,
          kuvaus: ruoka.kuvaus,
          hinta: ruoka.hinta,
          tuotekategoria_idtuotekategoria: ruoka.kategoria
        })
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
                <input type="text" placeholder="Kuva" value={ kuva } onInput={e => setKuva(e.target.value)}/>
            </div>
            <button onClick={ () => lisaaRuoka({ tuote, kuvaus, hinta, kategoria }) }>Lisää</button>
        </div>
    )
}