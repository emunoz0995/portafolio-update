import React from 'react';
import '../assets/css/work.css';
import { FaGithub, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Work = () => {


  setTimeout(function () {

    var $cont = document.querySelector('.cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

    setTimeout(function () {
      $cont.classList.remove('s--inactive');
    }, 1100);

    $elsArr.forEach(function ($el) {
      $el.addEventListener('click', function () {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function ($btn) {
      $btn.addEventListener('click', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
      });
    });

  }, 500)


  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='w-full mx-auto p-4 flex flex-col justify-center h-full md:w-[1248px] md:ml-[80px] md:p-5 md:m-auto lg:m-auto'>
        <div className=' text-center md:text-left md:mt-3'>
          <p className=' text-4xl font-bold inline border-b-4 border-amber-600 '>Projects</p>
          <p className='py-4'>These are some of the projects I've done</p>
        </div>

        <div className="cont s--inactive">
          {/* <!-- cont inner start --> */}
          <div className="cont__inner">
            {/* <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Pokedex</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">

                      <div className='md:p-5 md:mx-auto md:mt-[1%] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-[#040c16] md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600'>Pokedex</h1>
                        <p className='text-2xl text-center lowercase mb-5'>Esta es una Biblioteca Web que nos permite consultar
                          todos los pokemon existentes, y averiguar su habilitades asi como su ventajas y desventajas</p>
                        <p className='text-[15px] text-center mb-5 '>HTML | CSS | REACT | REDUX | REAC-ROUTER | APIS | JavaScript |</p>
                        <div className="flex gap-4">
                          <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaGithub size={50} /> Code
                          </Link>
                          <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaCode size={50} /> Site
                          </Link>
                        </div>
                      </div>

                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end -->
            <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Ecommerce</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">

                      <div className='md:p-5 md:mx-auto md:mt-[1%] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-[#040c16] md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600'>Ecommerce</h1>
                        <p className='text-2xl text-center lowercase mb-5'>Este sistema web es una tienda online donde los usuarios pueden registrarse y comprar productos tecnologicos</p>
                        <p className='text-[15px] text-center mb-5'>HTML | CSS | REACT | REDUX | REAC-ROUTER | APIS | JavaScript |</p>
                        <div className="flex gap-4">
                          <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaGithub size={50} /> Code
                          </Link>
                          <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaCode size={50} /> Site
                          </Link>
                        </div>
                      </div>

                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end -->
            <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Rick and Morty App</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">
                      <div className='md:p-5 md:mx-auto md:mt-[1%] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-[#040c16] md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600'>Rick and Morty App</h1>
                        <p className='text-2xl text-center lowercase mb-5'>Biblioteca web donde podemos encontrar a todos los personajes y sus datos de la serie animada Rick and Morty</p>
                        <p className='text-[15px] text-center mb-5'>HTML | CSS | REACT | REDUX | API | JavaScript |</p>
                        <div className="flex gap-4">
                          <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaGithub size={50} /> Code
                          </Link>
                          <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaCode size={50} /> Site
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end -->
            <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Almafront</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">
                      <div className='md:p-5 md:mx-auto md:mt-[1%] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-[#040c16] md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600'>Almafront</h1>
                        <p className='text-2xl text-center lowercase mb-5'>Sitema web de gestion de inventario y almacenamiento, dependiendo el tipo de transporte carga y tiempo de permanencia, cuenta con reporteria en pdf y excel</p>
                        <p className='text-[15px] text-center mb-5 '> HTML | CSS | PHP | JavaScript | MYSQL</p>
                        <div className="flex gap-4">
                            <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                              <FaGithub size={50} /> Code
                            </Link>
                            <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                              <FaCode size={50} /> Site
                            </Link>
                          </div>
                      </div>
                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end -->
            <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Mi Colacion</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">
                      <div className='md:p-5 md:mx-auto md:mt-[1%] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-[#040c16] md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600'>Mi Colacion</h1>
                        <p className='text-2xl text-center lowercase mb-5'>Sitema web de gestion diaria de alimentos para el personal de la institucion y otros, administracion de productos, usuarios, clientes y notificaciones condicionales, maneja reporteria en pdf y excel</p>
                        <p className='text-[15px] text-center mb-5 '> HTML | CSS | PHP | JavaScript | MYSQL</p>
                        <div className="flex gap-4">
                          <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaGithub size={50} /> Code
                          </Link>
                          <Link className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaCode size={50} /> Site
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end --> */}
          </div>
          {/* <!-- cont inner end --> */}
        </div>
      </div>
    </div>

  );

};

export default Work;
