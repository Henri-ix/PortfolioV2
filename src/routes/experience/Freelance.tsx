import { createFileRoute } from '@tanstack/react-router'
import type {File, experience} from '../../components/Types'
import ExperienceHeader from '@/dirs/experience/ExperienceHeader'

export const Route = createFileRoute('/experience/Freelance')({
  component: RouteComponent,
})




export const FreelanceFile: File = {
    title: 'Freelance',
    url: '/experience/Freelance',
}

const Details: experience = {
    file: FreelanceFile,
    jobTitle: "Full-Stack Web Developer",
    date: "December 2025– Present"
} 


  

export function RouteComponent() {
  
  return(
    <div className='text-yellow-400 m-10'>
        <ExperienceHeader Details={Details}/>
        <ul className='text-lg m-5 max-w-300'>
            <li className='m-5'>
                {`> Interviewed clients to gain an understanding of what their needs and requirements are for the product`}
            </li>
            <li className='m-5'>
                {`>  Developed Solutions that increased the traffic of small businesses by 100% through SEO and setting up their business with google business.`}
            </li>
            <li className='m-5'>
                {`> Developed Solutions that increased the traffic of small businesses by 100% through SEO and setting up their business with google business.`}
            </li>
            <li className='m-5'>
                {`>   Increased communication between client and their customers by including links to social media and the clients contact number`}
            </li>
            <li className='m-5'>
                {`>  Created Scalable and future proof solutions by maintaining different react components for different sections, allowing quick debugging and efficient section editing.`}
            </li>
            <li className='m-5'>
                {`> Maintained a well-documented code-base within a git repository to manage version control and any required hand-overs.`}
            </li>
        </ul>
    </div>
  )
}