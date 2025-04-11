import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { User } from '@/generated/prisma'


export const UserMediaCard = ({ user }: { user: User }) => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User media</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>


            <div className='flex gap-4 justify-between flex-wrap'>
                <div className='relative w-1/5 h-24'>
                    <Image src="https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src="https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src="https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src="https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src="https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src="https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src="https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src="https://images.pexels.com/photos/1674625/pexels-photo-1674625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
            </div>

        </div>
    )
}
