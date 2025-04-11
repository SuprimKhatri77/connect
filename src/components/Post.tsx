import React from 'react'
import Image from 'next/image'
import { Comments } from './Comments'

export const Post = () => {

    return (


        <div className='flex flex-col gap-4'>
            {/* user */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src="https://images.pexels.com/photos/31427402/pexels-photo-31427402/free-photo-of-young-man-in-jersey-by-sydney-opera-house.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={40} height={40} className='w-10 h-10 object-cover rounded-full' />
                    <span className='font-semibold self-center pt-1'>John Doe</span>
                </div>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>

            {/* description */}
            <div className='flex flex-col gap-4 '>
                <div className='w-full min-h-96 relative'>
                    <Image src="https://images.pexels.com/photos/31001123/pexels-photo-31001123/free-photo-of-atmospheric-night-scene-in-tokyo-s-vibrant-alleyway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='object-cover rounded-md' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione incidunt cumque, necessitatibus maiores esse minus, voluptates eum veritatis voluptatibus magnam debitis culpa sapiente tempora. Recusandae quidem necessitatibus nesciunt ullam.</p>
            </div>

            {/* interaction */}
            <div className='flex items-center justify-between text-sm mt-4'>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                        <Image src="/like.png" alt="" width={16} height={16} className='cursor-pointer' />
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500 pt-1'>777 <span className='hidden md:inline'> Likes</span> </span>
                    </div>
                    <div className='flex gap-8'>
                        <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                            <Image src="/comment.png" alt="" width={16} height={16} className='cursor-pointer' />
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500 pt-1'>777 <span className='hidden md:inline'> Comments</span> </span>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex gap-8'>
                        <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                            <Image src="/share.png" alt="" width={16} height={16} className='cursor-pointer' />
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500 pt-1'>777 <span className='hidden md:inline'> Share</span> </span>
                        </div>
                    </div>
                </div>
            </div>
            <Comments />
        </div>

    )
}
