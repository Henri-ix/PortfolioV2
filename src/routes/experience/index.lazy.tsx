import { createLazyFileRoute } from '@tanstack/react-router'
import {File,Folder} from '../../components/Types'
import { HomeFolder } from '../index.tsx' 
import Options from '@/components/Options.tsx'

export const Route = createLazyFileRoute('/experience/')({
  component: RouteComponent,
})


export const experienceFolder: Folder = {
    title: 'Experience',
    url: '/experience',
    options : [],
    parent : '/',

}

function RouteComponent() {
  return (
    <Options folder={experienceFolder}/>
  )
}
