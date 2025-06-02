import { Animal } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AnimalPage() {
    const [animal, setAnimal] = useState<Animal>();
    const [loading, setLoading] = useState<boolean>(true);


    const router = useRouter();

    const animalName = router.query.animal;

    const animals = ["cat", "dog", "hamster"];

    const id = animalName ? animals.indexOf(animalName as string) : "";

    useEffect(() => {
        fetch(`http://localhost:3000/api/animals/${id}`)
            .then(response => response.json())
            .then((data: Animal) => {
                //const filteredAnimal = data.find(el => el.name === animalName)
                setAnimal(data);
                setLoading(false);
            })
    }, [animalName])

    if (loading) {
        return(
            <>
                <p>Loading data...</p>
            </>
        );
    }
    else {
        if (animal) {
            return (
                <>
                    <h1>This is the dynamic page</h1>
                    <p>Showing info about {animal.name}</p>
                    <img src={animal.imglink} alt="" />
                </>
            );
        }
        else {
            return(
                <>
                    <p>Sorry, couldn't find this animal...</p>
                </>
            );
        }
    }
}