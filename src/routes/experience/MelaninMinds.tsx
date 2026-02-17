import { createFileRoute } from '@tanstack/react-router'
import type {File, experience} from '../../components/Types'
import ExperienceHeader from '@/dirs/experience/ExperienceHeader'

export const Route = createFileRoute('/experience/MelaninMinds')({
  component: RouteComponent,
})






export const MelaninMindsFile: File = {
    title: 'Melanin Minds AI',
    url: '/experience/MelaninMinds',
}

const Details: experience = {
    file: MelaninMindsFile,
    jobTitle: "Software Engineer",
    date: "April 2025– January 2026"
} 


  

export function RouteComponent() {
  
  return(
    <div className='text-yellow-400 m-10'>
        <ExperienceHeader Details={Details}/>
        <ul className='text-lg m-5 max-w-300'>
            <li className='m-5'>
                {`> Built and optimized mobile interfaces in React Native, improving usability and reducing input errors through
                    conditional rendering, streamlined navigation, and responsive design.`}
            </li>
            <li className='m-5'>
                {`>  Developed and deployed 10+ Restful API endpoints with Django, enabling fast, reliable communication between mobile apps and backend services; reduced load times and API error rates.`}
            </li>
            <li className='m-5'>
                {`> Designed scalable relational database schema with 7+ interconnected tables, ensuring data integrity and supporting future feature expansion through normalized structures.`}
            </li>
            <li className='m-5'>
                {`>  Delivered full-stack features independently end-to-end, integrating front-end and backend components to create seamless user experiences and reduce development bottlenecks.`}
            </li>
            <li className='m-5'>
                {`>  Collaborated effectively in Agile sprints, using Git for version control and task-tracking tools to manage progress and coordinate with cross-functional teams.`}
            </li>
        </ul>
    </div>
  )
}