import React,{useState} from "react";
import Typewriter from 'typewriter-effect'

export default function Footer({text} : {text:string}){
    


    return(
        <div className=" border-yellow-400 border-1 border-dashed p-3">
            <h2 className="text-yellow-400 text-xl">
                <Typewriter onInit={(typewriter)=>{
                    typewriter.typeString(text).start()
                }}/>
            </h2>
        </div>
    )
}