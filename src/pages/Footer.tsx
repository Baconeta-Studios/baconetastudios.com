import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex-container">
            <div className="flex-row">
                <a
                    href="mailto:support@baconetastudios.com"
                    className="flex-item"
                >
                    Need help? Contact us at <u>support@baconetastudios.com</u>
                </a>
            </div>
            <div className="flex-row mt-2">
                <Link
                    to="/privacy-policy"
                    className="flex-item"
                >
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
}
