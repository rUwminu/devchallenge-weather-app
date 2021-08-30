import React, { useState, useEffect, useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { data, reviews } from '../../Assets/dumbdata'

const Info = () => {
  const targetRef = useRef()
  const [isReveal, setIsReveal] = useState(false)

  const handleReveal = () => {
    var revealTop = targetRef.current.getBoundingClientRect().top
    var revealBottom = targetRef.current.getBoundingClientRect().bottom
    var windowheight = window.innerHeight
    var revealpoint = 160

    if (revealBottom > 0) {
      if (revealTop < windowheight - revealpoint) {
        setIsReveal(true)
      } else {
        setIsReveal(false)
      }
    } else {
      setIsReveal(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleReveal)
  }, [])

  return (
    <InfoSection ref={targetRef}>
      <InnerContainer>
        <FeatureContainer>
          <h1 className='info-title'>
            Features that help you <br /> Tweet smarter
          </h1>
          <InfoGrid className='info-container'>
            {data.map((x, index) => {
              const { id, img, title, body } = x

              return (
                <InfoCard
                  className={`${isReveal && 'show'}`}
                  key={id}
                  isReveal={isReveal}
                  index={index}
                >
                  <img src={img} alt='' />
                  <h2>{title}</h2>
                  <p>{body}</p>
                </InfoCard>
              )
            })}
          </InfoGrid>
        </FeatureContainer>
      </InnerContainer>
    </InfoSection>
  )
}

const InfoSection = styled.section`
  ${tw`
    flex
    items-center
    justify-center
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
    flex-col
    items-start
    justify-center
  `}

  .info-title {
    ${tw`
      text-xl
      lg:text-2xl
      font-bold
      mb-4
    `}
  }
`

const FeatureContainer = styled.div`
  ${tw`
    py-16
    w-full
    flex
    flex-col
    items-start
    justify-center
  `}
`

const InfoGrid = styled.div`
  ${tw`
    w-full
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-6
  `}
`

const InfoCard = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    justify-center
    p-4
    border-2
    border-gray-200
    rounded-md
    opacity-0
  `}

  img {
    ${tw`
      w-10
      h-10
    `}
  }

  h2 {
    ${tw`
      my-2
      font-bold
      text-gray-700
    `}
  }

  p {
    ${tw`
      text-gray-700
    `}
  }

  animation: ${(props) =>
    props.isReveal
      ? `infoFade 0.5s ease forwards ${props.index / 7 + 0.5}s`
      : ``};

  @keyframes infoFade {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export default Info
