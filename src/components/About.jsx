import React from "react";
import { useEffect } from "react";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaRocket } from "react-icons/fa";

import ScrollReveal from 'scrollreveal'; 

const About = () => {
    useEffect(()=>{
        ScrollReveal().reveal('.about', {origin: 'top',distance: '80px',duration: 2000, delay:100,reset: true });
        ScrollReveal().reveal('.timeline-item', {origin: 'left',distance: '50px',duration: 1500, delay:200,reset: true });
        ScrollReveal().reveal('.journey-path', {origin: 'bottom',distance: '30px',duration: 1800, delay:300,reset: true });
    },[]) 

    const timelineData = [
        {
            year: "2025",
            title: "SDE-1 (Software Engineer)",
            company: "Tech Matpatra Pvt. Ltd.",
            role: "Frontend Developer",
            duration: "Jan 2025 - Present",
            icon: <FaRocket className="text-blue-400" />,
            type: "professional",
            status: "current"
        },
        // {
        //     year: "2023",
        //     title: "Web Developer Intern",
        //     company: "Bharat Intern",
        //     role: "Full Stack Developer",
        //     duration: "July 2023 - August 2023 (1 Month)",
        //     icon: <FaBriefcase className="text-green-400" />,
        //     type: "professional",
        //     status: "completed"
        // },
        {
            year: "2023-2024",
            title: "Full Stack Developer Intern",
            company: "Numeric Infosystem Pvt. Ltd.",
            role: "Full Stack Developer",
            duration: "June 2023 - Jan 2024 (8 Months)",
            icon: <FaBriefcase className="text-green-400" />,
            type: "professional",
            status: "completed"
        },
        {
            year: "2021-2024",
            title: "Bachelor's in Computer Application",
            company: "Jiwaji University Gwalior",
            duration: "2021 - 2024",
            icon: <FaGraduationCap className="text-purple-400" />,
            type: "education",
            status: "completed"
        },
        {
            year: "2021",
            title: "Intermediate (12th)",
            company: "San Marino Public Higher Secondary School",
            role: "Commerce + Maths",
            duration: "",
            icon: <FaGraduationCap className="text-yellow-400" />,
            type: "education",
            status: "completed"
        },
        {
            year: "2019",
            title: "Primary Education (10th)",
            company: "San Marino Public Higher Secondary School",
            role: "",
            duration: "",
            icon: <FaGraduationCap className="text-red-400" />,
            type: "education",
            status: "completed"
        }
    ];

    return (
        <div name="about" className="w-full min-h-screen relative overflow-hidden">
            {/* Animated Background Elements - Match Home Component */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 pb-20">
                <div className="max-w-6xl p-4 mx-auto flex flex-col justify-center w-full h-full about">
                    <div className="pb-12 about">
                        <p className="text-5xl font-bold inline border-b-4 border-cyan-500 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                            My Journey
                        </p>
                        <p className="text-xl mt-4 text-gray-300">
                            Tracing my path from education to professional growth
                        </p>
                    </div>

                    {/* Timeline Map View */}
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 rounded-full journey-path"></div>
                        
                        {/* Timeline Items */}
                        <div className="space-y-12 ml-4 md:ml-0">
                            {timelineData.map((item, index) => (
                                <div key={index} className={`timeline-item relative flex items-center ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}>
                                    {/* Timeline Node */}
                                    <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10 ${
                                        item.status === 'current' 
                                            ? 'animate-pulse' 
                                            : ''
                                    }`}>
                                        <div className={`w-6 h-6 rounded-full border-4 ${
                                            item.status === 'current' 
                                                ? 'border-cyan-400 bg-cyan-600' 
                                                : item.type === 'professional' 
                                                ? 'border-green-400 bg-green-600' 
                                                : 'border-purple-400 bg-purple-600'
                                        }`}></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-5/12 ${
                                        index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
                                    }`}>
                                        <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 ${
                                            item.status === 'current' 
                                                ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                                                : item.type === 'professional' 
                                                ? 'border-green-500' 
                                                : 'border-purple-500'
                                        } hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
                                            {/* Year Badge */}
                                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                                                item.status === 'current' 
                                                    ? 'bg-cyan-500/20 text-cyan-300' 
                                                    : item.type === 'professional' 
                                                    ? 'bg-green-500/20 text-green-300' 
                                                    : 'bg-purple-500/20 text-purple-300'
                                            }`}>
                                                {item.icon}
                                                <span className="ml-2">{item.year}</span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold mt-4 text-white">
                                                {item.title}
                                            </h3>

                                            {/* Company/Institution */}
                                            <p className="text-lg text-cyan-300 mt-2 font-semibold">
                                                {item.company}
                                            </p>

                                            {/* Role/Details */}
                                            {item.role && (
                                                <p className="text-gray-300 mt-2">
                                                    {item.role}
                                                </p>
                                            )}

                                            {/* Duration */}
                                            {item.duration && (
                                                <p className={`text-sm mt-3 font-semibold ${
                                                    item.status === 'current' 
                                                        ? 'text-cyan-400' 
                                                        : 'text-gray-400'
                                                }`}>
                                                    {item.duration}
                                                </p>
                                            )}

                                            {/* Status Badge */}
                                            {item.status === 'current' && (
                                                <div className="inline-flex items-center mt-3 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                                                    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></div>
                                                    Current Position
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Start Point */}
                        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -bottom-4 z-10">
                            <FaMapMarkerAlt className="text-2xl text-red-400" />
                        </div>
                    </div>

                    {/* Journey Summary */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl font-bold text-cyan-400">2+</div>
                            <div className="text-gray-300 mt-2">Years Experience</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl font-bold text-green-400">3</div>
                            <div className="text-gray-300 mt-2">Companies Worked</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
                            <div className="text-3xl font-bold text-purple-400">5+</div>
                            <div className="text-gray-300 mt-2">Projects Completed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;