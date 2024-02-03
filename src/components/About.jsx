import React from "react";

const About = () => {
    return (
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800
     to-black text-white "
     >
        <div className="max-w-screen-lg p-4 mx-auto 
        flex flex-col justify-center w-full h-fit py-40">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl mt-10">
                <div><h4 className="font-bold text-2xl">CURRENT:</h4></div>
                SDE Intern @Numeric Infosystem Pvt. Ltd.
                <br />
                Role: Full Stack Web Developer
                <br />
                From: 2023 - 2024 (current)
            </p>

            <p className="text-xl mt-10">
                <div><h4 className="font-bold text-2xl">HIGHER:</h4></div>
                JIWAJI UNIVERSITY
                <br />
                Bachelor's in Computer Application
                <br />
                2021 - 2024 (expected)
                <br />
                GPA: 7.7
            </p>
            

            <br />
            <p className="text-xl mt-10">
                <div><h4 className="font-bold text-2xl">INTERMEDIATE (12th):</h4></div>
                San Marino Public Higher Secondry School
                <br />
                Commerce + Maths with 74%
            </p>
            <br />
            <p className="text-xl mt-10">
                <div><h4 className="font-bold text-2xl">PRIMARY EDUCATION (10th):</h4></div>
                San Marino Public Higher Secondry School
                <br />
                - with 72%
            </p>
            
        </div>
    </div>)
}

export default About;