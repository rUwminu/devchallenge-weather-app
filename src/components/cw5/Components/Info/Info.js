import React, { useState, useEffect, useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import FeatureImg from '../../Assets/Custom.png'

const Info = () => {
  const targetRef = useRef()
  const [isReveal, setIsReveal] = useState(false)

  const handleReveal = () => {
    var revealTop = targetRef.current.getBoundingClientRect().top
    var windowheight = window.innerHeight
    var revealpoint = 300

    if (revealTop < windowheight - revealpoint) {
      setIsReveal(true)
    } else {
      setIsReveal(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleReveal)
  }, [])

  return (
    <Section>
      <FeatureContainer ref={targetRef}>
        <FeatureInfo
          className={`${
            !isReveal
              ? '-translate-x-40 opacity-0'
              : 'translate-y-0 opacity-100'
          }`}
        >
          <h1>A fully customizable snippet editor</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            quod iure minima velit iusto temporibus officiis accusamus porro
            cumque. Quam mollitia non nulla dicta necessitatibus delectus?
            Doloribus, quasi ut! Esse.
          </p>
          <Button className='btn btn-4 hover-border-10'>
            Get Started<span> - its free</span>
          </Button>
        </FeatureInfo>
        <FeatureImage
          className={`${
            !isReveal
              ? 'translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          <img src={FeatureImg} alt='' />
        </FeatureImage>
      </FeatureContainer>
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    px-6
    lg:px-0
    py-14
    w-full
  `}
`

const FeatureContainer = styled.div`
  ${tw`
    flex
    flex-col-reverse
    md:flex-row
    items-center
    justify-center
    mx-auto
    w-full
    max-w-6xl
  `}
`

const FeatureInfo = styled.div`
  ${tw`
    w-full
    transition
    duration-700
    ease-in-out
  `}

  h1 {
    ${tw`
      text-4xl
      md:text-5xl
      lg:text-6xl
      font-bold
    `}
  }

  p {
    ${tw`
      py-4
      md:text-lg
      md:font-semibold
      max-w-lg
      md:max-w-xl
      lg:max-w-2xl
    `}
  }
`

const FeatureImage = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-auto
    mb-12
    md:mb-0
    delay-500
    transition
    duration-500
    ease-in-out
    
  `}

  img {
    ${tw`
      max-w-md
      md:max-w-lg
    `}
  }
`

const Button = styled.button`
  ${tw`
    py-2
    px-4
    text-white
    bg-black
    rounded-md
    hover:bg-gray-900
    hover:shadow-md
    focus:bg-black
  `}

  span {
    ${tw`
      text-gray-300
    `}
  }
`

export default Info
