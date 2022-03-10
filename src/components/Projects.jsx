import React from 'react'
import PW from '../assets/personalWebsite.png'

import AW from '../assets/amdocsWebsite.png'

import nftPW from '../assets/physicalWebsite.png'
import nftPW2 from '../assets/physicalWebsite2.png'
import nftPW3 from '../assets/physicalWebsite3.png'

import WA from '../assets/weatherApp.png'
import WA2 from '../assets/weatherApp2.png'
import WA3 from '../assets/weatherApp3.png'

import FB from '../assets/foodBankiOS.png'
import FB2 from '../assets/foodBankiOS2.png'
import FB3 from '../assets/foodBankiOS3.png'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

function Projects() {
  const callouts = [
    {
      id: 1,
      name: 'HTML/CSS/Javascript, MySql',
      description: 'Amdocs Talent Aquisition',
      imagesSrcs: [AW],
      imageAlt: 'Amdocs login',
    },
    {
      id: 2,
      name: 'React, Taiwind CSS',
      description: 'Personal website',
      imagesSrcs: [PW],
      imageAlt: 'Landing page',
    },
    {
      id: 3,
      name: 'Next, Tailwind CSS, Firebase, Solidity, Truffle',
      description: 'NFT Marketplace',
      imagesSrcs: [nftPW, nftPW2, nftPW3],
      imageAlt: 'User Settings Interface',
    },
    {
      id: 4,
      name: 'SwiftUI, CoreLocation',
      description: 'WeatherApp',
      imagesSrcs: [WA, WA2, WA3],
      imageAlt: 'WeatherApp Screenshot',
    },
    {
      id: 5,
      name: 'SwiftUI, Firebase',
      description: 'FoodBank iOS App',
      imagesSrcs: [FB, FB2, FB3],

      imageAlt: 'FoodBank App',
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
        <div className='mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 sm:gap-x-10 gap-y-10'>
          {callouts.map((callout) => (
            <div
              key={callout.id}
              className='group relative dark:bg-black bg-white'
            >
              <div className='relative w-full bg-black sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-2 lg:aspect-h-10 overflow-auto'>
                <Carousel>
                  {callout.imagesSrcs.map((images) => (
                    <img src={images} />
                  ))}
                </Carousel>
              </div>
              <div className='px-5 py-4'>
                <p className='text-xl font-semibold text-pink-600'>
                  {callout.description}
                </p>
                <h3 className='text-md dark:text-white text-black font-medium'>
                  {callout.name}
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
