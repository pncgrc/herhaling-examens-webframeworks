import Link from "next/link";

export default function Header() {
    return(
        <header>
                <h1>Animal Wiki</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href={"/animals/cat"}>Cat</Link>
                        </li>
                        <li>
                            <Link href={"/animals/dog"}>Dog</Link>
                        </li>
                        <li>
                            <Link href={"/animals/hamster"}>Hamster</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    );
}