"use client"
import { switchBlock, switchFollow } from '@/library/action'
import React, { useOptimistic, useState } from 'react'

export const UserInfoCardInteraction = ({ userId, currentUserId, isUserBlocked, isFollowing, isFollowingSent }: { userId: string, currentUserId: string | null, isUserBlocked: boolean, isFollowing: boolean, isFollowingSent: boolean }) => {

    const [userState, setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followingRequestSent: isFollowingSent
    })


    const follow = async () => {
        switchOptimisticState("follow")
        try {
            await switchFollow(userId)
            setUserState(prev => ({
                ...prev,
                following: prev.following && false,
                followingRequestSent: !prev.followingRequestSent && !prev.following ? true : false
            }))
        } catch (err) { }
    }

    const block = async () => {
        switchOptimisticState("block")

        try {
            await switchBlock(userId)
            setUserState(prev => ({
                ...prev,
                blocked: !prev.blocked
            }))
        }
        catch (err) { }

    }

    const [optimisticState, switchOptimisticState] = useOptimistic(userState, (state, value: "follow" | "block") => value === "follow" ? {
        ...state,
        following: state.following && false,
        followingRequestSent: !state.followingRequestSent && !state.following ? true : false
    }
        : { ...state, blocked: !state.blocked }
    )
    return (
        <>
            <form action={follow}>

                <button className='w-full bg-blue-500 text-white rounded-md text-sm p-2'>
                    {optimisticState.following ? "Following" : optimisticState.followingRequestSent ? "Follow Request Sent" : "Follow"}
                </button>
            </form>
            <form action={block} className='self-end'>

                <button className='text-red-400 self-end text-xs cursor-pointer'>
                    {optimisticState.blocked ? "Unblock User" : "Block User"}
                </button>
            </form>
        </>
    )
}
