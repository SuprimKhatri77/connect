import Image from 'next/image'
import React from 'react'

export const Advertisement = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className='p-4 bg-white rounded-lg shdaow-md text-sm'>
            <div className='flex items-center justify-between text-gray-500 font-medium'>
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="" width={16} height={16} />
            </div>

            <div className={`flex flex-col mt-4 ${size === 'sm' ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === 'sm' ? "h-24" : size === 'md' ? "h-36" : "h-48"}`}>
                    <Image src="https://images.pexels.com/photos/31508335/pexels-photo-31508335/free-photo-of-serene-waterfall-in-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className='rounded-lg object-cover' />
                </div>
                <div className='flex items-center gap-6'>
                    <Image src="https://images.pexels.com/photos/31508335/pexels-photo-31508335/free-photo-of-serene-waterfall-in-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={24} height={24} className='rounded-full w-6 h-6 object-cover' />
                    <span className='text-blue-500 font-medium'>BigChef Lounge</span>
                </div>
                <p className={`${size === 'sm' ? "text-xs" : "text-sm"}`}>
                    {size === 'sm' ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. " : size === "md" ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, architecto iste. Ipsa dolore quam ea suscipit, tenetur voluptatem ut quaerat!" : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores porro autem delectus nobis, quidem, veniam laborum corrupti at amet sequi quibusdam. Ea similique dolore earum suscipit expedita obcaecati nostrum."}
                </p>
                <button className='bg-gray-200 text-gray-700 p-2 text-xs rounded-lg'>Learn more</button>
            </div>
        </div>
    )
}
