import Image from "next/image"


export const AddPost = () => {


    return (
        <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm ">
            {/* avatar */}
            <Image src="https://images.pexels.com/photos/31414585/pexels-photo-31414585/free-photo-of-red-panda-resting-on-tree-branch-in-england.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={48} height={48} className="w-12 h-12 object-cover  rounded-full" />

            {/* post */}
            <div className="flex-1">
                {/* text input */}
                <form action="s" className="flex gap-4 items-end">
                    <textarea id="" placeholder="What's on your mind?"
                        className="bg-slate-100 rounded-lg flex-1 p-2"
                        name="description"
                    ></textarea>
                    <Image src="/emoji.png" alt="" width={20} height={20}
                        className="w-5 h-5 object-cover rounded-full"
                    />
                </form>
                {/* post options */}
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addimage.png" alt="" width={20} height={20} />
                        <span>Photo</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addVideo.png" alt="" width={20} height={20} />
                        <span> Video</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/addevent.png" alt="" width={20} height={20} />
                        <span>Event</span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" alt="" width={20} height={20} />
                        <span>Poll</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
