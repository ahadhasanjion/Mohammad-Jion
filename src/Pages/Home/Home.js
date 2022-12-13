import React from 'react';
import AboutMe from '../About/AboutMe';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

import './Home.css'

const Home = () => {

    return (
        <div id='home'>
            
            <Header></Header>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
                
                {/* <Navbar></Navbar>
                <Header></Header>
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
                <Blog></Blog>
                <Contact></Contact>
                <Footer></Footer> */}
            </div>
        


    );
};

export default Home;