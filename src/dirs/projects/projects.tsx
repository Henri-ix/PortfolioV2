import type { project } from "@/components/Types";
import { vDay } from "./v-day";
import { FacialRecog } from "./facial-recog";

const projectList: project[] = [
    vDay,
    FacialRecog
    // Add more projects here as you create them
];

export default function Projects() {
    return (
        <section className="p-8">
            
            {/* The Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectList.map((proj, index) => (
                    <div 
                        key={index} 
                        className=""
                    >
                    <a href={proj.link}>
                        {/* Project Image */}
                        <div className="h-48 overflow-hidden bg-stone-800">
                            
                                <img 
                                    src={proj.imageURl} 
                                    alt={proj.title} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            
                        </div>

                        {/* Project Details */}
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-white mb-2">{proj.title}</h3>
                            <p className="text-stone-400 text-sm leading-relaxed">
                                {proj.desc}
                            </p>
                        </div>
                    </a>
                    </div>
                ))}
            </div>
        </section>
    );
}