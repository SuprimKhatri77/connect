"use client"
import React from 'react'
import Image from 'next/image'

export const Comments = () => {
    return (
        <div>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/972527/pexels-photo-972527.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={32} height={32} className='w-8 h-8 rounded-full' />
                <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full '>
                    <input type="text" placeholder='Write a comment...' className='bg-transparent outline-none flex-1' />
                    <Image src="/emoji.png" alt="" width={16} height={16} className='cursor-pointer' />
                </div>
            </div>
            <div>
                <div className='flex gap-4 justify-between mt-6'>
                    <Image src="https://images.pexels.com/photos/972527/pexels-photo-972527.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className='w-10 h-10 rounded-full' />
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className='font-medium'>Jon Jones</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a qui voluptates nesciunt omnis, quod tempora culpa cumque velit perspiciatis neque impedit, nihil consectetur minus quibusdam veritatis. Labore, sit quo.</p>
                        <div className='flex items-center gap-8 text-sm text-gray-500 mt-2'>
                            <div className='flex items-center gap-4'>
                                <Image src="/like.png" alt="" className='cursor-pointer w-4 h-4' width={16} height={16} />
                                <span className='text-gray-300pt-1'>|</span>
                                <span className='text-gray-500 pt-1'>123</span>
                            </div>
                            <div className='pt-1'>Reply</div>
                        </div>
                    </div>
                    <Image src="/more.png" alt="" className='cursor-pointer w-4 h-4' width={16} height={16} />
                </div>
            </div>
        </div>
    )
}
