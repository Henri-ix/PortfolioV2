import { createLazyFileRoute } from '@tanstack/react-router'
import  type {File} from '../../components/Types'
import { BaseFolder } from '../index.tsx'
import Options from '@/components/Options.tsx'
import About from '@/dirs/about.tsx'

export const Route = createLazyFileRoute('/about/')({
  component: RouteComponent,
})

export const aboutFile: File = {
    title: 'About',
    url: '/about',

}

function RouteComponent() {
  return (
    <div className='flex flex-row justify-start h-screen p-3'>
      <Options folder={BaseFolder}/>
      <About/>
    </div>
  )
}
