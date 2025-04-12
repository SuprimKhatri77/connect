import { User } from "@/generated/prisma"
import { Advertisement } from "../Advertisement"
import { Birthday } from "./Birthday"
import { FriendRequest } from "../FriendRequest"
import { UserInformationCard } from "./UserInformationCard"
import { UserMediaCard } from "./UserMediaCard"
import { Suspense } from "react"

export const RightMenu = ({ user }: { user?: User }) => {
    return (
        <div className="flex flex-col gap-6">
            {user ? (
                <>
                    <Suspense fallback="loading...">
                        <UserInformationCard user={user} />
                    </Suspense>
                    <Suspense fallback="loading...">
                        <UserMediaCard user={user} />
                    </Suspense>
                </>
            ) : null}
            <FriendRequest />
            <Birthday />
            <Advertisement size="md" />
        </div>
    )
}
