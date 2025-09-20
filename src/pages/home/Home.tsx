// Import global components.
import Header from "../Header";
import Footer from "../Footer";
// Import page components.
import StSMainContent from "./components/StSMainContent.tsx";
import AboutStS from "./components/AboutStS.tsx";
import ComicPanelSts from "./components/ComicPanelSts.tsx";
import StoreBadges from "../../assets/StoreBadges.tsx";

export default function Home() {
    return (
        <>
            <Header/>
            <StSMainContent/>
            <StoreBadges/>
            <hr />
            <ComicPanelSts/>
            <AboutStS/>
            <Footer/>
        </>
    );
}
