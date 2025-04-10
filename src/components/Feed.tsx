import React from 'react'
import { Post } from './Post'

export const Feed = () => {
    return (
        <div className="p-4 shadow-md bg-white rounded-lg flex flex-col gap-12 justify-between text-sm ">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
