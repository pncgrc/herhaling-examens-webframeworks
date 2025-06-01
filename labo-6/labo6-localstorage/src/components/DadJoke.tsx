import { useEffect, useState } from "react";

interface Joke {
    id: string;
    joke: string;
    status: number;
}

const DadJoke = () => {
    const [dadJoke, setDadJoke] = useState<string>("");
    const [favJoke, setFavJoke] = useState<string>(localStorage.getItem("favJoke") ?? ""); //De operator ?? staat toe een defaultwaarde te voorzien. Als de waarde langs de linkerkant null of undefined is, wordt de waarde langs de rechterkant gebruikt.

    const loadJoke = async () => {
        let response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        })
        let joke: Joke = await response.json();

        setDadJoke(joke.joke);
    }

    const saveFavJoke = () => {
        setFavJoke(dadJoke);
    }

    useEffect(() => {
        loadJoke();
    }, []);

    useEffect(() => {
        localStorage.setItem("favJoke", favJoke)
    }, [favJoke]); 
    
    return(
        <>
            <div>
                <p style={{ fontWeight: "bold" }}>Random joke:</p>
                <p>{dadJoke}</p>
                <button onClick={loadJoke}>New joke</button>
                <button onClick={saveFavJoke}>Set as favorite</button>
            </div>

            {
                favJoke &&
                <div>
                    <p style={{ fontWeight: "bold" }}>Favorite joke:</p>
                    <p>{favJoke}</p>
                </div>
            }
        </>
    );
}

export default DadJoke;