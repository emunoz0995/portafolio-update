import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Postgres from '../assets/posgrest.png';
import Mysql from '../assets/mysql.png';
import Php from '../assets/PHP.png';

import {
    FaClock,
    FaLaptopCode,
    FaBriefcase


} from 'react-icons/fa';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='w-full mx-auto p-4 flex flex-col justify-center h-full md:w-[1248px] md:ml-[80px] md:p-5'>
                <div className=' text-center md:mt-5 md:text-left'>
                    <p className='mt-[50px] text-4xl font-bold inline border-b-4 border-amber-600 '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>
                <div className="md:flex md:w-[100%] md:gap-10">
                    <div className='mx-auto w-[100%] md:mx-0 md:w-[50%] grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                            <p className='my-4'>REACT</p>
                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                            <p className='my-4'>GITHUB</p>
                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                            <p className='my-4'>NODE JS</p>
                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Php} alt="HTML icon" />
                            <p className='my-4'>PHP</p>
                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                            <p className='my-4'>TAILWIND</p>
                        </div>
                        <div className='rounded-[50%]  hover:scale-110 duration-500'>

                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-[80px] mx-auto' src={Postgres} alt="HTML icon" />
                            <p className='my-4'>POSTGRES SQL </p>
                        </div>
                        <div className='rounded-[50%] shadow-md shadow-[#243953] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                            <p className='my-4'>My SQL</p>
                        </div>
                        <div className='rounded-[50%] hover:scale-110 duration-500'>

                        </div>
                    </div>
                    <div className="hidden md:flex md:w-[50%] md:p-5 md:justify-center md:items-center md:flex-col md:gap-2">
                        <div className="md:flex md:w-[80%] md:rounded-4 md:h-[30%] md:shadow-md md:shadow-[#040c16] md:hover:scale-110 duration-500 md:p-5">
                            <div className='w-[60%] flex flex-col justify-center items-center'>
                                <h1 className='text-4xl font-bold inline border-b-4 border-amber-600'> + de 100 &nbsp;</h1>
                                <p className='text-[19px]'> horas de teoria</p> 
                            </div>
                            <div className='w-[40%] flex justify-center items-center'>
                                <FaClock  size={110} />
                            </div>
                        </div>
                        <div className="md:flex md:w-[80%] md:rounded-4 md:h-[30%] md:shadow-md md:shadow-[#040c16] md:hover:scale-110 duration-500 md:p-5">
                            <div className='w-[60%] flex flex-col justify-center items-center'>
                                <h1 className='text-4xl font-bold inline border-b-4 border-amber-600'> + de 180 &nbsp;</h1>
                                <p className='text-[19px]'> horas de practica</p> 
                            </div>
                            <div className='w-[40%] flex justify-center items-center'>
                                <FaLaptopCode  size={110} />
                            </div>
                        </div>
                        <div className="md:flex md:w-[80%] md:rounded-4 md:h-[30%] md:shadow-md md:shadow-[#040c16] md:hover:scale-110 duration-500 md:p-5">
                            <div className='w-[60%] flex flex-col justify-center items-center text'>
                                <h1 className='text-4xl font-bold inline border-b-4 border-amber-600'> + de 7 &nbsp;</h1>
                                <p className='text-[19px]'> proyectos en entregados</p> 
                            </div>
                            <div className='w-[40%] flex justify-center items-center'>
                                <FaBriefcase  size={110} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
