import React from "react";
import { useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

import ScrollReveal from 'scrollreveal'; 

const About = () => {
    useEffect(()=>{
        ScrollReveal().reveal('.about', {origin: 'top',distance: '80px',duration: 2000, delay:100,reset: true });
        ScrollReveal().reveal('.item1', {origin: 'top',distance: '90px',duration: 2000, delay:110,reset: true });
        ScrollReveal().reveal('.item2', {origin: 'top',distance: '100px',duration: 2000, delay:120,reset: true });
        ScrollReveal().reveal('.item3', {origin: 'top',distance: '110px',duration: 2000, delay:130,reset: true });
        ScrollReveal().reveal('.item4', {origin: 'top',distance: '120px',duration: 2000, delay:140,reset: true });
       

    },[]) 

    return (
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800
     to-black text-white pt-28"
     >
        <div className="max-w-screen-lg p-4 mx-auto 
        flex flex-col justify-center w-full h-fit about">
            <div className="pb-8 about">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500 ">
                    About Me
                </p>
            </div>

            <p className="text-xl mt-10 item1">
                <div className="mb-2 "><h4 className="font-bold text-xl border-b-4
                border-gray-500 inline">CURRENT:</h4></div>
                <span>SDE Intern @Numeric Infosystem Pvt. Ltd.</span>
                <br />
                Role: Full Stack Web Developer
                <br />
                From: 2023 - 2024 (current)
                
            </p>
            <div className="item1"><FaArrowUpLong className="my-10 text-3xl font-bold "/></div>
            <p className="text-xl mt-10 item2">
                <div className="mb-2"><h4 className="font-bold text-xl border-b-4
                border-gray-500 inline">HIGHER:</h4></div>
                Jiwaji University Gwalior
                <br />
                Bachelor's in Computer Application
                <br />
                2021 - 2024
                <br />
                CGPA: 7.8
            </p>
            <div className="item2"><FaArrowUpLong className="my-10 text-3xl font-bold "/></div>

            <p className="text-xl mt-10 item3">
                <div className="mb-2"><h4 className="font-bold text-xl border-b-4
                border-gray-500 inline">INTERMEDIATE (12th):</h4></div>
                San Marino Public Higher Secondry School
                <br />
                Commerce + Maths 
            </p>
            <div className="item3"><FaArrowUpLong className="my-10 text-3xl font-bold "/></div>
            <p className="text-xl mt-10 item4">
                <div className="mb-2"><h4 className="font-bold text-xl border-b-4
                border-gray-500 inline">PRIMARY EDUCATION (10th):</h4></div>
                San Marino Public Higher Secondry School
                <br />
            </p>
            <div className="item4"><FaCircle className="my-10 text-xl font-bold"/></div>

        </div>
    </div>)
}

export default About;