
import { AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image';
import dilan from '../public/dilan.png'
import flightcatcher from '../public/flightcatcher.png'
import ravemap from '../public/ravemap.png'
import fullstyle from '../public/fullstyle.png'



export default function Home() {
  return (
    <main className=" bg-emerald-100 sm:text-xxsm lg:text-md font-mono">
      <section className="min-h-screen">
        <nav className="p-3 sm:py-6 mb-2 sm:mb-5 flex justify-between">
          <h1 className="text-sm sm:text-base font-mono font-bold pl-2 ms: text-xl5">DILAN GUTEKUNST</h1>

          <ul className="flex items-center">
            
            <a href="https://www.linkedin.com/in/dilan-gutekunst/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="rounded-full  cursor-pointer text-green-500 bg-gray-100 hover:shadow-xl" size={29}/>
            </a>
            <li>
              <a className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-md ml-2 sm:px-4 sm:py-2 sm:text-sm  bg-gray-100 hover:shadow-xl " href="https://www.canva.com/design/DAF-xSdUd_A/aSBxrc6BteP5IGa2YSvv3g/edit?utm_content=DAF-xSdUd_A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">Resume</a>

            </li>
          </ul>
        </nav>
        <div className="relative mx-auto bg-gradient-to-b from-green-500 rounded-full w-60 h-60 mt-10">
          <Image src={dilan} layout='fill'alt="image" />
        </div>

        <div className="text-center p-5">
          <h2 className="text-m p-5  font-semibold font-mono  font-semibol md:text-3xl">Developer & Entrepreneur</h2>
          <p className="text-md py-2 leading-8 text-gray-800">Dilan Gutekunst is a dedicated and enthusiastic individual with a passion for technology and problem-solving. With a background in web development and e-commerce, Dilan has honed her skills in JavaScript, React, HTML, CSS, and other relevant technologies. As the founder of a sustainable online shop, she has demonstrated her ability to optimize web content, enhance user experiences, and drive business growth through effective SEO strategies. Dilan is known for her strong work ethic, attention to detail, and ability to work well both independently and as part of a team. She is eager to continue learning and growing in the field of technology and is excited about the opportunity to contribute her skills and expertise to innovative projects.</p>
        </div>

        <section >
          <div className='p-3 text-sm-auto text-center '>
            <h3 className="text-m text-center font-semibold font-mono  py-2 md:text-3xl">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Creating websites or web applications using programming languages like HTML, CSS, and JavaScript, along with frameworks like React, <span className="text-teal-500">Next.js </span>and <span className="text-teal-500">Tailwind.</span></p>

            <div className=' flex flex-wrap gap-3 auto-cols-auto'>
              <div className="text-center  bg-gray-100 hover:shadow-xl p-10 rounded-xl my-4 flex-1">
                <h2 className=' p-3'>Full Style</h2>
                <Image src={fullstyle} width={210} height={210} alt="image1" className="rounded-xl mx-auto my-auto w-48 h-48" />           
                     <div className="flex justify-center mt-3">
                  <a href="https://github.com/FullStyle-app" target="_blank" rel="noopener noreferrer"   className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.49l-.01-1.73c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.09-1.46-1.09-1.46-.89-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.63.34-1.08.62-1.33-2.17-.25-4.45-1.08-4.45-4.8 0-1.06.37-1.93.98-2.61-.1-.24-.42-1.24.09-2.58 0 0 .82-.26 2.7 1 1.17-.33 2.42-.5 3.66-.5s2.49.17 3.66.5c1.88-1.26 2.7-1 2.7-1 .51 1.34.19 2.34.09 2.58.61.68.98 1.46.98 2.61 0 3.73-2.29 4.55-4.46 4.8.35.3.67.9.67 1.82l-.01 2.7c0 .27.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://fullstyle.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M19 10a9 9 0 11-18 0 9 9 0 0118 0zm-3.293-2.293a1 1 0 00-1.414-1.414L12 10.586V8a1 1 0 00-2 0v2a1 1 0 001 1h2a1 1 0 100-2h-1.586l1.293-1.293a1 1 0 10-1.414-1.414L9.586 10l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 12l-3.293 3.293a1 1 0 101.414 1.414L10 13.414V16a1 1 0 102 0v-2a1 1 0 00-1-1H9a1 1 0 000 2h1.586l-1.293 1.293a1 1 0 101.414 1.414L10.414 14l2.293 2.293a1 1 0 001.414-1.414L11.414 12l3.293-3.293z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <h3 className='text-s p-3 text-gray-500'>Code Share Platform</h3>

              </div>
              <div className="text-center bg-gray-100 hover:shadow-xl p-10 rounded-xl my-3 flex-1">
                <h2 className=' p-3'>Flight Catcher</h2>
                <Image src={flightcatcher} width={210} height={210} alt="image2"className="rounded-xl mx-auto my-auto w-48 h-48" />                <div className="flex justify-center mt-3">
                  <a href="https://github.com/karkelo1/flight-catcher" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.49l-.01-1.73c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.09-1.46-1.09-1.46-.89-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.63.34-1.08.62-1.33-2.17-.25-4.45-1.08-4.45-4.8 0-1.06.37-1.93.98-2.61-.1-.24-.42-1.24.09-2.58 0 0 .82-.26 2.7 1 1.17-.33 2.42-.5 3.66-.5s2.49.17 3.66.5c1.88-1.26 2.7-1 2.7-1 .51 1.34.19 2.34.09 2.58.61.68.98 1.46.98 2.61 0 3.73-2.29 4.55-4.46 4.8.35.3.67.9.67 1.82l-.01 2.7c0 .27.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://karkelo1.github.io/flight-catcher/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M19 10a9 9 0 11-18 0 9 9 0 0118 0zm-3.293-2.293a1 1 0 00-1.414-1.414L12 10.586V8a1 1 0 00-2 0v2a1 1 0 001 1h2a1 1 0 100-2h-1.586l1.293-1.293a1 1 0 10-1.414-1.414L9.586 10l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 12l-3.293 3.293a1 1 0 101.414 1.414L10 13.414V16a1 1 0 102 0v-2a1 1 0 00-1-1H9a1 1 0 000 2h1.586l-1.293 1.293a1 1 0 101.414 1.414L10.414 14l2.293 2.293a1 1 0 001.414-1.414L11.414 12l3.293-3.293z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <h3 className='text-s p-3 text-gray-500'>OOP Game</h3>
              </div>
              <div className="text-center bg-gray-100 hover:shadow-xl p-10 rounded-xl my-5 flex-1">
                <h2 className='p-3'>Rave Mape</h2>
                <Image src={ravemap} width={210} height={210} alt="image3"className="rounded-xl mx-auto my-auto w-48 h-48" />                <div className="flex justify-center mt-3">
                  <a href="https://github.com/rave-map/react-rave-map" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.49l-.01-1.73c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.09-1.46-1.09-1.46-.89-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.63.34-1.08.62-1.33-2.17-.25-4.45-1.08-4.45-4.8 0-1.06.37-1.93.98-2.61-.1-.24-.42-1.24.09-2.58 0 0 .82-.26 2.7 1 1.17-.33 2.42-.5 3.66-.5s2.49.17 3.66.5c1.88-1.26 2.7-1 2.7-1 .51 1.34.19 2.34.09 2.58.61.68.98 1.46.98 2.61 0 3.73-2.29 4.55-4.46 4.8.35.3.67.9.67 1.82l-.01 2.7c0 .27.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://rave-map.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M19 10a9 9 0 11-18 0 9 9 0 0118 0zm-3.293-2.293a1 1 0 00-1.414-1.414L12 10.586V8a1 1 0 00-2 0v2a1 1 0 001 1h2a1 1 0 100-2h-1.586l1.293-1.293a1 1 0 10-1.414-1.414L9.586 10l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 12l-3.293 3.293a1 1 0 101.414 1.414L10 13.414V16a1 1 0 102 0v-2a1 1 0 00-1-1H9a1 1 0 000 2h1.586l-1.293 1.293a1 1 0 101.414 1.414L10.414 14l2.293 2.293a1 1 0 001.414-1.414L11.414 12l3.293-3.293z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <h3 className='text-s p-3 text-gray-500'>Comunity Project</h3>
              </div>
              
            </div>

          </div>
        </section>
      </section>

    </main >
  );
}
