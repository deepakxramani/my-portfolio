import React, { useEffect } from 'react';
import HeroImage from '../assets/HeroImage.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import TypedText from './TypedText';
import './waving-emoji.css'
import { Link } from "react-scroll"
import Tilt from 'react-parallax-tilt';
import { FaCloudDownloadAlt } from "react-icons/fa";
import ScrollReveal from 'scrollreveal'; 




const Home = () => {

    useEffect(() => {
        const revealOnRefresh = () => {
            ScrollReveal().reveal('.hi-text', {origin: 'top',distance: '80px',duration: 2000,reset: true });
            ScrollReveal().reveal('.feature-name', {origin: 'top',distance: '100px',duration: 2000, delay:80,reset: true });
            ScrollReveal().reveal('.feature-role', {origin: 'top',distance: '120px',duration: 2000, delay:100,reset: true });
            ScrollReveal().reveal('.feature-info', {origin: 'top',distance: '140px',duration: 2000, delay:120,reset: true });
            ScrollReveal().reveal('.feature-btn', {origin: 'top',distance: '160px',duration: 2000, delay:140,reset: true });
            ScrollReveal().reveal('.hero-image', {origin: 'top',distance: '180px',duration: 2000, delay:160,reset: true });
        };
    
        window.addEventListener('load', revealOnRefresh);
    
        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('load', revealOnRefresh);
        };
    }, []);

   
    
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center min-h-full pt-20 px-4  md:flex-row' >
            
            <div className='flex flex-col justify-center items-center md:items-start h-full '>
                <h2 className='text-white text-3xl sm:text-4xl font-bold hi-text'>Hi There<span className="wave">👋</span>,</h2>
                <h2 className='text-3xl sm:text-6xl font-bold md:pr-32
                text-white feature-name'>
                    I'm Deepak Ramani
                </h2>

                <h2 className="text-3xl sm:text-5xl pr-2 text-white flex items-center feature-role">
                    I'm a <span className='pl-2'><TypedText style={{ zIndex: -1000 }} /></span>
                </h2>
                
                
                

                <p className='text-gray-500  py-4 text-center md:text-start max-w-md feature-info'>
                    I have a 1 year of experience building and
                    designing web applications using technologies
                    like React, Tailwind and GraphQL.
                </p>
                <div className='flex flex-row justify-between feature-btn'>
                <div className='mr-4'>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-3 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer' >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
                <div>
                    <a href='https://drive.google.com/file/d/1jAj8A9Zp6GiQEbVAS67wS7URY5RDuA7J/view?usp=drive_link' download={true} smooth duration={500} className='group text-white w-fit px-3 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer' >
                        Download CV
                        <span className='group-hover:scale-110 duration-300'>
                            <FaCloudDownloadAlt size={25} className='ml-1' />
                        </span>
                    </a>
                </div>
                </div>
            </div>
            
            <Tilt
            glareEnable={true} 
            glareMaxOpacity={0.8} 
            glareColor="#ffffff" 
            glarePosition="bottom" 
            glareBorderRadius="20px" 
            className='hero-image mt-4 sm:m-none'>
            <div className='hover:drop-shadow-2xl all ease-in-out duration-300'>
                
            
                <img src={HeroImage} style={{width:300,}} alt="my profile"
                    className='rounded-2xl mx-auto w-2/3 md:w-full'/>
                    
                
            </div>
            </Tilt>
        </div>
    </div>
  )
}

export default Home