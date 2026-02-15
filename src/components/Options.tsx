import './Types.tsx'
import { Link } from '@tanstack/react-router'

export default function Options({folder}:{folder:Folder}){


    return(
        <div className="border-r-2 border-dashed border-yellow-400 w-1/6 text-yellow-400">
            {folder.parent && (
                <Link to={folder.parent}>
                    Back
                </Link>
            )}
            {folder.options.map((file,index)=>
                <Link key={index} to={file.url}>
                    <h2>
                        {file.title}
                    </h2>
                </Link>
            )}
        </div>
    )
}