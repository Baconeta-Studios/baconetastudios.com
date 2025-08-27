// React
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className={"flex-container"}>
            <img className={"flex-item"} src="/baconeta-whitelogo.png" alt="baconeta studios" width={64} height={64} />
            <div className={"flex-row"}>
                <Link to={"/"} className={"flex-item"} >Setting The Stage</Link>
                <Link to={"/about"} className={"flex-item"} >About Us</Link>
                <Link to={"/contact"} className={"flex-item"} >Contact Us</Link>
            </div>
        </header>
    );
}
