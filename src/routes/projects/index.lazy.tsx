import { createLazyFileRoute } from '@tanstack/react-router'
import {File,Folder} from '../../components/Types.tsx'
import Options from '@/components/Options.tsx'


export const Route = createLazyFileRoute('/projects/')({
  component: RouteComponent,
})

export const projectsFolder: Folder = {
    title: 'Projects',
    url: '/projects',
    options : [],
    parent : '/',

}


function RouteComponent() {
  return (
    <Options folder={projectsFolder}/>
  )
}
