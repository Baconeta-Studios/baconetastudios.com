// React
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <header>
            <Link to={"/"} >About Us</Link>
            <Link to={"/contact"} >Contact Us</Link>
            <Link to={"https://github.com/Baconeta-Studios/"} >Our Github</Link>
        </header>
    );
}
