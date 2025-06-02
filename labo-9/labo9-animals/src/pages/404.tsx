import { Router, useRouter } from "next/router";

export default function PageNotFound() {

    const router = useRouter();
    return(

        <>
            <h1>Sorry, this page doesn't exist</h1>
            <button onClick={() => router.back()}>Go back</button>
        </>

    );
}