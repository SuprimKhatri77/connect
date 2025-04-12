"use client"

import React, { useOptimistic, useState } from 'react'
import Image from 'next/image'
import { FollowRequest, User } from '@/generated/prisma'
import { acceptFollowRequest, declineFollowRequest } from '@/library/action'


type RequestWithUser = FollowRequest & {
    sender: User
}

export const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
    const [requestState, setRequestState] = useState(requests);

    const accept = async (requestId: number, userId: string) => {
        removeOptimisticRequests(requestId)
        try {
            await acceptFollowRequest(userId)
            setRequestState((prev) => prev.filter(req => req.id !== requestId))
        } catch (err) { }
    }

    const decline = async (requestId: number, userId: string) => {
        removeOptimisticRequests(requestId)
        try {
            await declineFollowRequest(userId)
            setRequestState((prev) => prev.filter(req => req.id !== requestId))
        } catch (err) { }
    }

    const [optimisticRequests, removeOptimisticRequests] = useOptimistic(requestState, (state, value: number) => state.filter(req => req.id !== value))
    return (
        <>

            {
                optimisticRequests.map(req => (

                    <div className='flex items-center justify-between' key={req.id}>
                        <div className='flex gap-4 items-center'>
                            <Image src={req.sender.avatar!} alt="" width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
                            <span className='font-semibold'> {req.sender.username} </span>
                        </div>
                        <div className='flex gap-3 justify-end'>
                            <form action={() => accept(req.id, req.sender.id)}>
                                <button>
                                    <Image src="/accept.png" alt="" width={20} height={20} className='cursor-pointer' />
                                </button>
                            </form>
                            <form action={() => decline(req.id, req.sender.id)}>
                                <button>
                                    <Image src="/reject.png" alt="" width={20} height={20} className='cursor-pointer' />
                                </button>
                            </form>
                        </div>
                    </div>
                ))
            }

        </>
    )
}
