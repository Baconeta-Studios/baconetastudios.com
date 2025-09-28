export default function GooglePlayBadge() {
    return (
        <div className="badge-outer-google">
            <a
                href={"https://play.google.com/store/apps/details?id=com.BaconetaStudios.SettingTheStage"}
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
