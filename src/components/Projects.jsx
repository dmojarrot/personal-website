import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import PW from '../assets/personalWebsite.png'
import AD from '../assets/amdocsWebsite.png'
import AD2 from '../assets/amdocsWebsite2.png'
import nftPW from '../assets/physicalWebsite.png'
import nftPW2 from '../assets/physicalWebsite2.png'
import nftPW3 from '../assets/physicalWebsite3.png'
// import WA from '../assets/weatherApp.png'
// import WA2 from '../assets/weatherApp2.png'
// import WA3 from '../assets/weatherApp3.png'
import RAM from '../assets/ram.png'
import RAM2 from '../assets/ram2.png'
import FB from '../assets/foodBankiOS.png'
import FB2 from '../assets/foodBankiOS2.png'
import FB3 from '../assets/foodBankiOS3.png'
import FB4 from '../assets/foodBankiOS4.png'
import FB5 from '../assets/foodBankiOS5.png'
import FB6 from '../assets/foodBankiOS6.png'
import SG from '../assets/setGame.png'
import SG2 from '../assets/setGame2.png'
import SG3 from '../assets/setGame3.png'

function Projects() {
  const projects = [
    {
      id: 1,
      stack: 'HTML/CSS/Javascript, Node.js, MySql',
      description: 'Amdocs Talent Aquisition',
      imagesSrcs: [AD, AD2],
      imageAlt: 'Amdocs login',
      website: '',
    },
    {
      id: 2,
      stack: 'React.js, Tailwind CSS',
      description: 'Personal website',
      imagesSrcs: [PW],
      imageAlt: 'Personal Website',
      website: 'dmojarrot.com',
    },
    {
      id: 3,
      stack: 'Next.js, Tailwind CSS, Firebase, Solidity',
      description: 'NFT Marketplace',
      imagesSrcs: [nftPW, nftPW2, nftPW3],
      imageAlt: 'User Settings Interface',
      website: 'physicalnft.vercel.app/',
    },
    {
      id: 4,
      stack: 'React.js, Tailwind CSS, GraphQL client - URQL',
      description: 'Rick and Morty Characters',
      imagesSrcs: [RAM, RAM2],
      imageAlt: 'rm-urql Screenshot',
      website: 'rm-gql.vercel.app/',
    },
    // {
    //   id: 4,
    //   stack: 'SwiftUI, CoreLocation',
    //   description: 'WeatherApp',
    //   imagesSrcs: [WA, WA2, WA3],
    //   imageAlt: 'WeatherApp Screenshot',
    //   website: '',
    // },
    {
      id: 5,
      stack: 'React.js, Tailwind CSS',
      description: 'Set game',
      imagesSrcs: [SG, SG2, SG3],
      imageAlt: 'Set Game',
      website: 'set-dmojarrot.vercel.app',
    },
    {
      id: 6,
      stack: 'SwiftUI, Firebase',
      description: 'FoodBank iOS App',
      imagesSrcs: [FB, FB2, FB3, FB4, FB5, FB6],
      imageAlt: 'FoodBank App',
      website: '',
    },
  ]
  return (
    <div className='mx-5 pb-5'>
      <h2
        className='dark:text-white text-black text-3xl font-semibold pt-20 pb-5 pl-5'
        id='projects'
      >
        Projects
      </h2>
      <div className='max-w-2xl mx-auto lg:max-w-none dark:bg-black bg-white rounded-3xl w-full shadow-lg p-5'>
        <div className='mt-6 space-y-12 lg:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-5 gap-y-10'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='group relative dark:bg-black bg-white'
            >
              <div className='relative w-full bg-black sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-2 lg:aspect-h-10 overflow-auto'>
                <Carousel>
                  {project.imagesSrcs.map((images) => (
                    <img key={project.id} src={images} />
                  ))}
                </Carousel>
              </div>
              <div className='px-5 py-4'>
                <p className='text-xl font-semibold text-pink-600'>
                  {project.website.length != 0 ? (
                    <a href={`https://${project.website}`}>
                      {project.description}
                    </a>
                  ) : (
                    project.description
                  )}
                </p>
                <h3 className='text-md dark:text-white text-black font-medium'>
                  {project.stack}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
