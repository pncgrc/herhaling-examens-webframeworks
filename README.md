# React basics

## Array functies

&nbsp;
### Filteren bij input verandering
```
pokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchField.toLowerCase())).map(pokemon => (<p>{pokemon.name}</p>))
```
OF je kan ook filteren op meerdere props zoals name & type in het geval van een Pokemon
&nbsp;
(Let wel op dat de volgende voorbeelden includes() gebruiken ipv startsWith()!)
```
pokemon
  .filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchField.toLowerCase()) || 
    pokemon.type.toLowerCase().includes(searchField.toLowerCase())
  )
  .map(pokemon => (<p>{pokemon.name}</p>))
```
In geval dat type een array van Pokemon types zou zijn:
```
pokemon
  .filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchField.toLowerCase()) || 
    pokemon.type.some(type => type.toLowerCase().includes(searchField.toLowerCase()))
  )
  .map(pokemon => (<p>{pokemon.name}</p>))
```

&nbsp;
### Array inhoud sorteren (alfabetisch & numeriek)
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
### Resultaten optellen (reduce functie)
```
const sumOfAll = () => {
    return counters.reduce((prev, curr) => prev + curr, 0); // 0 is hier de initial value, zonder init value breekt de app !!
}
```
&nbsp;
## Array state

&nbsp;
### Item in array state toevoegen
```
setShoppingList([...shoppingList, {name, quantity}]); // in dit geval was de array een array van objecten ShoppingListItem met props name & quantity, vandaar dat wij een object kunnen toevoegen
```

&nbsp;
### Item in array state wijzigen 
Mappen over array en wijzigen indien opgegeven index gelijk is aan gemapte index, daarna array opnieuw setten met de copy
```
const decreaseCounter = (i: number) => {
    let copy = counters.map((oldValue, index) => index === i ? oldValue - 1 : oldValue);
    setCounters(copy);
}
```

&nbsp;
### Item in array state verwijderen
```
const removeItem = (i: number) => {
    let copy = shoppingList.filter((element, index) => index !== i); // element wordt niet vermeld na de arrow, maar moet er wel staan!
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

## Context API (uit labo8-basic-context)

1. Context aanmaken met bijhorende interface in App.tsx
```
interface SettingsContext {
  color: string;
  setColor: (color: string) => void;
}

// exporten als je aan de context wilt geraken in andere functies (wat meestal het geval is)
export const SettingsContext = createContext<SettingsContext>({color: "red", setColor: () => {}}) // functie moet een een default waarde krijgen, dus vandaar een lege functie
```

2. Zet Context Provider als hoogste parent element in App.tsx & geef de values mee (in dit geval de state & setState)
```
function App() { // Deze app zou de kleur van de 3 Square componenten in SquareRow veranderen door een select input in SelectBox
  const [color, setColor] = useState<string>("red");

  return (
    <SettingsContext.Provider value={{color: color, setColor: setColor}}>
      <SelectBox />
      <SquareRow />
    </SettingsContext.Provider>
  )
}
```

3. Gebruik de context in elk gewenst componentje met useContext
```
const Square = () => {
    const { color } = useContext(SettingsContext); //In dit componentje hebben wij enkel de kleur nodig, dus enkel color wordt gedeclareerd

    return(
        <div style={{ width: 100, height: 100, margin: 10, backgroundColor: color }}>
            
        </div>
    );
}
```
OF je kan meerdere context props gebruiken
```
const SelectBox = () => {
    const { color, setColor } = useContext(SettingsContext);

    return(
        <>
            <select name="" id="" value={color} onChange={(event) => setColor(event.target.value)}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
        </>
    );
}
```

&nbsp;
&nbsp;

# NextJS