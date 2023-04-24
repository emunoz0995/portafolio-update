import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaAddressCard,
  FaBrain,
  FaBook,
  FaPhone,
  FaWhatsapp,
  
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import info from '../data/info.json';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // <div className='fixed w-100 left-[35%] h-[55px] rounded-b-xl shadow-md shadow-gray-400 first-letter:h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300'>
    <div className='fixed w-100 left-0 h-[55px] rounded-b-xl shadow-md first-letter:h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300 sm:left-0 md:left-[35%] md:z-10 md:shadow-md md:shadow-gray-400 lg:left-[35%]'>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li className=' hover:text-amber-400 duration-300'>
          <Link className='flex flex-col justify-center items-center' to='home' smooth={true} duration={500}>
            <FaHome size={20}/>Home
          </Link>
        </li>
        <li className='hover:text-amber-400 duration-300'>
          <Link className='flex flex-col justify-center items-center' to='about' smooth={true} duration={500}>
          <FaAddressCard size={20}/> About
          </Link>
        </li>
        <li className='hover:text-amber-400 duration-300'>
          <Link className='flex flex-col justify-center items-center' to='skills' smooth={true} duration={500}>
          <FaBrain size={20}/>Skills
          </Link>
        </li>
        <li className='hover:text-amber-400 duration-300'>
          <Link className='flex flex-col justify-center items-center' to='work' smooth={true} duration={500}>
          <FaBook size={20}/> Projects
          </Link>
        </li>
        <li className='hover:text-amber-400 duration-300'>
          <Link className='flex flex-col justify-center items-center' to='contact' smooth={true} duration={500}>
          <FaPhone size={20}/>Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'relative top-[120px] left-0 w-[200px] h-screen  bg-[#0a192f] flex flex-col justify-center items-center text'
        }
      >
        <li className='py-2 text-2xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300' target="_blank"
              href={info.contac[1].url}
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300' target="_blank"
              href={info.contac[3].url}
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c9842b]'>
            <a
              className='flex justify-between items-center w-full text-gray-300' target="_blank"
              href={info.contac[2].url}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#31ab43]'>
            <a
              className='flex justify-between items-center w-full text-gray-300' target="_blank"
              href={info.contac[0].url}
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
