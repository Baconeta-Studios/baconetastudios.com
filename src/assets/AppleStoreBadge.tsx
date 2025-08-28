export default function GooglePlayBadge() {
    return (
        <div className="badge-outer">
            <a
                href={"https://www.google.com/"}
                className={"badge-inner"}
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label="Apple Play Badge"
                style={{ backgroundColor: "transparent" }}
            >
                <img
                    src={"./thirdparty/Apple_Store_badge_EN.svg"}
                    alt={"Get It On Google Playstore Badge"}
                    className={"badge-image"}
                >
                </img>
            </a>
        </div>
    );
}
