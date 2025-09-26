export default function AppleStoreBadge() {
    return (
        <div className="badge-outer">
            <a
                href={"https://apps.apple.com/us/app/setting-the-stage/id6736443805"}
                className={"badge-inner"}
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label="Apple Play Badge"
                style={{ backgroundColor: "transparent" }}
            >
                <img
                    src={"./thirdparty/Apple_Store_badge_EN.svg"}
                    alt={"Apple Store Badge"}
                    className={"badge-image"}
                >
                </img>
            </a>
        </div>
    );
}
