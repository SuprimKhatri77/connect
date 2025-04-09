"use client"
import React from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-24'>

            {/* left */}
            <div className='md:hidden lg:block w-[20%]'>
                <Link href='/' className='font-bold text-xl text-blue-600'>Connect</Link>
            </div>

            {/* center */}
            <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
                <div className='flex gap-6 text-gray-600'>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image src='/home.png' alt="homepage" width={16} height={16} className='w-4 h-4' />
                        <span className='pt-1'>Homepage</span>
                    </Link>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image src='/friends.png' alt="homepage" width={16} height={16} className='w-4 h-4' />
                        <span className='pt-1'>Friends</span>
                    </Link>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image src='/stories.png' alt="homepage" width={16} height={16} className='w-4 h-4' />
                        <span className='pt-1'>Stories</span>
                    </Link>
                </div>
                <div className='hidden lg:flex p-2 bg-slate-100 items-center rounded-xl'>
                    <input type="text" placeholder='search....' className='transparent outline-none ' />
                    <Image src="/search.png" alt="search" width={16} height={16} className='cursor-pointer' />
                </div>
            </div>

            {/* right */}
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end '>
                <ClerkLoading>
                    <div
                        className="inline-block border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-solid  border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] 
                         dark:text-white"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span
                        >

                    </div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className='cursor-pointer'>
                            <Image src='/people.png' alt="people" width={20} height={20} />
                        </div>
                        <div className='cursor-pointer'>
                            <Image src='/messages.png' alt="people" width={20} height={20} />
                        </div>
                        <div className='cursor-pointer'>
                            <Image src='/notifications.png' alt="notifications" width={20} height={20} />
                        </div>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className='flex items-center gap-2 text-sm'>
                            <Image src="/login.png" alt="user" width={20} height={20} />
                            <Link href='/sign-in' className='pt-1'>Login/Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar