import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import info from '../data/info.json';
import '../assets/css/home.css';
import {
  FaMailBulk,
  FaMobile,
  FaMapPin,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='flex flex-col w-full h-screen bg-[#0a192f] md:flex md:flex-row '>
      {/* Container */}
      <div className='max-w-3xl mx-auto pl-20 pr-8 flex flex-col justify-center h-full mt-5'>
        <p className='text-amber-400'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
          {info.name}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a {info.title}
        </h2>
        <p className='text-[#9ba6c9] py-4 max-w-[100%] md:max-w-[700px]'>
          {info.description}
        </p>
        <div>
          <Link to='work' smooth={true} duration={500} className=' hidden text-white w-[160px] border-2 px-6 py-3 my-2 md:flex items-center hover:bg-amber-400 hover:border-amber-400'>
            View Work
            <span className='group-hover:rotate-90 duration-300' >
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
      <div className='image h-full mx-auto max-w-[1000px] md:mx-auto md:px-8 md:flex md:flex-col md:justify-center '>
        <img className="w-[300px] md:w-[400px] shadow-md shadow-amber-400" src={info.pickture} alt="pick-user" />
        <div className='pt-6 pl-10 mx-auto flex flex-col'>
          <div className='text-[#9ba6c9]  flex flex-row'>
            <FaMailBulk /><p className='pl-4'>{info.email}</p>
          </div>
          <div className='text-[#9ba6c9]  flex flex-row'>
            <FaMobile /><p className='pl-4'>{info.phone}</p>
          </div>
          <div className=' text-[#9ba6c9] flex flex-row'>
            <FaMapPin /><p className='pl-4'>{info.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
