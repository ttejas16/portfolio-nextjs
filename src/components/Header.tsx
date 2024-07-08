import ProfileImage from "./ProfileImage";

function Header() {

    return (
        <div className="w-full flex justify-center items-center flex-col lg:flex-row">

            <div className="w-[270px] h-[230px] xl:w-[350px] xl:h-[300px] flex justify-center">

                <div className="w-[83%] h-[98%] border-dashed border-lightblue 
              rounded-full p-3 border-[4px]">
                    <ProfileImage />
                </div>

            </div>
            <div className="text-center lg:text-start w-full sm:w-[80%] lg:w-[70%] xl:w-[70%] 2xl:w-[60%] text-white 
            px-1 pt-4 xl:p-6 
            flex flex-col items-center lg:justify-start lg:items-start gap-y-6">
                <h1 className="font-[500] text-3xl xl:text-5xl ">
                    Hello! I'm <span className="text-lightblue"><br className="md:hidden" />Tejas</span>.
                </h1>
                <p className=" self-start xl:text-xl text-neutral-200 ">
                    A 20 yr old Computer Science student from India. Currently building projects to make
                    my Web Development skills better.I also enjoy making small games with Python and
                    I love Cricket!.
                    I'm learning new things everyday and try to do better than yesterday.

                </p>
            </div>
        </div>
    )
}

export default Header;