import React, { useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            setCharacter(res.data.results);
        })
        .catch(err => console.log('These are not the droids you are searching for.', err));
    }, []);
    console.log(character);

    return (
        <div className="character">
                {character.map((character, i) => {
                    return(
                        <CharacterCard
                        key={i}
                        name={character.name}
                        species={character.species}
                        homeworld={character.homeworld}
                        height={character.height}
                        />
                    );
                })}
        </div>
    );
}
