import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Icons & Image
import TwitterWhite from '../../Assets/Twitter.svg'
import Hero1 from '../../Assets/Hero1.png'
import Hero2 from '../../Assets/Hero2.png'
// UserAvatar
import User1 from '../../Assets/userAvatar01.svg'
import User2 from '../../Assets/userAvatar02.svg'
import User3 from '../../Assets/userAvatar03.svg'
import User4 from '../../Assets/userAvatar04.svg'
import User5 from '../../Assets/userAvatar05.svg'
import User6 from '../../Assets/userAvatar06.svg'
import User7 from '../../Assets/userAvatar07.svg'
import User8 from '../../Assets/userAvatar08.svg'
import User9 from '../../Assets/userAvatar09.svg'

const Hero = () => {
  const [isTablet, setIsTablet] = useState()

  const userArray = [
    User1,
    User2,
    User3,
    User4,
    User5,
    User6,
    User7,
    User8,
    User9,
  ]

  const handleResize = () => {
    if (window.innerWidth <= 1023 && window.innerWidth >= 640) {
      setIsTablet(true)
    } else {
      setIsTablet(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <SectionContainer>
      <InnerContainer>
        <HeroInfo>
          <h1>Twitter analytics taken to a whole new level.</h1>
          <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            iusto beatae, quos voluptatibus pariatur illo nihil quisquam
            voluptatem praesentium totam, eaque magni dicta quaerat dolorum
            natus quibusdam asperiores nulla dignissimos.
          </p>
          <div className='btn-container'>
            <div className='sign-in-btn'>
              <img src={TwitterWhite} alt='' />
              Sign in with Twitter
            </div>
            <div className='more-btn hover:translate-x-1'>
              <h3>Learn More</h3>
              <i className='fas fa-arrow-right'></i>
            </div>
          </div>
          <div className='user-reviews-container'>
            <div className='user-reviews-list'>
              {userArray.map((user, index) => (
                <img key={index} src={user} alt='' />
              ))}
            </div>
            <p>
              Join <span>195</span> others who have analyzed their followers and
              scheduled <span>1342</span> tweets
            </p>
          </div>
        </HeroInfo>
        <HeroImage>
          {isTablet ? (
            <img src={Hero2} alt='' />
          ) : (
            <img className='max-w-sm' src={Hero1} alt='' />
          )}
        </HeroImage>
      </InnerContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  ${tw`
    pt-32
    pb-16
    
    flex
    items-center
    justify-center

    bg-yellow-50
  `}
`

const InnerContainer = styled.div`
  ${tw`
    px-4
    xl:px-0
    mx-auto
    w-full
    md:max-w-6xl
    flex
    flex-col-reverse
    lg:flex-row
    items-center
    justify-center
  `}
`

const HeroInfo = styled.div`
  ${tw``}

  h1 {
    ${tw`
      lg:w-[90%]
      text-4xl
      md:text-5xl
      xl:text-6xl
      font-bold
    `}
  }

  p {
    ${tw`
      lg:w-[90%]
      my-3
      text-lg
      lg:text-xl
      text-gray-700
    `}
  }

  .btn-container {
    ${tw`
      flex
      flex-row
      items-center
      justify-start
    `}

    .sign-in-btn {
      ${tw`
        flex
        items-center
        justify-between
        py-2
        px-4
        mr-4
        font-semibold
        text-gray-100
        bg-blue-400
        hover:bg-blue-500
        hover:shadow-md
        rounded-md
        cursor-pointer
        transition
        duration-200
        ease-in-out
    `}

      img {
        ${tw`
        h-5
        w-5
        mr-3
      `}
      }
    }

    .more-btn {
      ${tw`
        flex
        items-center
        justify-center
        font-semibold
        text-blue-400
        cursor-pointer
        transition
        duration-200
        ease-in-out
      `}

      i {
        ${tw`
          ml-2
          -mb-1
          text-sm
        `}
      }
    }
  }

  .user-reviews-container {
    ${tw`
      flex
      flex-col
      items-start
      justify-center
    `}

    .user-reviews-list {
      ${tw`
        flex
        flex-row
        items-center
        justify-start
        mt-8
      `}

      img {
        :nth-child(n + 2) {
          ${tw`
            -ml-5
          `}
        }
      }
    }

    p {
      span {
        ${tw`
          text-blue-400
          font-semibold
        `}
      }
    }
  }
`

const HeroImage = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    mb-8
    lg:mb-0
  `}

  img {
    ${tw`
      w-full
      h-full
    `}
  }
`

export default Hero
