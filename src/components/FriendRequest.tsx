import React from 'react'
import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/library/client'
import { FriendRequestList } from './FriendRequestList'

export const FriendRequest = async () => {


    const { userId } = await auth()
    if (!userId) return null

    const requests = await prisma.followRequest.findMany({
        where: {
            receiverId: userId
        },
        include: {
            sender: true,
        },
    })

    if (requests.length === 0) return null

    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>Friend Request</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>

            <FriendRequestList requests={requests} />
        </div>
    )
}
