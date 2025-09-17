export default function Main() {
    return (
        <div>
            <div className={"hero"}>
                <img src="/STS_Banner-dimmed-websitebanner.png" alt="Background" className="bg"/>
                <img src="/sts-title.png" alt="Website Title" className="title" height="229"/>
                <div className="overlay-text">a musical puzzle adventure</div>

                {/* Circle Badge */}
                <a href="https://forms.gle/3ezPYAAhuyHWZHjY9" className="badge">
                    <div className={"hero-circle"}>GIVE US<br/>YOUR<br/>FEEDBACK!</div>
                </a>
            </div>

            <h2 className={"download-title"}>Download Now</h2>
        </div>
    );
}