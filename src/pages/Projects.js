import React from 'react'

const Projects = () => {
    return (
        <div className="bg-gradient-to-r from-[#793FDF] to-[#7091F5] h-screen pt-10">
            <div className="space-y-6 pt-7  ">
                <h3>Projects</h3>
                <div className="flex item-strech card rounded-xl ml-7  backdrop-blue-sm  drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white bg-white/30  w-11/12 text-left justify-between">
                    <div className="left-0 object-left overflow-hidden z-0 rounded-md relative">
                        <img className="" alt='primg' src='https://images.pexels.com/photos/5220/water-sign-arrow-direction.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>
                    </div>
                    <div className="w-1/2">
                        <h3 className='font-bold text-2xl mb-2 text-primary'>Project Name</h3>
                        <p className='line-clamp-4 leading-loose' >
                            This will render a heading with a 2px white stroke and no fill. The text will be the same color as the background of the element.

                            You can customize the stroke width and color to achieve the desired effect.

                            Here is an example of how to create a text luminocent effect with a different stroke width and color:
                        </p>
                        <a className="flex hover:bg-white  w-fit bg-slate-200 mt-24 rounded-lg space-x-4" href="https://heroicons.com/" alt="scodel"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                            Sourcecode</a>
                    </div>


                </div>
                <div className="flex item-strech card rounded-xl ml-7  backdrop-blue-sm  drop-shadow-2xl h-80 shadow-lg shadow-blue-500/50  border border-white bg-white/30  w-11/12 text-left justify-between">
                    <div className="left-0 object-left overflow-hidden z-0 rounded-md relative">
                        <img className="" alt='primg' src='https://images.pexels.com/photos/5220/water-sign-arrow-direction.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>
                    </div>
                    <div className="w-1/2">
                        <h3 className='font-bold text-2xl mb-2 text-primary'>Project Name</h3>
                        <p className='line-clamp-4 leading-loose' >
                            This will render a heading with a 2px white stroke and no fill. The text will be the same color as the background of the element.

                            You can customize the stroke width and color to achieve the desired effect.

                            Here is an example of how to create a text luminocent effect with a different stroke width and color:
                        </p>
                        <p className='m-2 right-0'>Technologies:React js </p>

                        <a className="flex hover:bg-white  w-fit bg-slate-200 mt-12 rounded-lg space-x-4" href="https://heroicons.com/" alt="scodel"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                            Sourcecode</a>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects
