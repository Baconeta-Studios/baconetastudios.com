export default function GooglePlayBadge() {
    return (
        <div className="badge-outer-google">
            <a
                href={"https://play.google.com/store/apps/details?id=com.BaconetaStudios.SettingTheStage&referrer=utm_source%3Dbaconetastudios%26utm_medium%3Dwebsite%26utm_content%storebadge"}
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
