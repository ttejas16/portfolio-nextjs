import { IconObject } from "../../types/types";

interface BorderProps {
    className: string,
    icons?: IconObject[]
}

function Border({ className, icons }: BorderProps) {
    return (
        <div className={`fixed h-[100vh] top-0 flex flex-col justify-start items-center py-4 gap-y-4 text-lightblue ${className}`}>
            <hr className="h-[10%] border-[2px] rounded-2xl border-lightblue" />
            {
                icons &&
                <div className="flex flex-col gap-y-4 text-white text-sm sm:text-base">
                    {
                        icons?.map((icon) => {
                            return (
                                <div className="relative flex gap-x-3 cursor-pointer group">
                                    <a href={icon.link} target="blank">
                                        <icon.icon className="text-lg sm:text-2xl lg:text-3xl" />
                                    </a>
                                    <div className="bg-neutral-800 p-[0.4em] rounded-sm absolute left-10 hidden group-hover:block text-white">
                                        {icon.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            <hr className="h-[30%] border-[2px] rounded-2xl border-lightblue" />
            <hr className="h-[20%] border-[2px] rounded-2xl border-lightblue" />
            <hr className="h-[10%] border-[2px] rounded-2xl border-lightblue" />
            <hr className="h-[30%] border-[2px] rounded-2xl border-lightblue" />
        </div>
    )

}

export default Border;