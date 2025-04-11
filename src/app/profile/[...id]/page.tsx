import { LeftMenu } from "@/components/LeftMenu"
import { RightMenu } from "@/components/RightMenu"
import { Feed } from "@/components/Feed"
import Image from "next/image"


const ProfilePage = () => {
    return (
        <div className="flex gap-6">
            <div className="hidden xl:block w-[20%]"> <LeftMenu type="profile" /> </div>
            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
                            <Image src="https://images.pexels.com/photos/31546938/pexels-photo-31546938/free-photo-of-fluffy-dog-relaxing-at-sunset-in-trinidad.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill className="object-cover rounded-md" />
                            <Image src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={128} height={128} className="object-cover w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white" />
                        </div>
                        <h1 className="mt-20 mb-4 text-2xl font-medium">Jonny Baristow</h1>
                        <div className="flex items-center justify-center mb-4 gap-12">
                            <div className="flex flex-col items-center">
                                <span className="font-medium ">7</span>
                                <span className="text-sm">Posts</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium ">7000</span>
                                <span className="text-sm">Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium ">77</span>
                                <span className="text-sm">Following</span>
                            </div>
                        </div>
                    </div>
                    <Feed />
                </div>
            </div>
            <div className="hidden lg:block w-[30%]"> <RightMenu userId="test" /> </div>
        </div>
    )
}

export default ProfilePage