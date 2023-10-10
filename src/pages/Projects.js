import React from 'react'
import { BiLogoGithub } from 'react-icons/bi'
import Sivyathi from '../assets/sivy.png'
import Sahaseva from '../assets/sha.png'

const Projects = () => {
    return (
        <div className="bg-gradient-to-r from-[#793FDF] to-[#7091F5] h-screen pt-10 select-none ">
            <div className="space-y-12 pt-7 m-4  ">
                <div className="flex  card rounded-xl   backdrop-blue-sm  drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white bg-white/30   text-left justify-between">
                    <div className="left-0 object-left overflow-hidden z-0 rounded-md relative">
                        <img className="w-max" alt='primg' src={Sivyathi}></img>
                    </div>
                    <div className=" m-3">
                        <h3 className='font-bold text-2xl mb-2 text-blue-950'>Sivythi</h3>
                        <p className='line-clamp-4 leading-loose text-primary' >
                            Tailor-Management
                            The proposed online tailoring management system is a computerized system that aims to automate the current manual tailoring process and improve the management of information for customers and decision making. The system will allow customers to register online and submit their measurements, check the status of their orders, and get information about the cost of their garments. It will also enable the system administrator to manage customer information and update records. The system will provide data security, data integrity, and quick search capabilities, as well as a paperless environment. It will help improve the speed and efficiency of the tailoring process and provide customers with more convenience and accessibility
                        </p>
                        <p className=' right-0 text-slate-50 '>Technologies: React js,tailwind css </p>

                        <a href="/contact" className="text-blue-950  font-semibold  "> <BiLogoGithub className='w-24 h-12 mt-2' /> Source code
                        </a>
                    </div>


                </div>
                <div className="flex  card rounded-xl   backdrop-blue-sm  drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white bg-white/30   text-left justify-between">

                    <div className="m-2">
                        <h3 className='font-bold text-2xl mb-2 text-blue-950'>Sahaseva</h3>
                        <p className='line-clamp-4 leading-loose text-primary' >
                            The Community Sharing Economy Platform project aims to develop a web application that
                            facilitates resource sharing, services, and skills within a specific community. The platform
                            promotes collaboration, sustainability, and efficient utilization of available resources. Users
                            can create profiles, list their resources or services, and connect with other community
                            members to engage in sharing activities.
                        </p>
                        <p className=' right-0 text-primary '>Technologies:React js </p>

                        <a href="/contact" className="text-blue-950  font-semibold  "> <BiLogoGithub className='w-24 h-12 mt-2' /> Source code
                        </a>
                    </div>
                    <div className="left-0 object-left overflow-hidden z-0 rounded-md relative">
                        <img className="w-max" alt='primg' src={Sahaseva}></img>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects
