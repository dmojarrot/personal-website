import profilePicture from '../assets/profilePicture.png'
import CV from '../assets/CV_Diego_Mojarro.pdf'

import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'

const songExample = {
  id: 1,
  name: 'Software Engineer',
  artist: 'Diego Mojarro',
  ownerPpSrc: profilePicture,
  ownerPpAlt: 'Profile Picture',
  ownerHref: '#',
  href: '#',
  imageSrc:
    'https://thefader-res.cloudinary.com/private_images/w_1800,c_limit,f_auto,q_auto:best/drake-views-from-the-6-cover-story-interview_ic4ox9/drake.jpg',
  pdf: CV,
}

export default function Card() {
  return (
    <div className='flex flex-col items-center w-full mx-5 md:w-6/12'>
      <p className='flex justify-start w-full text-5xl ml-10 mb-5 mt-5 font-semibold text-pink-600'>
        Hi There, I'm
      </p>
      <div className='dark:bg-black bg-white rounded-3xl w-full shadow-lg'>
        <div className='flex justify-center pt-7'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-center'>
              <img
                className='inline-block w-4/12 rounded-full items-center'
                src={songExample.ownerPpSrc}
                alt={songExample.ownerPpAlt}
              />
            </div>
          </div>
        </div>
        <div className='px-5 '>
          <div className='pb-5 text-center'>
            <p className='text-4xl font-extrabold dark:text-white text-black'>
              {songExample.artist}
            </p>
            <p className='text-2xl dark:text-white text-black font-light'>
              {songExample.name}
            </p>
          </div>
        </div>

        <div className='p-5 dark:text-white text-black'>
          <div className='flex justify-center gap-5 items-center'>
            <a
              href='https://www.linkedin.com/in/dmojarrot/'
              target='_blank'
              className='hover:contrast-50'
            >
              <FaLinkedin size={60} />
            </a>
            <a
              href='https://www.github.com/dmojarrot/'
              target='_blank'
              className='hover:contrast-50'
            >
              <FaGithubSquare size={60} />
            </a>
            <a
              href='https://www.twitter.com/dmojarrot/'
              target='_blank'
              className='hover:contrast-50'
            >
              <FaTwitterSquare size={60} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
