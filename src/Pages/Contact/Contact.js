import React from 'react';

const Contact = () => {
    
    return (
        <section className='pb-24 pt-24'>
            <div id="contact" className="w-full md:w-full sm:w-full space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto text-center mt-14 mb-14">
                <h2 className="text-4xl text-purple-400 font-medium text-start pl-12">CONTACT</h2>
                <form  action="https://formspree.io/f/mzbwnygj" method='POST' className="px-14">
                    <div className='flex flex-row'>
                        <input type="text" required name="name" id="name" placeholder="Your Name" className="w-full px-4 py-5 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 mr-2 mt-6" />


                        <input type="email" required name="email" id="email" placeholder="Email Address" className="w-full px-4 py-5 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 ml-2 mt-6" />
                    </div>


                    <input type="text" required name="subject" id="subject" placeholder="Subject" className="w-full px-4 py-5 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 mt-6" />

                    <textarea name='message' required className="textarea w-full mt-6 py-5 sm:mb-4" placeholder="Bio"></textarea>

                    <button className='resume-link inline-block bg-purple-400 rounded-full   focus:outline-none focus:ring active:text-opacity-75'> <span class="block rounded-full text-white  px-8 py-3 text-sm font-medium hover:bg-transparent">
                        SEND
                    </span></button>
                    
                   
                    
                </form>
            </div>
        </section>
    );
};

export default Contact;