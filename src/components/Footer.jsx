import React from 'react';
import { Link } from "react-scroll"

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
      className="w-full 
      bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      style={{height:'60vh'}}
    >
        
    <div className='mx-auto flex items-center justify-center flex-col text-center m-10'>
        <h2 className='text-4xl font-bold capitalize leading-10'>Deepak Ramani</h2>
        <p className='my-2 mx-auto' style={{color:'#cacdd2'}}>"I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!"</p>
        <div>
        <ul className="flex flex-col text-center">
        {links.map(({id,link})=>(
        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-xl
             text-gray-500 hover:scale-105 duration-200 hover:text-cyan-500">
          <Link to={link} smooth duration={500} >
            {link}
            </Link>
        </li>

      ))}

      </ul>
        </div>

    </div>


    </footer>
    
  );
};
