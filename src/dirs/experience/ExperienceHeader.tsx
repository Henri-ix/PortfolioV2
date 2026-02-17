import type { experience } from "@/components/Types";
import Typewriter from 'typewriter-effect'


export default function ExperienceHeader({Details} : {Details:experience}){
    return(
        <>
        <h1 className='text-4xl'>{Details.file.title}</h1>
        <h2 className='text-2xl'>
            <Typewriter onInit={(typewriter)=>{
                typewriter.typeString(Details.jobTitle).start()}}
            />
        </h2>
        <h3 className='text-xl text-yellow-400/30'>{Details.date}</h3>
        </>
    )
}