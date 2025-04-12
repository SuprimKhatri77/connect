import prisma from '@/library/client'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import React from 'react'

export const ProfileCard = async () => {

    const { userId } = await auth();
    if (!userId) return null
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        },
        include: {
            _count: {
                select: {
                    followers: true
                }
            }
        }
    })

    // console.log(user);

    if (!user) return null



    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image src={user.coverPicture || "/noCover.jpeg"} alt="" fill className='rounded-md' />
                <Image src={user.avatar || "/noAvatar.png"} alt="" width={48} height={48} className='rounded-full absolute w-12 h-12 object-cover left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10' />
            </div>

            <div className='h-20 flex flex-col gap-2 items-center'>
                <span className='font-semibold'> {(user.username && user.surname) ? user.username + " " + user.surname : user.username} </span>
                <div className='flex items-center gap-4'>
                    <div className='flex'>
                        <Image src="https://images.pexels.com/photos/1829067/pexels-photo-1829067.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400&h=250&fit=crop&crop=focalpoint" alt="" className='rounded-full object-cover h-3 w-3' width={12} height={12} />
                        <Image src="https://images.pexels.com/photos/1829067/pexels-photo-1829067.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400&h=250&fit=crop&crop=focalpoint" alt="" className='rounded-full object-cover h-3 w-3' width={12} height={12} />
                        <Image src="https://images.pexels.com/photos/1829067/pexels-photo-1829067.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400&h=250&fit=crop&crop=focalpoint" alt="" className='rounded-full object-cover h-3 w-3' width={12} height={12} />
                    </div>
                    <span className='text-xs text-gray-500'>{user._count.followers} Followers</span>
                </div>
                <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
            </div>
        </div>
    )
}
