"use client"

import { User } from '@/generated/prisma'
import { updateProfile } from '@/library/action'
import Image from 'next/image'
import React, { useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary';


export const UpdateUser = ({ user }: { user: User }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [coverPicture, setCover] = useState<any>(false)

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <span className='text-blue-500 text-xs cursor-pointer' onClick={() => setIsOpen(prev => !prev)}>Update</span>
            {isOpen && (

                <div className='absolute w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50 '>
                    <form action={(formData) => updateProfile(formData, coverPicture.secure_url)} className='p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2  relative'>
                        <h1>Update profile</h1>
                        <div className='mt-4 text-xs tex-gray-500'>Use the navbar profile to change the avatar or username</div>



                        <CldUploadWidget uploadPreset="connect" onSuccess={(result) => {
                            setCover(result.info)
                            console.log("Event: ", result.event)
                            console.log("Info: ", result.info)
                        }
                        }>
                            {({ open }) => {
                                return (
                                    <div className='flex flex-col gap-4 my-4' onClick={() => open()}>
                                        <label htmlFor="">Cover Picture</label>
                                        <div className='flex items-center gap-2 cursor-pointer'>
                                            <Image src={user.coverPicture || "/noCover.jpeg"} alt="" width={48} height={32} className='w-12 h-8 rounded-md object-coverPicture' />
                                            <span className='text-xs underline text-gray-600'>Change</span>
                                        </div>
                                    </div>
                                );
                            }}
                        </CldUploadWidget>


                        {/* Input */}
                        <div className='flex flex-wrap justify-between gap-2'>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-xs text-gray-500'>First Name</label>
                                <input type="text" className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' placeholder={user.name || "eg: John"}
                                    name="name"
                                />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-xs text-gray-500'>Surname</label>
                                <input type="text" className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' placeholder={user.surname || "eg: Doe"}
                                    name="surname"
                                />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-xs text-gray-500'>Description</label>
                                <input type="text" className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' placeholder={user.description || "eg: Nextjs is goated...."} name="description" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-xs text-gray-500'>City</label>
                                <input type="text" className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' placeholder={user.city || "eg: New York"} name="city" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-xs text-gray-500'>School</label>
                                <input type="text" className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' placeholder={user.school || "eg: MIT"} name="school" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-xs text-gray-500'>Work</label>
                                <input type="text" className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' placeholder={user.work || "eg: Google Inc."} name="work" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <label htmlFor="" className='text-xs text-gray-500'>Website</label>
                                <input type="text" className='ring-1 ring-gray-300 p-[13px] rounded-md text-sm' placeholder={user.website || "eg: example.com"} name="website" />
                            </div>
                        </div>

                        <button className='bg-blue-500 p-2 mt-2 rounded-md text-white'>Update</button>
                        <div className='absolute text-lg right-2 top-3 cursor-pointer' onClick={handleClose}>X</div>
                    </form>
                </div>
            )}
        </div>
    )
}
