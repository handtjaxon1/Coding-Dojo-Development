import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Display.css";

function Display(props) {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => setPokemonData(response.data.results))
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