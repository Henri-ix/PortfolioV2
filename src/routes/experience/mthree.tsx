import { createFileRoute } from '@tanstack/react-router'
import type {File, experience} from '../../components/Types'
import ExperienceHeader from '@/dirs/experience/ExperienceHeader'


export const Route = createFileRoute('/experience/mthree')({
  component: RouteComponent,
})






export const MthreeFile: File = {
    title: 'Mthree',
    url: '/experience/mthree',
}

const Details: experience = {
    file:MthreeFile,
    jobTitle: "Software Developer Trainee",
    date: "August 2024 – October 2024"
} 


  

export function RouteComponent() {
  
  return(
    <div className='text-yellow-400 m-10'>
        <ExperienceHeader Details={Details}/>
        <ul className='text-lg m-5 max-w-300'>
            <li className='m-5'>
                {`> Completed intensive training program in Python and React, earning certifications and building proficiency in
                full-stack development.`}
            </li>
            <li className='m-5'>
                {`> Applied industry best practices in clean code, debugging, and collaborative version control using Git`}
            </li>
            <li className='m-5'>
                {`> Delivered small-scale projects under tight deadlines, simulating client-facing environments and presenting technical solutions.`}
            </li>
        </ul>
    </div>
  )
}

