import { Philosopher } from "@/types";
import { useEffect, useState } from "react";

export default function CSRPage() {

    const [data, setData] = useState<Philosopher[] | null>(null);

    useEffect(() => {
        fetch("/api/philosophers")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, []);

    if (!data) {
        return <div>Loading...</div>
    }

    return(
        <>
            <h1>Client Side Rendering Page</h1>
            <p>This page is rendered on the client side.</p>
            <ul>
                {data.map(p => 
                    <li key={p.id}><h2>{p.name}</h2></li>
                )}
            </ul>
        </>
    );
}