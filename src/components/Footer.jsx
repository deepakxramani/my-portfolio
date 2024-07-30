import React from 'react';
import { Link } from "react-scroll"
import { BsLinkedin, BsGithub, BsTwitterX, BsInstagram } from "react-icons/bs";


export const Footer = () => {
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        }, 
        {
            id: 3,
            link: 'portfolio'
        }, 
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    
    ]
  return (
    <footer
      name="contact"
      className="w-full h-fit
      bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      
    >
        
    <div className='mx-auto flex items-center justify-around sm:flex-row flex-col text-center m-10'>
      <div className='flex items-center justify-center flex-col'>
        <h2 className='sm:text-4xl text-3xl font-bold capitalize leading-10'>Deepak Ramani</h2>
        <p className='my-2 mx-4 sm:max-w-md sm:text-xl' style={{color:'#cacdd2'}}>"I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!"</p>
        </div>
        
        <div className='flex items-center justify-center flex-col mt-6'>
          <h2 className='font-signature sm:text-5xl text-4xl'>Get in Touch</h2>
          <div className='flex flex-row gap-4 mt-4'>
            <a href='https://www.linkedin.com/in/deepakxramani/' target='_blank' className='hover:text-cyan-500 duration-200 ease-in-out cursor-pointer'><BsLinkedin size={30} /></a>
            <a href='https://github.com/deepakxramani' target='_blank' className='hover:text-cyan-500 duration-200 ease-in-out cursor-pointer'><BsGithub size={30}/></a>
            <a href='https://x.com/deepakxramani' target='_blank' className='hover:text-cyan-500 duration-200 ease-in-out cursor-pointer'><BsTwitterX size={30} /></a>
            <a href='https://www.instagram.com/deepakxramani/' target='_blank' className='hover:text-cyan-500 duration-200 ease-in-out cursor-pointer'><BsInstagram size={30} /></a>
          </div>
      </div>

    </div>

    <div className='flex items-center justify-center'>
      <p className='sm:mt-24 sm:text-xl text-sm'>Copyright &#169; 2024 <Link to={'home'} smooth duration={500}><span className='font-semibold hover:text-cyan-500 duration-200 ease-in-out cursor-pointer'>Deepak Ramani</span></Link></p>
    </div>


    </footer>
    
  );
};
