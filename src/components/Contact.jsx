import React from 'react';
import { Slide } from "react-awesome-reveal";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit
      bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
    >
      <div
        className="flex flex-col p-4 justify-center
      max-w-screen-lg mx-auto h-fit"
      >            
      <Slide duration={0+1000} delay={50} cascade={true}>
        <div className="pb-8">
          <p
            className="text-4xl font-bold  inline border-b-4
          border-gray-500"
          >
            Contact
          </p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        </Slide>

        <Slide duration={0+1000} delay={0+100} cascade={true}>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/ad0c81f8-99cc-4635-bb2f-6229e0b524b8" method='POST' className="flex flex-col w-full md:w-1/2 h-full">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              placeholder='Enter your message'
              className="p-2
            bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue px-6
            py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
        </Slide>
      </div>
    </div>
  );
};
