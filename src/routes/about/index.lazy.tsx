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
    <div className='flex flex-col sm:flex-row justify-start h-full '>
      <Options folder={BaseFolder}/>
      <About/>
    </div>
  )
}
