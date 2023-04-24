import React from 'react';
import info from '../data/info.json';
import {
  FaGraduationCap,
  FaBriefcase,
} from 'react-icons/fa';
import me from '../assets/me.png'


const About = () => {


  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='hidden max-w-[1000px] w-full md:grid md:grid-cols-3 md:mt-[7%]'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-amber-400'>
              About
            </p>
          </div>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-amber-400'>
              Education
            </p>
          </div>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-amber-400'>
              Experience
            </p>
          </div>
          <div></div>
        </div>
        <div className=' my-10 md:mt-0 max-w-[1185px] w-full grid sm:grid-cols-3 gap-8 px-4'>
          <div className='flex flex-col items-center '>
            <img className='hidden md:flex w-[200px]' src={me} alt="me" />
            <div className='p-5 text-center sm:text-center text-2xl font-bold'>
              <p>Hi. I'm {info.name}, nice to meet you. Please take a look around.</p>
            </div>
            
          </div>
          <div className='flex flex-col '>
            <ul className='flex flex-col w-[100%] p-0 gap-5'>
              {info.education.map(item => (
                <li className='flex w-[100%] p-0' key={item.title}>
                  <div className='w-[30%]'>
                    <img className='px-1 w-[100px]' src={item.pick} alt="education" />
                  </div>
                  <div>
                    <h3 className='text-2xl sm:text-2xl font-bold '>{item.school}</h3>
                    <p className='flex '> <FaGraduationCap className='mr-1' />{item.title}</p>
                    <p>{item.year}</p>
                  </div>

                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col mt-2 '>
            <ul className='flex flex-col w-[100%] p-0 gap-5'>
              {info.experience.map(item => (
                <li className='flex w-[100%] p-0' key={item.title}>
                  <div className='w-[30%]'>
                    <img className='rounded-[50%] px-1 w-[100px]' src={item.pick} alt="experience" />
                  </div>
                  <div>
                    <h3 className='text-2xl sm:text-2xl font-bold '>{item.place}</h3>
                    <p className='flex '> <FaBriefcase className='mr-1' />{item.title}</p>
                    <p>{item.year}</p>
                  </div>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
