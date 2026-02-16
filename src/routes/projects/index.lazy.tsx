import { createLazyFileRoute } from '@tanstack/react-router'
import type {File,Folder} from '../../components/Types'
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
     <div className='flex flex-row justify-between h-screen p-3'>
      <Options folder={projectsFolder}/>
    </div>
  )
}
