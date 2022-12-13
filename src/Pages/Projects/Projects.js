import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectsCard from './ProjectsCard';


const Projects = () => {
     const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://mohammad-jion-server.vercel.app/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            });
    }, [])
    return (
        <div id='projects' className='mx-auto md:pt-12 md:pb-12 pb-8 pt-8 lg:pt-24 lg:pb-24 font'>
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-medium text-start pl-8 pb-5 text-purple-400">PERSONAL-PROJECTS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto px-8 md:mt-4 lg:mt-8 mt-2'>

                {
                    projects?.map(project => <ProjectsCard key={project.id} project={project}></ProjectsCard>)
                }


                {/* <div className="shadow-md">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={CARBS} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 p-5">
                            <h2 className="leading-snug text-gray-400 font-normal text-xl">Second hand car buy-sell website.</h2>
                            <a rel="noopener noreferrer" href="https://carbs-1687c.web.app/" className="block text-purple-400 text-2xl font-normal">

                                <p>Live Link</p>
                            </a>
                        </div>
                    </div>
                </div>    
                <div className="shadow-md">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={BJM} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 p-5">
                            <h2 className="leading-snug text-gray-400 font-normal text-xl">Cleaning Service Website.</h2>
                            <a rel="noopener noreferrer" href="https://bj-m-a19f3.web.app/" className="block text-purple-400 text-2xl font-normal">

                                <p>Live Link</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="shadow-md">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={WALMART} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 p-5">
                            <h2 className="leading-snug text-gray-400 font-normal text-xl">E-commerce Website</h2>
                            <a rel="noopener noreferrer" href="https://ahadhasanjion.github.io/Wolmart/" className="block text-purple-400 text-2xl font-normal">

                                <p>Live Link</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="shadow-md">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={GYM} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 p-5">
                            <h2 className="leading-snug text-gray-400 font-normal text-xl">Gym Website.</h2>
                            <a rel="noopener noreferrer" href="https://ahadhasanjion.github.io/Gymnesiam/" className="block text-purple-400 text-2xl font-normal">

                                <p>Live Link</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="shadow-md">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={NIHO} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 p-5">
                            <h2 className="leading-snug text-gray-400 font-normal text-xl">Ed Website.</h2>
                            <a rel="noopener noreferrer" href="https://niho-723ae.web.app/" className="block text-purple-400 text-2xl font-normal">

                                <p>Live Link</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="shadow-md">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={AHJ} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 p-5">
                            <h2 className="leading-snug text-gray-400 font-normal text-xl">Quiz Website</h2>
                            <a rel="noopener noreferrer" href="https://darling-biscotti-b40b34.netlify.app/" className="block text-purple-400 text-2xl font-normal">

                                <p>Live Link</p>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;