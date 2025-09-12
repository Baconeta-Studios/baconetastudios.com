// React
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex-container header">
            <img
                className="flex-item studio-icon"
                src="/baconeta-whitelogo.png"
                alt="baconeta studios"
                width={64}
                height={64}
            />

            {/* Desktop / Mobile Nav */}
            <nav className={`flex-row nav-links ${menuOpen ? "show" : ""}`}>
                <Link to="/" className="flex-item" onClick={() => setMenuOpen(false)}>Setting The Stage</Link>
                <Link to="/about" className="flex-item" onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to="/contact" className="flex-item" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </nav>

            {/* Hamburger */}
            <button
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    );
}
