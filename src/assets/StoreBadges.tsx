import GooglePlayBadge from "./GooglePlayBadge.tsx";
import AppleStoreBadge from "./AppleStoreBadge.tsx";
import ItchBadge from "./ItchStoreBadge.tsx";

export default function StoreBadges() {
    return (
        <div className="badge-container">
            <ItchBadge/>
            <GooglePlayBadge/>
            <AppleStoreBadge/>
        </div>
    );
}
