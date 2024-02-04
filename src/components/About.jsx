import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const About = () => {
    return (
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800
     to-black text-white pt-28"
     >
        <div className="max-w-screen-lg p-4 mx-auto 
        flex flex-col justify-center w-full h-fit ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl mt-10">
                <div className="mb-2"><h4 className="font-bold text-xl border-b-4
                border-gray-500 inline">CURRENT:</h4></div>
                <span>SDE Intern @Numeric Infosystem Pvt. Ltd.</span>
                <br />
                Role: Full Stack Web Developer
                <br />
                From: 2023 - 2024 (current)
                
            </p>
            <FaArrowUpLong className="my-10 text-3xl font-bold"/>
            <p className="text-xl mt-10">
                <div className="mb-2"><h4 className="font-bold text-xl border-b-4
                border-gray-500 inline">HIGHER:</h4></div>
                Jiwaji University Gwalior
                <br />
                Bachelor's in Computer Application
                <br />
                2021 - 2024 (expected)
                <br />
                GPA: 7.7
            </p>
            <FaArrowUpLong className="my-10 text-3xl font-bold"/>

            <p className="text-xl mt-10">
                <div className="mb-2"><h4 className="font-bold text-xl border-b-4
                border-gray-500 inline">INTERMEDIATE (12th):</h4></div>
                San Marino Public Higher Secondry School
                <br />
                Commerce + Maths with 74%
            </p>
            <FaArrowUpLong className="my-10 text-3xl font-bold"/>
            <p className="text-xl mt-10">
                <div className="mb-2"><h4 className="font-bold text-xl border-b-4
                border-gray-500 inline">PRIMARY EDUCATION (10th):</h4></div>
                San Marino Public Higher Secondry School
                <br />
                - with 72%
            </p>
            <FaCircle className="my-10 text-xl font-bold"/>

        </div>
    </div>)
}

export default About;