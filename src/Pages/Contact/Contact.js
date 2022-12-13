import React from 'react';
import'./Cantact.css'

const Contact = () => {

    return (
        
            <div id="contact" className="font text-center mt-40 mb-14 m-auto">
                
                   <h2 className="text-4xl text-purple-400 font-medium text-start mt-44 pl-12">CONTACT</h2>
                    <form action="https://formspree.io/f/mzbwnygj"  method='POST' className=" px-14 lg:w-2/4 mx-auto md:w-2/4 w-full outline-none focus:none">

                        <input type="text" required name="name" id="name" placeholder="Your Name" className="w-full px-4 py-5 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 mt-6 outline-none" />


                        <input type="email" required name="email" id="email" placeholder="Your Email" className="w-full px-4 py-5 rounded-md dark:border-gray-700 dark:bg-gray-900 outline-none dark:text-gray-100 focus:dark:border-violet-400 mt-6" />



                        <input type="text" required name="subject" id="subject" placeholder="Subject" className="w-full px-4 py-5 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 mt-6 outline-none" />

                        <textarea name='message' required className="textarea w-full px-4 py-5 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 mt-6 sm:mb-4 outline-none out outline-offset-0" placeholder="Message"></textarea>

                        <button className='resume-link inline-block bg-purple-400 rounded-full   focus:outline-none focus:ring active:text-opacity-75'> <span class="block rounded-full text-white  px-8 py-3 text-sm font-medium hover:bg-transparent">
                            SEND
                        </span></button>
                    </form>
            </div>
    
    );
};

export default Contact;