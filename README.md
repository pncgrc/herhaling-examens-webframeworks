# herhaling-examens-webframeworks

## Array functies voorbeelden

&nbsp;
### filteren bij input verandering
```
pokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchField.toLowerCase())).map(pokemon => (<p>{pokemon.name}</p>))
```

&nbsp;
### array inhoud sorteren (alfabetisch & numeriek)
```
students.sort((a, b) => {
    if (sortField === "name") {
        return a.name.localeCompare(b.name);
    }
    else if (sortField === "age") {
        return a.age - b.age;
    }
    else {
        return a.year - b.year
    }
})
```

&nbsp;
### resultaten optellen (reduce functie)
```
const sumOfAll = () => {
    return counters.reduce((prev, curr) => prev + curr, 0); // 0 is hier de initial value, zonder init value breekt de app !!
}
```

&nbsp;
### item in array state wijzigen (mappen over array en wijzigen indien opgegeven index gelijk is aan gemapte index, daarna array opnieuw setten met de copy)
```
const decreaseCounter = (i: number) => {
    let copy = counters.map((oldValue, index) => index === i ? oldValue - 1 : oldValue);
    setCounters(copy);
}
```

&nbsp;
### item in array state verwijderen (element wordt niet vermeld na de arrow, maar moet er wel staan!)
```
const removeItem = (i: number) => {
    let copy = shoppingList.filter((element, index) => index !== i);
    setShoppingList(copy);
}
```

&nbsp;
&nbsp;

## API data ophalen met useEffect
```
useEffect(() => {
    fetch("link")
        .then(resp => resp.json())
        .then(data => setData(data)) //set functie wel aanpassen!
}, []); // dependency aanpassen indien nodig
```
OF met een async function en die dan in de useEffect gebruiken
```
// Functie om data op te halen (voorbeeld uit labo6-localstorage)
const loadJoke = async () => {
    //setLoading(true) // indien er een loading indicator gevraagd is
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { //headers waren nodig voor deze API
            "Accept": "application/json"
        }
    })
    let joke: Joke = await response.json();

    setDadJoke(joke.joke);
    //setLoading(false)
}

useEffect(() => {
    loadJoke();
}, []);
```
&nbsp;
&nbsp;

## Context API