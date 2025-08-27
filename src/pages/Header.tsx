// React
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <header className={"flex-container"}>
            <div className={"flex-row"}>
                <Link to={"/"} className={"flex-item"} >Setting The Stage</Link>
                <Link to={"/about"} className={"flex-item"} >About Us</Link>
                <Link to={"/contact"} className={"flex-item"} >Contact Us</Link>
            </div>
        </header>
    );
}
