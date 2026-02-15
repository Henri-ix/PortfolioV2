import { useState} from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Options from '@/components/Options';
import {Folder} from '../components/Types'
import { aboutFile } from './about/index.lazy';
import { experienceFolder } from './experience/index.lazy.tsx';
import { projectsFolder } from './projects/index.lazy.tsx';


export const Route = createFileRoute('/')({ component: App })

export const HomeFolder: Folder={
  title:"Home",
  url : "/",
  options : [aboutFile,experienceFolder,projectsFolder]
  
}
  

function App() {
  const [text,setText] = useState("Welcome to YanOS");

 
  

  return(
      <Options folder={HomeFolder}/>
  )
}
