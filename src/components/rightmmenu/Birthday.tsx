import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Birthday = () => {
    return (
        <div className='p-4 bg-white rounded-lg shdaow-md text-sm flex flex-col gap-4'>
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>Birthdays</span>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <Image src="https://images.pexels.com/photos/7350109/pexels-photo-7350109.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
                    <span className='font-semibold'>Bruce Wayne</span>
                </div>
                <div className='flex gap-3 justify-end'>
                    <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
                </div>
            </div>

            <div className='p-2 bg-slate-100 rounded-lg flex items-center gap-4'>
                <Image src="/gift.png" width={24} height={24} alt='' />
                <Link href='/' className='flex flex-col gap-1 text-xs'>
                    <span className='text-gray-700 font-semibold'>Upcoming birthdays</span>
                    <span className='text-gray-500 '>See other 16 have upcoming birthdays</span>
                </Link>
            </div>
        </div>
    )
}
