// Import global components.
import Header from "../Header";
import Footer from "../Footer";
// Import page components.
import Main from "./components/Main.tsx";
import About from "./components/About.tsx";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Footer />
        </>
    );
}
