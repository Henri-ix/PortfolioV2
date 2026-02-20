import type { experience } from "@/components/Types";
import Typewriter from 'typewriter-effect'


export default function ExperienceHeader({Details} : {Details:experience}){
    return(
        <>
        <h1 className='text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl '>{Details.file.title}</h1>
        <h2 className='text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-xl'>
            <Typewriter onInit={(typewriter)=>{
                typewriter.typeString(Details.jobTitle).start()}}
            />
        </h2>
        <h3 className='text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-xl text-yellow-400/30'>{Details.date}</h3>
        </>
    )
}