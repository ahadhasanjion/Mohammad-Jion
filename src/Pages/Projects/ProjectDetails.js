import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import './Projects.css'

const ProjectDetails = () => {
    const projectDetails = useLoaderData();
    const { img1, img2, img3, details, name, liveLink, clientLink  } = projectDetails;
    return (
        <div className='mx-14 m-auto m:mx-auto'>
            <h2 className='text-center font-medium text-purple-400 text-3xl mt-5'>{name}</h2>
            <div className='flex items-center justify-center mt-3 text-purple-400 text-xl'>
                <a className='mr-4' href={liveLink}>Live Link</a>
                <a className='ml-4' href={clientLink}>Code Link</a>

                </div>

            <div className='mx-auto grid lg:grid-cols-3 md:grid-cols-2 mt-16'>
                
                    <img  className='img-height mx-auto mr-2' src={img1} alt="Shoes" />

                    <img className='img-height mx-auto mr-2'  src={img2} alt="Shoes" />
                
                    <img  className='img-height mx-auto'  src={img3} alt="Shoes" />
            
            </div>
            <div>
                <div className="px-20 text-gray-400 text-xl my-8">
                    {
                        details.map(details => <li>{details}</li>)
                    } 
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;