export default function ItchBadge() {
    return (
        <div className="badge-outer">
            <a
                href={"https://baconeta.itch.io/setting-the-stage-pc-demo"}
                className={"badge-inner"}
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label="Itch Store Badge"
                style={{ backgroundColor: "transparent"}}
            >
                <img
                    src={"./thirdparty/itchio_badge_EN.svg"}
                    alt={"Itch Store Badge"}
                    className={"badge-image"}
                    style={{ border: "1px solid #B3B3B3", borderRadius: "15px" }}
                >
                </img>
            </a>
        </div>
    );
}
