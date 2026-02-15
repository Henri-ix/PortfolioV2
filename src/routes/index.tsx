import { useState,useContext,createContext } from 'react'
import Footer from '@/components/Footer'
import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header';
import Options from '@/components/Options';
import {Folder} from '../components/Types.tsx'
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
