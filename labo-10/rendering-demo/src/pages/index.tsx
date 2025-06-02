import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul>
        <li><Link href="/ssr">Server Side Rendering</Link></li>
        <li><Link href="/csr">Client Side Rendering</Link></li>
        <li><Link href="/ssg">Static Site Generation</Link></li>
      </ul>
    </>
  );
}
