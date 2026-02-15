import { createLazyFileRoute } from '@tanstack/react-router'
import {File} from '../../components/Types.tsx'
import { HomeFolder } from '../index.tsx'
import Options from '@/components/Options.tsx'

export const Route = createLazyFileRoute('/about/')({
  component: RouteComponent,
})

export const aboutFile: File = {
    title: 'About',
    url: '/about',

}

function RouteComponent() {
  return (
    <Options folder={HomeFolder}/>
  )
}
