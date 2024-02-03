import React from 'react';
import HeroImage from '../assets/HeroImage.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import TypedText from './TypedText';
import './waving-emoji.css'
import { Link } from "react-scroll"
import Tilt from 'react-parallax-tilt';



const Home = () => {
    
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
    from-black via-black to-gray-800 '>
        
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center min-h-full pt-20 px-4  md:flex-row'>
            
            <div className='flex flex-col justify-center items-center md:items-start h-full '>
                <h2 className='text-white text-3xl sm:text-4xl font-bold '>Hi There<span className="wave">👋</span>,</h2>
                <h2 className='text-3xl sm:text-6xl font-bold md:pr-32
                text-white'>
                    I'm Deepak Ramani
                </h2>

                <h2 className="text-3xl sm:text-5xl pr-2 text-white flex items-center ">
                    I'm a <span className='pl-2'><TypedText style={{ zIndex: -1000 }} /></span>
                </h2>
                
                
                

                <p className='text-gray-500  py-4 text-center md:text-start max-w-md'>
                    I have a 1 year of experience building and
                    designing web applications using technologies
                    like React, Tailwind and GraphQL.
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer' >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            
            <Tilt
            glareEnable={true} 
            glareMaxOpacity={0.8} 
            glareColor="#ffffff" 
            glarePosition="bottom" 
            glareBorderRadius="20px">
            <div className='hover:drop-shadow-2xl'>
                
            
                <img src={HeroImage} style={{width:300,}} alt="my profile"
                    className='rounded-2xl mx-auto w-2/3 md:w-full'/>
                    
                
            </div>
            </Tilt>
        </div>
    </div>
  )
}

export default Home