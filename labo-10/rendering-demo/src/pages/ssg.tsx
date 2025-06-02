import { Philosopher } from "@/types";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("http://localhost:3000/api/philosophers");
    const data: Philosopher[] = await response.json();

    return {
        props: {
            data
        }
    }
}

    export default function SSGPage({data}: {data: Philosopher[]}) {
    return(
        <>
            <h1>Static Site Generation Page</h1>
            <p>This page is generated on the server side.</p>
            <ul>
                {data.map(p => 
                    <li key={p.id}><h2>{p.name}</h2></li>
                )}
            </ul>
        </>
    );
}