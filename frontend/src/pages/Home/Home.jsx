import React from "react";
import "./Home.css";
import logo from "./images/VJTI_RACING_LOGO_w-01_cut.png";
import car from "./images/DSCN5657.jpg";
import designing from "./images/designing.jpg";
import manufacturing from "./images/manufacturing.jpg";
import racing from "./images/racing.png";
import { Link } from 'react-router-dom';

import img1 from "./images/testimg2.png";
import img2 from "./images/testimg4.jpg";
import vid from "./videos/VRWeb2.mp4";
import team from "./images/lec5.jpg";

import award from "./images/award2.jpg";

import bigimg1 from "./images/testimg1.png";
import bigimg2 from "./images/testimg3.jpg";
import bigteam from "./images/lec2.jpg";

import bigaward from "./images/bigaward.jpg";

import brochure from "./files/Brochure2022.pdf";


const Home = (props) => {

  function menuToggler() {
    console.log("testing");
    const thepath = document.getElementById("forfancymenu");
    const checkbox = document.getElementById("menu-toggle");
    if (checkbox.checked === true)
    {
      thepath.setAttribute("d", "M0 3 h4 l6 6 l6 -6 h4 l-8 8 l8 8 h-4 l-6 -6 l-6 6 h-4 l8 -8 z;");
    }
    else
    {
      thepath.setAttribute("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z;");
    }
  }

	return (
		<>
		<div>

<body class="antialiased font-sans text-gray-900">

  <main class="w-full">

    <header class="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">

      <div class="flex flex-wrap items-center justify-between py-6 parentformenu">
      <div class="w-1/2 md:w-auto transition duration-500 hover:scale-110">
          <Link to="/" class="">
            <img src={logo} width="175" alt="VJTI Racing Logo"/>
          </Link>
        </div>

        <label for="menu-toggle" class="cursor-pointer md:hidden block"><svg class="menu-mobile fill-current text-white"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>Menu</title>
            <path id="forfancymenu" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg></label>

        <input class="hidden menutogglecheck" type="checkbox" id="menu-toggle" onClick={menuToggler}/>

        <div class="hidden md:block w-full md:w-auto" id="menu">
          <nav
            class="w-full bg-white/90 md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
            <ul class="md:flex items-center">
              <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold border-b-8 border-transparent md:hover:border-white no-underline hover:underline md:hover:no-underline"
                  to="/team">Our Team</Link></li>
              <hr class="md:hidden"/>
              <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold border-b-8 border-transparent md:hover:border-white no-underline hover:underline md:hover:no-underline"
                  to="/competitions">Competitions</Link></li>
              <hr class="md:hidden"/>
              <li class="md:ml-4 md:hidden lg:block"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold border-b-8 border-transparent md:hover:border-white no-underline hover:underline md:hover:no-underline"
                  to="/merch">Merch</Link></li>
              <hr class="md:hidden"/>
              <li class="md:ml-4"><Link class="py-2 inline-block md:text-white md:px-2 font-semibold border-b-8 border-transparent md:hover:border-white no-underline hover:underline md:hover:no-underline" to="/contact">Contact
                  Us</Link></li>
                  <hr class="md:hidden"/>
              <li class="md:ml-6 mt-3 md:mt-0">
                <Link class="inline-block font-semibold px-6 py-4 text-white bg-red-600 md:bg-transparent md:text-white md:border md:border-white rounded mb-2 hover:text-red-500 hover:bg-white"
                  to="/sponsor">Sponsor Us</Link>
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
            <Link to="/contact" class="px-8 py-4 boxy text-white rounded inline-block mt-8 font-semibold">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>

    <section class="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
      <div class="flex flex-col lg:flex-row lg:-mx-8">
        <div class="w-full lg:w-1/2 lg:px-8 yellow">
          <h2 class="text-3xl leading-tight font-bold mt-4">Welcome to VJTI Racing</h2>
          <p class="text-lg mt-4 font-semibold">The Official SAE Collegiate Club of VJTI, Matunga</p>
          <p class="mt-2 leading-relaxed">Established in 2008, VJTI Racing is a student organisation for automobile enthusiasts.
It is a platform for young engineers to bring their innovative ideas into action that would contribute for a better future. We seek to be at par with the leading technology in the industry and implement those in the most effective and cost cutting ways in our project.
</p>
        </div>

        <div class="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0 yellow">
          <div class="md:flex">
            <div>
              <div class="w-16 h-16 ball rounded-full"></div>
            </div>
            <div class="md:ml-8 mt-4 md:mt-0">
              <h4 class="text-xl font-bold leading-tight">Innovation</h4>
              <p class="mt-2 leading-relaxed">The club has always aimed at keeping the spirit of innovation and curiosity alive. We here, at VJTI Racing, encourage our members to be updated about and practice new methods and technologies, not only related to the Automotive industry, but also various other sectors related to tech and hands-on engineering.
</p>
            </div>
          </div>

          <div class="md:flex mt-8">
            <div>
              <div class="w-16 h-16 ball rounded-full"></div>
            </div>
            <div class="md:ml-8 mt-4 md:mt-0">
              <h4 class="text-xl font-bold leading-tight">Excellence</h4>
              <p class="mt-2 leading-relaxed">VJTI Racing is a team of spirited individuals. Dedicated to achieving perfection in every single aspect of our work, our members develop a sense of attention to detail as well as team management. A youthful spark and the drive to engineer an end product to be proud of, is a vision shared by all the members of the club.
</p>
            </div>
          </div>
        </div>
      </div>

      <div class="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
        <div class="md:w-1/2 md:px-4 lg:w-1/3">
          <div class="bg-white rounded-lg border border-yellow p-8 ball lg:min-h-full">
            <img src={designing} alt="" class="h-20 mx-auto"/>

            <h4 class="text-xl font-bold mt-4">1. Designing</h4>
            <p class="mt-1">We begin our journey each year by designing our vehicle from scratch. Every component is carefully designed, taking all the parameters into consideration. The design is then subject to analysis through which all the little aberrations are removed. </p>

          </div>
        </div>

        <div class="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/3">
          <div class="bg-white rounded-lg border border-yellow ball p-8 lg:min-h-full">
            <img src={manufacturing} alt="" class="h-20 mx-auto"/>

            <h4 class="text-xl font-bold mt-4">2. Manufacturing</h4>
            <p class="mt-1">In this phase, we take the vehicle from our computer screens and bring them into reality. Once every component is machined and ready, everything is assembled and just like that, we go from pieces of metal to one of the most important inventions of our century.</p>

          </div>
        </div>

        <div class="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/3 ">
          <div class="bg-white rounded-lg border border-yellow ball p-8 lg:min-h-full">
            <img src={racing} alt="" class="h-20 mx-auto"/>

            <h4 class="text-xl font-bold mt-4">3. Racing</h4>
            <p class="mt-1">Once our sweet ride is ready, we take it out to compete in competitions throughout the world. The thrill and joy of competing with a car made by our own hands is unparalleled.</p>

          </div>
        </div>
      </div>
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 py-16 dark-blue lg:px-0 lg:py-0">

    <div class="bg-fixed block 3xl:hidden" style={{ backgroundImage:`url(${img1})`, backgroundRepeat: "no-repeat"}}>

      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2  yellow dark-blue lg:pl-16 xl:pl-40 2xl:pl-64 lg:py-32 lg:pr-4 xl:pr-10 2xl:pr-20">
          <h2 class="text-3xl leading-tight font-bold mt-4">About Us</h2>
          <p class="mt-2 leading-relaxed">VJTI Racing is a group of dedicated undergraduates from VJTI with innovative ideas and passion for engineering. Ready to take on challenges of the automobile industry in the field of racing, united under a non-corporate organization. Our vision is to expand and improve the skills of undergraduates by practical applications in designing, fabrication, and learn management beyond classroom education. We are constantly on a path of improvement and utilizing the best of our talents. We competed in various national and international competitions with the vehicles we build ourselves with our own sweat and blood.</p>
        </div>
        <div class="w-full lg:w-1/2">
        </div>
          
        </div>

    </div>
    <div class="bg-fixed hidden 3xl:block" style={{ backgroundImage:`url(${bigimg1})`, backgroundRepeat: "no-repeat"}}>

      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2  yellow dark-blue lg:pl-16 xl:pl-40 2xl:pl-64 lg:py-32 lg:pr-4 xl:pr-10 2xl:pr-20">
          <h2 class="text-3xl leading-tight font-bold mt-4">About Us</h2>
          <p class="mt-2 leading-relaxed">VJTI Racing is a group of dedicated undergraduates from VJTI with innovative ideas and passion for engineering. Ready to take on challenges of the automobile industry in the field of racing, united under a non-corporate organization. Our vision is to expand and improve the skills of undergraduates by practical applications in designing, fabrication, and learn management beyond classroom education. We are constantly on a path of improvement and utilizing the best of our talents. We competed in various national and international competitions with the vehicles we build ourselves with our own sweat and blood.</p>
        </div>
        <div class="w-full lg:w-1/2">
        </div>
          
        </div>

    </div>
        
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 py-16  lg:px-0 lg:py-0 cyan-time">

    <div class="bg-fixed block 3xl:hidden" style={{ backgroundImage:`url(${img2})`, backgroundRepeat: "no-repeat"}}>

      <div class="flex flex-col lg:flex-row-reverse">
        <div class="w-full lg:w-1/2 cyan-time lg:pr-8 xl:pr-30 2xl:pr-32 lg:py-32 lg:pl-4 xl:pl-10 2xl:pl-20">
        <h2 class="text-3xl leading-tight font-bold mt-4">About VJTI</h2>
          <p class="mt-2 leading-relaxed">Established in 1887 as Victoria Jubilee Technical Institute, VJTI Mumbai has pioneered India’s Engineering education, research and training ecosystem. VJTI has been constantly taking efforts in shifting itself from a training institute to a ‘Capacity Building Institute’ with focus on research, innovation, and technology for society.
Located in South Mumbai, VJTI is an autonomous institution owned by Maharashtra State Government. The institute offers programs in engineering and technology at the diploma, degree, post-graduate and doctoral levels.
VJTI is known for its high quality teaching, collaborative research, industry connect and strong alumni network.
</p>
        </div>
        <div class="w-full lg:w-1/2">
        </div>
          
        </div>

    </div>

    <div class="bg-fixed hidden 3xl:block" style={{ backgroundImage:`url(${bigimg2})`, backgroundRepeat: "no-repeat"}}>

      <div class="flex flex-col lg:flex-row-reverse">
      
        <div class="w-full lg:w-1/2 cyan-time lg:pr-8 xl:pr-30 2xl:pr-32 lg:py-32 lg:pl-4 xl:pl-10 2xl:pl-20">
        <h2 class="text-3xl leading-tight font-bold mt-4">About VJTI</h2>
          <p class="mt-2 leading-relaxed">Established in 1887 as Victoria Jubilee Technical Institute, VJTI Mumbai has pioneered India’s Engineering education, research and training ecosystem. VJTI has been constantly taking efforts in shifting itself from a training institute to a ‘Capacity Building Institute’ with focus on research, innovation, and technology for society.
Located in South Mumbai, VJTI is an autonomous institution owned by Maharashtra State Government. The institute offers programs in engineering and technology at the diploma, degree, post-graduate and doctoral levels.
VJTI is known for its high quality teaching, collaborative research, industry connect and strong alumni network.
</p>
        </div>
        <div class="w-full lg:w-1/2">
        </div>
          
        </div>

    </div>
        
    </section>

    
<section class="relative bg-gray-100 px-4 sm:px-8 red-time lg:px-0 lg:py-0">

    <div>

      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-5/12 z-40 yellow  red-time lg:pl-4 xl:pl-10 2xl:pl-20 lg:py-32 lg:pr-4 xl:pr-10 2xl:pr-20 my-10">
          <h2 class="text-3xl leading-tight font-bold mt-4">A Message From Our Founder - Noel Saldanha</h2>
          <p class="mt-2 leading-relaxed">“What started as four FY B.Tech students ripping apart a Bajaj Chetak to build a Go-Kart (which eventually just went around in circles), turned into a passionate obsession that eventually led to VJTI having its first indigenously developed ATV in 2010. Ten years later, VJTI Racing has accomplished what we originally had in mind when we started out, bringing together young minds binded by their passion for automobiles to compete at the highest level of engineering competitions. Personally and professionally the experiences gained during the year at Team Motorbreath have been instrumental in all my successes since. As I look back, I wouldn't want to change one bit of my years as a student at VJTI, and only wish I could relive it once again. Wishing the Team and all the young minds that are and will be a part of the journey, even more successes in the future.”
</p>
        </div>
        <div class="w-full lg:w-7/12">
        <video
    autoPlay
    loop
    muted
    src={vid}
    class="fixed right-0 hidden lg:block absolute z-10 max-w-full max-h-full object-none"
  >
    Your browser does not support the video tag.
  </video>
        </div>
        
        </div>

    </div>
        
    </section>

    <section class="relative bg-gray-100 px-4 sm:px-8 py-16  lg:px-0 lg:py-0 dark-time">

<div class="bg-fixed object-right block 3xl:hidden" style={{ backgroundImage:`url(${award})`, backgroundRepeat: "no-repeat"}}>

  <div class="flex flex-col lg:flex-row-reverse">
    <div class="w-full lg:w-1/2  dark-time lg:pr-8 xl:pr-30 2xl:pr-32 lg:py-32 lg:pl-4 xl:pl-10 2xl:pl-20 yellow">
    <h2 class="text-3xl leading-tight font-bold mt-4">Our Achievements</h2>
      <p class="mt-2 leading-relaxed">VJTI Racing has a reputation of success and for good reason. We have consistently participated in the BAJA SAE Competition every year since the foundation of the club and won various accolades throughout the last 14 years.
Apart from BAJA SAE, we have also participated and ranked in other competitions.
In SUPRA SAE India 2016, we ranked 1st in Mumbai and 12th All Over India.
2015, was one of the most successful years for VJTI Racing. We ranked 1st internationally in the BAJA South Africa 2015. We also received 1st prizes in Acceleration, Manoeuvrability, Hill Climb and Dynamic Performance.
BAJA 2020, is a very recent affair.  We ranked 6th in Virtual Round and got AIR 26.
</p>
    </div>
    <div class="w-full lg:w-1/2">
    </div>
      
    </div>

</div>
<div class="bg-fixed object-right hidden 3xl:block" style={{ backgroundImage:`url(${bigaward})`, backgroundRepeat: "no-repeat"}}>

  <div class="flex flex-col lg:flex-row-reverse">
    <div class="w-full lg:w-1/2  dark-time lg:pr-8 xl:pr-30 2xl:pr-32 lg:py-32 lg:pl-4 xl:pl-10 2xl:pl-20 yellow">
    <h2 class="text-3xl leading-tight font-bold mt-4">Our Achievements</h2>
      <p class="mt-2 leading-relaxed">VJTI Racing has a reputation of success and for good reason. We have consistently participated in the BAJA SAE Competition every year since the foundation of the club and won various accolades throughout the last 14 years.
Apart from BAJA SAE, we have also participated and ranked in other competitions.
In SUPRA SAE India 2016, we ranked 1st in Mumbai and 12th All Over India.
2015, was one of the most successful years for VJTI Racing. We ranked 1st internationally in the BAJA South Africa 2015. We also received 1st prizes in Acceleration, Manoeuvrability, Hill Climb and Dynamic Performance.
BAJA 2020, is a very recent affair.  We ranked 6th in Virtual Round and got AIR 26.
</p>
    </div>
    <div class="w-full lg:w-1/2">
    </div>
      
    </div>

</div>
    
</section>
    
<section class="relative bg-gray-100 px-4 sm:px-8 py-16 ball lg:px-0 lg:py-0">

    <div class="bg-fixed block 3xl:hidden" style={{ backgroundImage:`url(${team})`, backgroundRepeat: "no-repeat"}}>

      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2  ball lg:pl-16 xl:pl-40 2xl:pl-64 lg:py-32 lg:pr-4 xl:pr-10 2xl:pr-20">
          <h2 class="text-3xl leading-tight font-bold mt-4">Recent Events</h2>
          <p class="mt-2 leading-relaxed">With the vision to increase the scope and expanse of the club from not just the mechanical department but to circuital and other core departments as well, we are proud to be one of the key competitors in e-BAJA 2022, for the first time in the history of VJTI.
The team is working on producing an electric off road vehicle, and has secured AIR 4 in the Virtual Round.</p>
        </div>
        <div class="w-full lg:w-1/2">
        </div>
          
        </div>

    </div>

    <div class="bg-fixed hidden 3xl:block" style={{ backgroundImage:`url(${bigteam})`, backgroundRepeat: "no-repeat"}}>

      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2  ball lg:pl-16 xl:pl-40 2xl:pl-64 lg:py-32 lg:pr-4 xl:pr-10 2xl:pr-20">
          <h2 class="text-3xl leading-tight font-bold mt-4">Recent Events</h2>
          <p class="mt-2 leading-relaxed">With the vision to increase the scope and expanse of the club from not just the mechanical department but to circuital and other core departments as well, we are proud to be one of the key competitors in e-BAJA 2022, for the first time in the history of VJTI.
The team is working on producing an electric off road vehicle, and has secured AIR 4 in the Virtual Round.</p>
        </div>
        <div class="w-full lg:w-1/2">
        </div>
          
        </div>

    </div>
        
    </section>
    

    

    <footer class="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24 ">
      <div class="flex flex-col fixfoot:flex-row">
        <div class="w-full lg:w-5/12 lg:mx-2 lg:pr-8">
          <h3 class="font-bold text-2xl -pt-10 -mt-5">VJTI Racing</h3>
          <p class="text-gray-400 pb-5">The club for VJTI's automobile enthusiasts.</p>
          <iframe title="VJTI Racing Location Map" class="hidden sm:block" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30175.274755364262!2d72.856547!3d19.023716000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73c94d19d1c0e616!2sVJTI%20Racing!5e0!3m2!1sen!2sin!4v1644694110011!5m2!1sen!2sin" width="400" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
          <iframe title="VJTI Racing Location Mobile Map" class="block sm:hidden" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30175.274755364262!2d72.856547!3d19.023716000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73c94d19d1c0e616!2sVJTI%20Racing!5e0!3m2!1sen!2sin!4v1644694110011!5m2!1sen!2sin" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
        
        <div class="w-full fixfoot:w-1/6 mt-8 fixfoot:mt-0 lg:mx-4">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">Quick Links</h5>
          <ul class="mt-4">
            <li class="mt-2"><Link to="/team" title="" class="opacity-75 hover:opacity-100">Our Team</Link></li>
            <li class="mt-2"><Link to="/competitions" title="" class="opacity-75 hover:opacity-100">Competitions</Link></li>
            <li class="mt-2"><Link to="/merch" title="" class="opacity-75 hover:opacity-100">Merch</Link></li>
            <li class="mt-2"><Link to="/contact" title="" class="opacity-75 hover:opacity-100">Contact</Link></li>
            <li class="mt-2"><Link to="/sponsor" title="" class="opacity-75 hover:opacity-100">Sponsorship</Link></li>
            <li class="mt-2"><Link to="/gallery" title="" class="opacity-75 hover:opacity-100">Gallery</Link></li>
          </ul>
        </div>

        <div class="w-full fixfoot:w-2/6 mt-8 fixfoot:mt-0 fixfoot:mx-4 lg:pr-8">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">Contact Details</h5>
          <ul class="mt-4">
            <li>
              <a href="https://www.google.com/maps?ll=19.023716,72.856547&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=8343284557969155606" title="" target="_blank" rel="noreferrer noopener" class="block flex items-center opacity-75 hover:opacity-100">
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
              <a href="tel:8828186508" title="" class="block flex items-center opacity-75 hover:opacity-100">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                  </svg>
                </span>
    
                <span class="ml-3">
                  Captain: +91 8828186508
                </span>
              </a>
            </li>
            <li class="mt-4">
              <a href="mailto:vjtiracingindia@me.vjti.ac.in" title="" class="block flex items-center opacity-75 hover:opacity-100">
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

        <div class="w-full md:w-1/2 fixfoot:w-1/4 mt-8 fixfoot:mt-0 fixfoot:mx-4">
        
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">We're Social!</h5>
          <ul class="mt-4 flex">
            <li>
              <a href="https://www.facebook.com/vjtiracing" target="_blank" rel="noreferrer noopener" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="https://twitter.com/vjtiracing" target="_blank" rel="noreferrer noopener" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="https://www.instagram.com/vjtiracing" target="_blank" rel="noreferrer noopener" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                  <circle cx="11.994" cy="11.979" r="3.003" /></svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="https://www.youtube.com/channel/UCdqmWHqW6GZqXEOaTpTbJ7A" target="_blank" rel="noreferrer noopener" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100">
                  <path
                    d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
                </svg>
              </a>
            </li>

            <li class="ml-6">
              <a href="https://in.linkedin.com/company/vjti-racing" target="_blank" rel="noreferrer noopener" title="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current opacity-75 hover:opacity-100"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </li>

          </ul>

          <a class="mt-8 inline-block font-semibold text-white md:bg-transparent md:text-white opacity-75 hover:text-red-500 hover:opacity-100"
                  href={brochure} target="_blank" rel="noreferrer noopener">View and Download our Sponsorship Brochure!</a>

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