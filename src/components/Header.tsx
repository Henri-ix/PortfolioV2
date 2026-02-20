import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Header() {

  return (
    <div className="border-b-2 border-dashed border-yellow-400 p-2 flex justify-between">
      <pre className="font-mono text-yellow-400 leading-none text-[0.3rem] sm:text-xs md:text-sm lg:text-base">
{`██╗   ██╗ █████╗ ███╗   ██╗    ██╗   ██╗ █████╗ ███╗   ██╗
╚██╗ ██╔╝██╔══██╗████╗  ██║    ╚██╗ ██╔╝██╔══██╗████╗  ██║
 ╚████╔╝ ███████║██╔██╗ ██║     ╚████╔╝ ███████║██╔██╗ ██║
  ╚██╔╝  ██╔══██║██║╚██╗██║      ╚██╔╝  ██╔══██║██║╚██╗██║
   ██║   ██║  ██║██║ ╚████║       ██║   ██║  ██║██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝`}
      </pre>
      <div className="flex justify-between text-stone-400  text-2xl md:text-3xl lg:text-5xl transition duration-300 ease-in-out " >
          <a href="https://www.linkedin.com/in/ioannis-magalhaes-36494b195/" className="pr-2 hover:text-yellow-400 transition-colors" >
              <FaLinkedin/>
          </a>
        <a href="https://github.com/Henri-ix" className="pr-2 hover:text-yellow-400 transition-colors">
          <FaGithub/>
        </a>
        <h1></h1>
      </div>
    </div>
  )
}
