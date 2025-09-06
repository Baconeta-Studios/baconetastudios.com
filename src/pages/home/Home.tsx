// Import global components.
import Header from "../Header";
import Footer from "../Footer";
// Import page components.
import Main from "./components/Main.tsx";
import About from "./components/About.tsx";
import HeroImageStS from "./components/HeroImageStS.tsx";
import StoreBadges from "../../assets/StoreBadges.tsx";

export default function Home() {
    return (
        <>
            <Header/>
            <Main/>
            <StoreBadges/>
            <hr />
            <HeroImageStS/>
            <About/>
            <Footer/>
        </>
    );
}
