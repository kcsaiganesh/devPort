import React from 'react'
import SplitType from 'split-type'
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { animate, stagger } from 'motion';
import { BiLogoReact, BiLogoGithub, BiLogoNodejs, BiLogoMongodb, BiLogoTailwindCss } from 'react-icons/bi'

const Landingpage = () => {
    useEffect(() => {

        const heading1 = new SplitType('#heading1');
        const heading2 = new SplitType('#heading2');
        const paragarph = new SplitType('#para1');
        const heroElements = [...heading1.words, ...paragarph.lines, ...heading2.words];
        animate(heroElements, { y: [24, 0], opacity: [0, 1] }, { duration: 0.8, delay: stagger(0.08) });
        // animate(
        //     "#react",
        //     { rotate: 360 },
        //     {
        //         duration: 0.9,
        //         easing: "linear",
        //         repeat: Infinity,
        //         direction: "normal"
        //     });
    }, []);




    return (
        <div className="bg-gradient-to-r from-[#793FDF] to-[#7091F5] select-none  ">
            <div className="m-0 flex justify-between h-auto  content-center">
                <div className="justify-item-start flex flex-col space-y-6 ml-12 mt-16 ext-stroke-4 text-stroke-blue text-fill-blue  ">
                    <h3 id='heading1' className="text-7xl text-left  font-bold justify-self-start tracking-wide text-white px-2 bg-blend-multiply underline hover:underline-offset-10">KC Sai <span className="text-orange-500">Ganesh </span>!</h3>
                    <p id='para1' className=" text-3xl text-left tracking-wide text-primary leading-relaxed line-clamp-4">
                        MERN stack developer with a thirst for adventure. <br />
                        I love to build and explore,
                        <br />both in code and in the real world.
                    </p>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className="order-last self-center mr-64 mt-24 relative  z-0 ">

                    <img alt="imgprofile" src='https://avatars.githubusercontent.com/u/75118214?v=4' className="w-80 h-80 shadow-2xl  shadow-sky-50/30 rounded-full border-spacing-1 border-2 fill-white ">

                    </img>
                </motion.div>

            </div>
            <h2 className="font-extrabold text-5xl flex  underline underline-offset-8  left-0 text-blue-950 m-8 ">Personal information</h2>
            <div className=" justify-items-center ">
                <div class=" flex item-strech card rounded-xl ml-7  backdrop-blue-sm  drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white bg-white/30  w-11/12 text-left justify-between ">
                    <table className="table-auto border-collapse text-xl ml-12 ">
                        <tbody>
                            <tr>
                                <td className="font-bold">Name :</td>
                                <td>KC Sai Ganesh.</td>
                            </tr>
                            <br />
                            <tr>
                                <td className="font-bold">Education: </td>
                                <td>Bca,Banglore University.</td>
                            </tr>
                            <br />
                            <tr>
                                <td className="font-bold">Email :</td>
                                <td>kcsaiganesh@gmail.com.</td>
                            </tr>
                            <br />
                            <tr>
                                <td className="font-bold">D.O.B :</td>
                                <td>06/08/2002.</td>
                            </tr>
                            <br />
                            <tr>
                                <td className="font-bold">live :</td>
                                <td>Banglore.</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="right-0 end-0 justify-center self-center ml-24 ">
                        <h4 className="font-extrabold text-2xl mb-1 -mt-10 underline underline-offset-8  text-blue-950">About me</h4>
                        <p className="text-secondary m-3 text-xl leading-loose" >I'm Kc Sai Ganesh, Enthusiastic BCA graduate with a passion for web development and software engineering. I love building things, and I'm always looking for new and innovative ways to use technology to solve problems. I'm proficient in a range of programming languages and technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I'm also dedicated to continuous learning and staying up-to-date with industry trends.</p>
                    </div>
                </div>


            </div>
            <div className=''>
                <h2 className="font-extrabold text-5xl flex ml-12 underline underline-offset-8 mt-3 text-blue-950 ">Skill-Set</h2>
                <div className="flex flex-row justify-around items-center mt-12  content-evenly" >
                    <div class=" card rounded-lg pb-8 backdrop-blue-sm  justify-center  drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white bg-white/30  w-64 mb-6 ">
                        <BiLogoReact id='react' className="h-24 w-24  " />
                        <h3 className="font-bold text-2xl mb-2 text-primary">React</h3>

                        <p className="text-secondary"> React is a popular JavaScript library for building user interfaces. It is declarative, efficient, and flexible.</p>

                    </div>
                    <div class=" card rounded-lg pb-8 backdrop-blue-sm  justify-center drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white bg-white/30  w-64 mb-6 ">
                        <BiLogoGithub className="h-24 w-24  " /> <h3 className="font-bold text-2xl mb-2 text-primary">Github</h3>

                        <p className="text-secondary">GitHub is a popular code hosting platform that allows developers to store, share, and manage their code.</p>

                    </div>
                    <div class=" card rounded-lg pb-8 backdrop-blue-sm  justify-center drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white bg-white/30  w-64 mb-6 ">
                        <BiLogoMongodb className="h-24 w-24  " />  <h3 className="font-bold text-2xl mb-2 text-primary">Mongodb</h3>

                        <p className="text-secondary">MongoDB is a NoSQL database that is document-oriented and JavaScript-based. It is scalable and cloud-native.</p>

                    </div>

                    <div class="card rounded-lg pb-8 backdrop-blue-sm  justify-center drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white  bg-white/30  w-64 mb-6 ">
                        <BiLogoNodejs className="h-24 w-24  " /><h3 className="font-bold text-2xl mb-2 text-primary">Node</h3>

                        <p className="text-secondary"> Node.js is a JavaScript runtime environment that is cross-platform, event-driven, scalable, asynchronous, and performant.</p>

                    </div>
                    <div class="card rounded-lg pb-8 backdrop-blue-sm  justify-center drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white  bg-white/30  w-64 mb-6 ">
                        <BiLogoTailwindCss className="h-24 w-24  " /><h3 className="font-bold text-2xl mb-2 text-primary">Tailwind css</h3>

                        <p className="text-secondary"> Tailwind CSS is highly customizable and makes development and responsiveness easy.</p>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Landingpage
