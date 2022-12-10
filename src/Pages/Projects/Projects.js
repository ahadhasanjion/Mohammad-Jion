import React from 'react';
import CARBS from '../../Assets/CARBS.PNG'
import BJM from '../../Assets/BJM.PNG'
import WALMART from '../../Assets/walmart.PNG'
import GYM from '../../Assets/GYM.PNG'
import NIHO from '../../Assets/NIHO.PNG'
import AHJ from '../../Assets/AHJ.PNG'



import './Projects.css'

const Projects = () => {
    return (
        <div id='projects' className='mx-auto pt-24 pb-24'>
            <h2 className="text-4xl text-purple-400 font-medium text-start pl-8 pb-5">PERSONAL-PROJECTS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto px-8 mt-2'>
                <div className="shadow-md">
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
                </div>
            </div>
        </div>
    );
};

export default Projects;