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
                border-gray-500 ">
                    About
                </p>
            </div>

            <p className="text-xl mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam tempus pulvinar ligula a suscipit. Cras vel vulputate tellus. 
                Maecenas at nunc eros. Nunc non diam porta, euismod mi vitae, tristique 
                justo. In vel euismod massa, eu sollicitudin nunc. Aliquam lacinia auctor 
                sem eu blandit. Integer dapibus enim risus. Nunc sed.
            </p>

            <br />

            <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam tempus pulvinar ligula a suscipit. Cras vel vulputate tellus. 
                Maecenas at nunc eros. Nunc non diam porta, euismod mi vitae, tristique 
                justo. In vel euismod massa, eu sollicitudin nunc. Aliquam lacinia auctor 
                sem eu blandit. Integer dapibus enim risus. Nunc sed.
            </p>
        </div>
    </div>)
}

export default About;