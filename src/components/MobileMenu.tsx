"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='md:hidden'>
            <div className='flex flex-col gap-1 cursor-pointer'
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-300`}></div>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""} ease-in-out duration-300`}></div>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-300`}></div>
            </div>
            {isOpen && (
                <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center font-md text-xl gap-8 z-10'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Friends</Link>
                    <Link href='/'>Groups</Link>
                    <Link href='/'>Stories</Link>
                    <Link href='/'>Login</Link>
                </div>
            )}
        </div>
    )
}

export default MobileMenu