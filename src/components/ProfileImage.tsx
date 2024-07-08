"use client"
import { useState } from "react";
import Image from "next/image";
import ProfilePicture from "../../public/profile.jpg"

function ProfileImage() {

    const [isHover, setIsHover] = useState(true);
    const animation = isHover ? "animate-circle-spin" : "";

    return (
        <div className={`w-full h-full rounded-full cursor-pointer hover:p-3 duration-100 ${animation}`}
            onAnimationEnd={() => setIsHover(false)}
            onMouseEnter={() => setIsHover(true)}>
            <Image
                src={ProfilePicture}
                alt="profile image"
                className="object-cover w-full h-full rounded-full"
            />
        </div>
    )
}

export default ProfileImage;