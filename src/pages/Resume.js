import React from 'react';
import Ill from '../assets/illu.svg'; // or whatever the image file is named

const Resume = () => {
  return (
    <div className='bg-gradient-to-r from-[#793FDF] to-[#7091F5] select-none h-screen flex item-strech space-x-7 '>

      <div>
        <img alt='Icon' className='w-auto h-auto mt-20' src={Ill} />
      </div>
      <div className='place-content-center pt-64'>
        <a alt='' href='https://drive.google.com/file/d/1rMO43UA4gE8ey_YVE6ccMw1HIpSOQvvH/view?usp=drive_link' className='class="mb-2 flex bg-white/20 border border-white backdrop-blur-md  rounded justify-center  px-6 py-2.5 w-64 h-20  text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" className='w-12 h-12 mr-5' stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
          <span className='mt-5'>Download</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
