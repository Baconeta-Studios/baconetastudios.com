export default function GooglePlayBadgeRegister() {
    return (
        <div className="badge-outer-google">
            <a
                href={"/GoogleRegister"}
                className={"badge-inner"}
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label="Google Play Badge"
                style={{ backgroundColor: "transparent" }}
            >
                <img
                    src={"./thirdparty/Google_Play_Store_badge_EN.svg"}
                    alt={"Google Play Badge"}
                    className={"badge-image"}
                >
                </img>
            </a>
        </div>
    );
}