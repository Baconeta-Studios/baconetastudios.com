import GooglePlayBadgeRegister from "./GooglePlayBadgeRegister.tsx";
import AppleStoreBadge from "./AppleStoreBadge.tsx";
import ItchBadge from "./ItchStoreBadge.tsx";

export default function StoreBadges() {
    return (
        <div className="badge-container">
            <ItchBadge/>
            <GooglePlayBadgeRegister/>
            <AppleStoreBadge/>
        </div>
    );
}
