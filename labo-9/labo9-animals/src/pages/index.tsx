import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Home page</h1>
            <ul>
                <li>
                    <Link href={"/about"}>About me</Link>
                </li>
                <li></li>
                <li></li>
            </ul>
        </>
    );
}