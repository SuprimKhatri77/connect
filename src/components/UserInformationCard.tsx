import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { User } from '@/generated/prisma'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/library/client'


export const UserInformationCard = async ({ user }: { user: User }) => {

    const createdATDate = new Date(user.createdAT)
    const formattedDate = createdATDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"

    })

    let isUserBlocked = false
    let isFollowing = false
    let isFollowingSent = false

    const { userId: currentUserId } = await auth()

    if (currentUserId) {
        const blockResponse = await prisma.block.findFirst({
            where: {
                blockerId: currentUserId,
                blockedId: user.id
            }
        })

        blockResponse ? isUserBlocked = true : isUserBlocked = false
        const followerResponse = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: user.id
            }
        })

        followerResponse ? isFollowing = true : isFollowing = false
        const followingResponse = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: user.id
            }
        })

        followingResponse ? isFollowingSent = true : isFollowingSent = false

    }
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>UserInformation</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>

            <div className='flex flex-col gap-4 text-gray-500'>
                <div className='flex items-center gap-2'>
                    <span className='text-xl text-black'> {(user.name && user.surname) ? user.name + " " + user.surname : user.username} </span>
                    <span className='text-sm'>@ {user.username} </span>

                </div>
                {user.description && (
                    <p> {user.description} </p>
                )}

                {user.city && (

                    <div className='flex items-center gap-2'>
                        <Image src="/map.png" alt="" width={16} height={16} />
                        <span>Living in  <b> {user.city} </b> </span>
                    </div>
                )}


                {user.school && (

                    <div className='flex items-center gap-2'>
                        <Image src="/school.png" alt="" width={16} height={16} />
                        <span>Went to  <b> {user.school} </b> </span>
                    </div>
                )}

                {user.work && (

                    <div className='flex items-center gap-2'>
                        <Image src="/work.png" alt="" width={16} height={16} />
                        <span>Works at <b> {user.work} </b> </span>
                    </div>
                )}


                <div className='flex items-center justify-between'>
                    {user.website && (
                        <div className='flex gap-1 items-center'>

                            <Image src="/link.png" alt="" width={16} height={16} />
                            <Link href={user.website} target='_blank' className='text-blue-500 font-medium'> {user.website} </Link>
                        </div>
                    )}

                    <div className='flex gap-1 items-center'>
                        <Image src="/date.png" alt="" width={16} height={16} />
                        <span>Joined {formattedDate}  </span>
                    </div>
                </div>
                {isUserBlocked || isFollowing || isFollowingSent ? (
                    <>
                        <button className='bg-blue-500 text-white rounded-md text-sm p-2'>Follow</button>
                        <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
                    </>
                ) : null}
            </div>
        </div>
    )
}
