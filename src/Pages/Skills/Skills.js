import React from 'react';
import HTML from '../../Assets/html.svg'
import CSS from '../../Assets/css.svg'
import JS from '../../Assets/javascript.svg'
import Firebase from '../../Assets/firebase.svg'
import VS from '../../Assets/vscode.svg'
import SASS from '../../Assets/sass.svg'
import ReactJs from '../../Assets/react.svg'
import JQ from '../../Assets/jquery.svg'
import Bootstrap from '../../Assets/Bootstrap_logo.svg.png'
import TWCSS from '../../Assets/Tailwind_CSS_Logo.svg.png'
import mongo from '../../Assets/mongodb.svg'
import Jwt from '../../Assets/jwt-logo-65D86B4640-seeklogo.com.png'
import ANT from '../../Assets/ant-design-svgrepo-com.svg'
import Swiper from '../../Assets/swiper.svg'



import './Skills.css'

const Skills = () => {
    return (
        <div id="skills" className='mx-auto md:pt-12 md:mb-12 lg:pb-24 lg:pt-40 pt-8 pb-8 font'>
            <h2 className='mx-auto text-4xl font-medium text-start pl-10 text-purple-400'>SKILLS</h2>
            <ul class="main text-center gap-y-6 md:mt-6 mt-3 lg:mt-12 text-gray-400 px-8 text-sm">
                <li class="img-text text-center mx-auto the-div m-auto">
                  <img alt="HTML" src={HTML} />
                  <p className='text-size'>HTML</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="CSS" src={CSS} />
                  <p className='text-size'>CSS</p>
                </li>
                <li class="img-text mx-auto  text-center the-div m-auto">
                  <img alt="CSS" src={Bootstrap} />
                  <p className='text-size'>Bootstrap</p>
                </li>
                <li class="img-text mx-auto  text-center the-div m-auto">
                  <img alt="CSS" src={TWCSS} />
                  <p className='text-size'>Tailwind CSS</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="SASS" src={SASS} />
                  <p className='text-size'>SASS</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="JS" src={JS} />
                  <p className='text-size'>Javascript</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="JQ" src={mongo} />
                  <p className='text-size'>MongoDB</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="React js" src={ReactJs} />
                  <p className='text-size'>React Js</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="Firebase" src={Firebase} />
                  <p className='text-size'>Firebase</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="JQ" src={JQ} />
                  <p className='text-size'>JQuery(plug)</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="JQ" src={Jwt} />
                  <p className='text-size'>JWT</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="JQ" src={ANT} />
                  <p className='text-size'>Ant design</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="JQ" src={Swiper} />
                  <p className='text-size'>Swiper JS</p>
                </li>
                <li class="img-text mx-auto text-center the-div m-auto">
                  <img alt="VS" src={VS} />
                  <p className='text-size'>VS Code</p>
                </li>
              
            </ul>
        </div>
    );
};

export default Skills;