import React from 'react';
import './Header.css'
import Linkedin from '../../Assets/icons8-linkedin.svg'
import github from '../../Assets/icons8-github.svg'
import TypeWriterEffect from 'react-typewriter-effect';
import abt from '../../Assets/coding-removebg-preview.png';
import Resume from '../../Assets/last.pdf';




const Header = () => {
    return (
        <div className='pl-12 md:pt-14 md:pb-14 pt-7 pb-7 lg:pt-28 lg:pb-28 flex lg:flex-row md:flex-row items-center justify-between font'>
            <div className='lg:w-2/4 md:w-w-2/4 sm:w-full'>
                <div>
                    <p className='text-3xl text-gray-400'>HI THERE! I'M</p>
                    <TypeWriterEffect
                        textStyle={{
                            color: '#C084FC',
                            fontWeight: 500,
                            fontSize: '2.5em',
                        }}
                        startDelay={100}
                        cursorColor="#C084FC"
                        text="Mohammad Jion"
                        typeSpeed={100}
                    />
                    <p className='text-3xl pt-3 text-gray-400'>A Front-End Web Developer passionate about creating good responsive and  User-Experience website.</p>
                </div>
                <div className='flex items-center mt-5'>
                    <a class=" resume-link inline-block bg-purple-400 rounded-full bg-gradient-to-r p-[2px] tex focus:outline-none focus:ring active:text-opacity-75" download="PORTFOLIO" href={Resume}>
                        <span class="block rounded-full  px-8 py-3 text-sm font-medium hover:bg-transparent text-white">
                            Resume
                        </span>
                    </a>

                    <ul class="flex ml-5">
                        <li>
                            <a href="https://www.linkedin.com/in/mohammadjion/" alt="Linkedin" target="_blank"><img className='img-link' src={Linkedin} /></a>
                        </li>
                        <li>
                            <a href="https://github.com/ahadhasanjion" target="_blank"><img className='img-link' src={github} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='lg:w-2/4 hidden md:block lg:block'>
                <img  src={abt}/>
            </div>
        </div>
    );
};

export default Header;