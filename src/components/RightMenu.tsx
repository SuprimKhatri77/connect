import { Advertisement } from "./Advertisement"
import { Birthday } from "./Birthday"
import { FriendRequest } from "./FriendRequest"
import { UserInformationCard } from "./UserInformationCard"
import { UserMediaCard } from "./UserMediaCard"

export const RightMenu = ({ userId }: { userId?: string }) => {
    return (
        <div className="flex flex-col gap-6">
            {userId ? (
                <>
                    <UserInformationCard userId={userId} />
                    <UserMediaCard userId={userId} />
                </>
            ) : null}
            <FriendRequest />
            <Birthday />
            <Advertisement size="md" />
        </div>
    )
}
