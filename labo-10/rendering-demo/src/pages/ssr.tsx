import { Philosopher } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch("http://localhost:3000/api/philosophers");
    const data: Philosopher[] = await response.json();

    return {
        props: {
            data
        }
    }
}

export default function SSRPage({data}: {data: Philosopher[]}) {
    return(
        <>
            <h1>Server Side Rendering Page</h1>
            <p>This page is rendered on the server side.</p>
            <ul>
                {data.map(p => 
                    <li key={p.id}><h2>{p.name}</h2></li>
                )}
            </ul>
        </>
    );
}