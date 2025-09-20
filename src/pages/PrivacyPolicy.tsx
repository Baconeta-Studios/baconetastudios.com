// Components
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="content">
                <div className="privacy-container">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: 20th September, 2025</p>

                    <p>
                        At Baconeta Studios, your privacy is important to us. This Privacy Policy
                        explains how our game and website handle information.
                    </p>

                    <h2>Information We Collect</h2>
                    <p>
                        We do not collect personally identifiable information. Our beta versions
                        may include optional, non-identifiable analytics for the purpose of improving
                        game design and player experience. You can disable analytics at any time.
                    </p>

                    <h2>Data Storage</h2>
                    <p>
                        All save data is stored locally on your device. We do not transmit or store
                        personal data on our servers.
                    </p>

                    <h2>Third-Party Services</h2>
                    <p>
                        Our game currently does not integrate with third-party advertising or
                        tracking services. Future updates will update this policy if that changes.
                    </p>

                    <h2>Your Choices</h2>
                    <p>
                        You may opt out of analytics at any time in the game’s settings. Deleting
                        the game will also delete all locally stored data.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions, please contact us at{" "}
                        <a href="mailto:support@baconetastudios.com">
                            support@baconetastudios.com
                        </a>.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
