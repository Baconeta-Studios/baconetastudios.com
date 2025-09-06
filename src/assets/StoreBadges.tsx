import GooglePlayBadge from "./GooglePlayBadge.tsx";
import AppleStoreBadge from "./AppleStoreBadge.tsx";

export default function StoreBadges() {
    return (
        <div className="badge-container">
            <GooglePlayBadge/>
            <AppleStoreBadge/>
        </div>
    );
}
