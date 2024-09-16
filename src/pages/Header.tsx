// React
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <header className={"flex-container"}>
            <div className={"flex-row"}>
                <Link to={"/"} className={"flex-item"} >About Us</Link>
                <Link to={"/contact"} className={"flex-item"} >Contact Us</Link>
                <Link to={"https://github.com/Baconeta-Studios/"} className={"flex-item"} >Our Github</Link>
            </div>
        </header>
    );
}
