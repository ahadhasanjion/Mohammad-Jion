import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ project }) => {
    const { liveLink, name, img, id } = project;

    return (
        <div>
            <div className="shadow-md">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </div>

                    <div className="flex items-center justify-between p-5 bg">
                        <h2 className="leading-snug text-gray-400 font-normal text-xl">{name}</h2>

                        <div className='flex items-center justify-between'>
                            <a href={liveLink} className=' mr-4  ' target="_blank"> <span class="text-purple-400 text-sm font-medium">
                                Live Link
                            </span></a>
                            <Link className="    " to={`/details/${id}`}><span class=" text-purple-400   text-sm font-medium ">
                                Details
                            </span></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;