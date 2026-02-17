import { useState} from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Options from '@/components/Options';
import type  {Folder,File} from '../components/Types'
import { aboutFile } from './about/index.lazy';
import { experienceFolder } from './experience.tsx';
import { projectsFolder } from './projects/index.lazy.tsx';
import Home from '@/dirs/home.tsx';


export const Route = createFileRoute('/')({ component: App })


export const HomeFile: File = {
    title: 'Home',
    url: '/',

}

export const BaseFolder: Folder={
  title:"Home",
  url : "/",
  options : [HomeFile,aboutFile,experienceFolder,projectsFolder]
  
}

  

function App() {
  const [text,setText] = useState("Welcome to YanOS");

 
  

  return(
      <div className='flex flex-row justify-start h-screen p-3'>
        <Options folder={BaseFolder}/>
        <Home/>
      </div>
  )
}
