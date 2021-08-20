import React, { useState, useEffect, useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Heroimg from '../../Assets/Snippet.png'

const Hero = () => {
  const targetRef = useRef()
  const [isReveal, setIsReveal] = useState(false)

  const handleReveal = () => {
    var revealTop = targetRef.current.getBoundingClientRect().top
    var windowheight = window.innerHeight
    var revealpoint = 50

    if (revealTop < windowheight - revealpoint) {
      setIsReveal(true)
    } else {
      setIsReveal(false)
    }
  }

  useEffect(() => {
    window.addEventListener('load', handleReveal)
  }, [])

  return (
    <Section>
      <HeroContainer ref={targetRef}>
        <HeroInfo>
          <h1
            className={`${
              !isReveal
                ? 'translate-y-full opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            Gorgeous Code Snippets
          </h1>
          <p
            className={`delay-200 ${
              !isReveal
                ? 'translate-y-full opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            With Snipper, create fully customizable code snippets in a matter of
            seconds right from your browser.
          </p>
          <div
            className={`delay-500 transition duration-500 ease-in-out ${
              !isReveal
                ? 'translate-y-full opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            <button>
              Get Started <span>- it's free</span>
            </button>
            <p>No creafit card required</p>
          </div>
        </HeroInfo>
        <HeroImage
          className={` ${
            !isReveal
              ? 'translate-y-full opacity-0'
              : 'translate-y-0 opacity-100'
          }`}
        >
          <img src={Heroimg} alt='' />
        </HeroImage>
      </HeroContainer>
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    pt-40
    w-full
    flex
    items-center
    justify-center
    bg-gradient-to-bl
    from-white
    via-red-300
    to-pink-600
    z-0
  `}
`

const HeroContainer = styled.div`
  z-index: 0;

  ${tw`
    px-4
    lg:px-0
    w-full
    max-w-6xl
    flex
    flex-col
    items-center
    justify-center
  `}
`

const HeroInfo = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    pb-12
    md:pb-20
    w-full
    text-center
  `}

  h1 {
    ${tw`
      text-4xl
      md:text-5xl
      lg:text-6xl
      font-bold
      transition
      duration-500
    `}
  }

  p {
    ${tw`
      py-3
      pb-2
      md:text-lg
      md:font-semibold
      max-w-lg
      md:max-w-xl
      lg:max-w-2xl
      transition
      duration-500
    `}
  }

  button {
    ${tw`
      my-2
      py-2
      px-3
      bg-black
      text-white
      font-semibold
      rounded-md
      transition
      duration-200
      ease-in-out
      hover:bg-gray-800
    `}

    span {
      ${tw`
      font-normal
      text-gray-300
    `}
    }
  }
`

const HeroImage = styled.div`
  ${tw`
    w-full
    h-full
    delay-700
    transition
    duration-700
  `}
`

export default Hero
