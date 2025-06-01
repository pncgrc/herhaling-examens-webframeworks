import { useEffect, useState } from "react";

interface Pokemon {
    name: string;
}

const Pokedex = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [searchField, setSearchField] = useState<string>("");
    const [limit, setLimit] = useState<number>(151);
    const [limitInput, setLimitInput] = useState<number>(5);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            .then(resp => resp.json())
            .then(data => setPokemon(data.results))
    }, [limit]);

    return(
        <>
            <input type="text" value={searchField} onChange={(event) => setSearchField(event.target.value)}/> <br />
            <input type="number" max={151} min={5} value={limitInput} onChange={(event) => setLimitInput(Number(event.target.value))} /><button onClick={() => setLimit(limitInput)}>Set Limit</button>
            {
                pokemon ?
                pokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchField.toLowerCase())).map(pokemon => (<p>{pokemon.name}</p>)) :
                <p>Loading ...</p>
            }
            
        </>
    );
}

export default Pokedex;