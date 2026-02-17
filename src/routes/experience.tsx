import { Outlet,createFileRoute} from '@tanstack/react-router'
import type  {File,Folder} from '../components/Types'
import Options from '@/components/Options.tsx'
import { MthreeFile } from './experience/mthree.tsx'
import { MelaninMindsFile } from './experience/MelaninMinds.tsx'
import { FreelanceFile } from './experience/Freelance.tsx'

export const Route = createFileRoute('/experience')({
  component: RouteComponent,
})


export const experienceFolder: Folder = {
    title: 'Experience',
    url: '/experience/Freelance',
    options : [FreelanceFile,MelaninMindsFile,MthreeFile],
    parent : '/',

}

function RouteComponent() {
  

  return (
    <div className='flex flex-row justify-start h-screen p-3'>
      <Options folder={experienceFolder}/>
      <Outlet/>
    </div>
  )
}

//experience sections require a seperate experience component -> future work