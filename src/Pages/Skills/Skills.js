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
        <div id="skills" className='mx-auto pt-24 pb-24'>
            <h2 className='mx-auto text-4xl text-purple-400 font-medium text-start pl-10'>SKILLS</h2>
            <div class="grid lg:grid-cols-7 md:grid-cols-5 grid-cols-3 text-center gap-y-6 mt-8">
                <div class="img-text text-center mx-auto the-div">
                  <img alt="HTML" src={HTML} />
                  <p>HTML</p>
                </div>
                <div class="img-text mx-auto text-center the-div">
                  <img alt="CSS" src={CSS} />
                  <p>CSS</p>
                </div>
                <div class="img-text mx-auto  text-center the-div">
                  <img alt="CSS" src={Bootstrap} />
                  <p>Bootstrap</p>
                </div>
                <div class="img-text mx-auto  text-center the-div">
                  <img alt="CSS" src={TWCSS} />
                  <p>Tailwind CSS</p>
                </div>
                <div class="img-text mx-auto text-center the-div">
                  <img alt="SASS" src={SASS} />
                  <p>SASS</p>
                </div>
                <div class="img-text mx-auto text-center the-div">
                  <img alt="JS" src={JS} />
                  <p>Javascript</p>
                </div>
                <div class="img-text mx-auto text-center the-div">
                  <img alt="JQ" src={mongo} />
                  <p>MongoDB</p>
                </div>
                <div class="img-text mx-auto text-center the-div">
                  <img alt="React js" src={ReactJs} />
                  <p>React Js</p>
                </div>
                <div class="img-text mx-auto text-center the-div">
                  <img alt="Firebase" src={Firebase} />
                  <p>Firebase</p>
                </div>
                <div class="img-text mx-auto text-center the-div">
                  <img alt="JQ" src={JQ} />
                  <p>JQuery Plugin</p>
                </div>
                <div class="img-text mx-auto  the-div">
                  <img alt="JQ" src={Jwt} />
                  <p>JWT</p>
                </div>
                <div class="img-text mx-auto  the-div">
                  <img alt="JQ" src={ANT} />
                  <p>Ant design</p>
                </div>
                <div class="img-text mx-auto  the-div">
                  <img alt="JQ" src={Swiper} />
                  <p>Swiper JS</p>
                </div>
                <div class="img-text mx-auto text-center the-div">
                  <img alt="VS" src={VS} />
                  <p>VS Code</p>
                </div>
              
            </div>
        </div>
    );
};

export default Skills;