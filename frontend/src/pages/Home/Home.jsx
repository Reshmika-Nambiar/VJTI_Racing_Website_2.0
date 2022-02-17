import React, { useState } from "react";
import "./Home.css";
import logo from "./images/VJTI_RACING_LOGO_w-01_cut.png";
import car from "./images/DSCN5657.jpg";
import designing from "./images/designing.jpg";
import manufacturing from "./images/manufacturing.jpg";
import racing from "./images/racing.png";
import { Link } from 'react-router-dom';


const Home = (props) => {
	return (
		<>
		<div>

<body class="antialiased font-sans text-gray-900">

  <main class="w-full">

    <header class="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      

      <div class="flex flex-wrap items-center justify-between py-6">
      <div class="w-1/2 md:w-auto">
          <Link to={process.env.PUBLIC_URL} class="text-white font-bold text-2xl">
            <img src={logo} width="175"/>
          </Link>
        </div>

        <label for="menu-toggle" class="pointer-cursor md:hidden block"><svg class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg></label>

        <input class="hidden" type="checkbox" id="menu-toggle"/>

        <div class="hidden md:block w-full md:w-auto" id="menu">
          <nav
            class="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
            <ul class="md:flex items-center">
              <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold"
                  to={`${process.env.PUBLIC_URL}/team`}>Our Team</Link></li>
              <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold"
                  to={`${process.env.PUBLIC_URL}/competitions`}>Competitions</Link></li>
              <li class="md:ml-4 md:hidden lg:block"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold"
                  to={`${process.env.PUBLIC_URL}/merch`}>Merch</Link></li>
              <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold" to={`${process.env.PUBLIC_URL}/contact`}>Contact
                  Us</Link></li>
              <li class="md:ml-6 mt-3 md:mt-0">
                <Link class="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded"
                  to={`${process.env.PUBLIC_URL}/sponsor`}>Sponsor Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div class="bg-gray-100">
      <section class="cover bg-blue-teal-gradient relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen">
        <div class="h-full absolute top-0 left-0 z-0">
          <img src={car} alt="" class="w-screen h-full object-cover opacity-20"/>
          
        </div>

        <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">VJTI Racing</h1>
            <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4">A second home to dedicated undergrad automobile enthusiasts!</p>
            <Link to={`${process.env.PUBLIC_URL}/contact`} class="px-8 py-4 boxy text-white rounded inline-block mt-8 font-semibold">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>

    <section class="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8 yellow">
          <h2 class="text-3xl leading-tight font-bold mt-4">Welcome to the Racing Club of VJTI, Matunga</h2>
          <p class="text-lg mt-4 font-semibold">Excellence in Engineering and Racing etc</p>
          <p class="mt-2 leading-relaxed">Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non
            tincidunt ac, imperdiet in enim.
            Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.</p>
        </div>

        <div class="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0 yellow">
          <div class="md:flex">
            <div>
              <div class="w-16 h-16 ball rounded-full"></div>
            </div>
            <div class="md:ml-8 mt-4 md:mt-0">
              <h4 class="text-xl font-bold leading-tight">Lorem ipsum dolor sit amet</h4>
              <p class="mt-2 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <div class="md:flex mt-8">
            <div>
              <div class="w-16 h-16 ball rounded-full"></div>
            </div>
            <div class="md:ml-8 mt-4 md:mt-0">
              <h4 class="text-xl font-bold leading-tight">Lorem ipsum dolor sit amet</h4>
              <p class="mt-2 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
        <div class="md:w-1/2 md:px-4 lg:w-1/3">
          <div class="bg-white rounded-lg border border-yellow p-8 ball">
            <img src={designing} alt="" class="h-20 mx-auto"/>

            <h4 class="text-xl font-bold mt-4">1. Designing</h4>
            <p class="mt-1">We begin our journey each year by designing our vehicle from scratch. Every component is carefully designed, taking all the parameters into consideration. The design is then subject to analysis through which all the little aberrations are removed. </p>

          </div>
        </div>

        <div class="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/3">
          <div class="bg-white rounded-lg border border-yellow ball p-8">
            <img src={manufacturing} alt="" class="h-20 mx-auto"/>

            <h4 class="text-xl font-bold mt-4">2. Manufacturing</h4>
            <p class="mt-1">In this phase, we take the vehicle from our computer screens and bring them into reality. Once every component is machined and ready, everything is assembled and just like that, we go from pieces of metal to one of the most important inventions of our century.</p>

          </div>
        </div>

        <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/3">
          <div class="bg-white rounded-lg border border-yellow ball p-8">
            <img src={racing} alt="" class="h-20 mx-auto"/>

            <h4 class="text-xl font-bold mt-4">3. Racing</h4>
            <p class="mt-1">Once our sweet ride is ready, we take it out to compete in competitions throughout the world. The thrill and joy of competing with a car made by our own hands is unparalleled.</p>

          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32 dark-blue">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8 yellow">
          <h2 class="text-3xl leading-tight font-bold mt-4">About Us</h2>
          <p class="mt-2 leading-relaxed">VJTI Racing is a group of dedicated undergraduates from VJTI with innovative ideas and passion for engineering. Ready to take on challenges of the automobile industry in the field of racing united under a non-corporate organization. Our vision is to expand and improve the skills of undergraduates by practical applications in designing, fabrication, and learn management beyond classroom education. We are constantly on a path of improvement and utilizing the best of our talents. We competed in various national and international competitions with the vehicles we build ourselves with sweat and blood.</p>
        </div>

        <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

          <p class="italic text-sm mt-2 text-center">Aenean ante nisi, gravida non mattis semper.</p>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32 cyan-time">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8">
          <h2 class="text-3xl leading-tight font-bold mt-4">About VJTI</h2>
          <p class="mt-2 leading-relaxed">Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus,
            sed aliquam est vehicula a. Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula
            in. Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in
            enim. Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus
            mi.</p>
        </div>

        <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

          <p class="italic text-sm mt-2 text-center">Aenean ante nisi, gravida non mattis semper.</p>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32 red-time">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8 yellow">
          <h2 class="text-3xl leading-tight font-bold mt-4">Our History</h2>
          <p class="mt-2 leading-relaxed">Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus,
            sed aliquam est vehicula a. Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula
            in. Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in
            enim. Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus
            mi.</p>
        </div>

        <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

          <p class="italic text-sm mt-2 text-center">Aenean ante nisi, gravida non mattis semper.</p>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32 dark-time">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8 yellow">
          <h2 class="text-3xl leading-tight font-bold mt-4">Our Achievements</h2>
          <p class="mt-2 leading-relaxed">Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus,
            sed aliquam est vehicula a. Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula
            in. Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in
            enim. Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus
            mi.</p>
        </div>

        <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

          <p class="italic text-sm mt-2 text-center">Aenean ante nisi, gravida non mattis semper.</p>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32 ball">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8">
          <h2 class="text-3xl leading-tight font-bold mt-4">Recent Events</h2>
          <p class="mt-2 leading-relaxed">Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus,
            sed aliquam est vehicula a. Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula
            in. Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in
            enim. Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus
            mi.</p>
        </div>

        <div class="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <div class="bg-gray-400 w-full h-72 rounded-lg"></div>

          <p class="italic text-sm mt-2 text-center">Aenean ante nisi, gravida non mattis semper.</p>
        </div>
      </div>
    </section>

    <footer class="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24 ">
      <div class="flex flex-col md:flex-row">
        <div class="w-full lg:w-5/12 lg:mx-2 lg:pr-8">
          <h3 class="font-bold text-2xl -pt-10 -mt-5">VJTI Racing</h3>
          <p class="text-gray-400 pb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30175.274755364262!2d72.856547!3d19.023716000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73c94d19d1c0e616!2sVJTI%20Racing!5e0!3m2!1sen!2sin!4v1644694110011!5m2!1sen!2sin" width="400" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
        
        <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">Quick Links</h5>
          <ul class="mt-4">
            <li class="mt-2"><Link to={`${process.env.PUBLIC_URL}/team`} title="" class="opacity-75 hover:opacity-100">Our Team</Link></li>
            <li class="mt-2"><Link to={`${process.env.PUBLIC_URL}/competitions`} title="" class="opacity-75 hover:opacity-100">Competitions</Link></li>
            <li class="mt-2"><Link to={`${process.env.PUBLIC_URL}/merch`} title="" class="opacity-75 hover:opacity-100">Merch</Link></li>
            <li class="mt-2"><Link to={`${process.env.PUBLIC_URL}/contact`} title="" class="opacity-75 hover:opacity-100">Contact</Link></li>
            <li class="mt-2"><Link to={`${process.env.PUBLIC_URL}/sponsor`} title="" class="opacity-75 hover:opacity-100">Sponsorship</Link></li>
            <li class="mt-2"><Link to={`${process.env.PUBLIC_URL}/gallery`} title="" class="opacity-75 hover:opacity-100">Gallery</Link></li>
          </ul>
        </div>

        <div class="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">Contact Details</h5>
          <ul class="mt-4">
            <li>
              <a href="https://www.google.com/maps?ll=19.023716,72.856547&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=8343284557969155606" title="" target="_blank" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                  </svg>
                </span>
                <span class="ml-3">
                VJTI Racing-167, Nathalal Parekh Marg, Wadla Village, Wadala, Mumbai, Maharashtra 400031
                </span>
              </a>
            </li>
            
            <li class="mt-4">
              <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                  </svg>
                </span>
                <span class="ml-3">
                  +91 99999999999
                </span>
              </a>
            </li>
            <li class="mt-4">
              <a href="#" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                  </svg>
                </span>
                <span class="ml-3">
                vjtiracingindia@me.vjti.ac.in
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">We're Social!</h5>
          <ul class="mt-4 flex">
            <li>
              <a href="#" target="_blank" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="#" target="_blank" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="#" target="_blank" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                  <circle cx="11.994" cy="11.979" r="3.003" /></svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="#" target="_blank" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="#" target="_blank" title="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </li>

          </ul>

          <p class="text-sm text-gray-400 mt-12">© VJTI Racing 2022<br class="hidden lg:block"/> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

  </main>

  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131505823-4"></script>

</body>

			</div>
		</>
	);
};

export default Home;