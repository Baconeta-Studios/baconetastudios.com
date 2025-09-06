// Import global components.
import Header from "../Header";
import Footer from "../Footer";
// Import page components.
import Main from "./components/Main.tsx";
import About from "./components/About.tsx";
import HeroImageStS from "./components/HeroImageStS.tsx";
import GooglePlayBadge from "../../assets/GooglePlayBadge.tsx";
import AppleStoreBadge from "../../assets/AppleStoreBadge.tsx";

export default function Home() {
    return (
        <>
            <Header/>
            <Main/>
            <div className="badge-container">
                <GooglePlayBadge/>
                <AppleStoreBadge/>
            </div>
            <hr />
            <HeroImageStS/>
            <About/>
            <Footer/>
        </>
    );
}
