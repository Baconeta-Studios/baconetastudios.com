// Import global components.
import Header from "../Header";
import Footer from "../Footer";
// Import page components.
import Main from "./components/Main.tsx";
import About from "./components/About.tsx";
import ComicPanelSts from "./components/ComicPanelSts.tsx";
import StoreBadges from "../../assets/StoreBadges.tsx";

export default function Home() {
    return (
        <>
            <Header/>
            <Main/>
            <StoreBadges/>
            <hr />
            <ComicPanelSts/>
            <About/>
            <Footer/>
        </>
    );
}
