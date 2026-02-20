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
     <div className='flex flex-col sm:flex-row justify-start h-full'>
      <Options folder={projectsFolder}/>
      <h2>Coming Soon...</h2>
    </div>
  )
}
