import Typewriter from 'typewriter-effect'

export default function About(){
    return(
        <div className='flex flex-col justify-start items-start  m-10  text-yellow-400  max-w-350 '>
            <h1 className="text-3xl ">
                <Typewriter onInit={(typewriter)=>{
                typewriter.typeString(`> About Me`).start()}}/>
            </h1>
            <h2 className="text-xl m-4 " >
                Whether it be sheer coincidence, a link,  or just great luck that you've stumbled onto this portfolio it's time to introduce myself properly. My name is Ioannis Magalhaes (Pronounced Yan-Is,
                thus the use of Yan as a nickname),
                I am a Software Engineer that is currently working freelance with small business to deliver digital solutions that mainly include web/mobile applications and enhance the overall quality of the business. I enjoy tinkering with the different fields in Tech
                namely computer vision and robotics. I also enjoy adding a bit of a twist to the personal projects I work on, as you can see from this retro style portfolio made by yours truly.
            </h2>
            <h2 className="text-xl m-4">
                I have a 1st Class Honours in Computer Science (Bsc) from the university of Essex. I have multiple certifications including,  React and Python(Django), as well as an Edx certification on Autonomous Mobile Robots (ETH Zürich).
            </h2>
            <h1 className="text-3xl ">
                <Typewriter onInit={(typewriter)=>{
                typewriter.typeString(`> Skills`).start()}}/>
            </h1>
            <div className="flex flex-row  w-full justify-evenly items-center ">
                <div className='m-4'>
                    <h2 className="text-xl mb-3">{`> Full-Stack Engineering`}</h2>
                    <h3 className="text-lg ml-2 ">
                        {`> TypeScript`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> React.Js`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> React Native`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> Python (Django)`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> Restful API`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> SQL`}
                    </h3>
                </div>
                <div className='m-4'>
                    <h2 className="text-xl mb-3">
                        {`> Robotics/Computer Vision`}
                    </h2>
                    <h3 className="text-lg ml-2 ">
                        {`> ROS2 (Robot Operating System)`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> OpenCV (Yolo v11)`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> C++`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> Linux`}
                    </h3>
                    <h3 className="text-lg ml-2 ">
                        {`> Git/GitHub`}
                    </h3>
                </div>
            </div>

        </div>
    )

}

