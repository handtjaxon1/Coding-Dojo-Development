import React, { useState, useEffect } from "react";

function Display(props) {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => response.json())
            .then((response) => setPokemonData(response.results))
            .catch((err) => console.log(err))
    }, []);

    return (
        <ul className="list">
            {pokemonData.length > 0 && pokemonData.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
            ))}
        </ul>
    );
}

export default Display;