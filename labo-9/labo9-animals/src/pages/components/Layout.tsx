import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: {children: ReactElement}) {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}