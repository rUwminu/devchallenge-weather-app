import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import TwitterBlack from '../../Assets/TwitterBlack.svg'

const Footer = () => {
  return (
    <FooterScetion>
      <InnerContainer>
        <h2>Chirp.</h2>
        <RightLinks>
          <img src={TwitterBlack} alt='' />
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms of Use</a>
        </RightLinks>
      </InnerContainer>
    </FooterScetion>
  )
}

const FooterScetion = styled.section`
  ${tw`
    py-4
    w-screen
    bg-blue-100
  `}
`

const InnerContainer = styled.div`
  ${tw`
    mx-auto
    w-full
    max-w-6xl
    px-4
    lg:px-0
    flex
    items-center
    justify-between
  `}
`

const RightLinks = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}

  img {
    ${tw`
        w-6
        h-6
        cursor-pointer
    `}

    :hover {
      animation: rotateAni 1s linear infinite;
    }
  }

  a {
    ${tw`
        relative
        ml-4
        font-semibold
    `}

    ::after {
      content: '';
      ${tw`
        absolute
        bottom-0
        left-0
        w-[0%]
        border-b-2
        border-gray-500
        opacity-0
        transition-all
        duration-500
        ease-in-out
      `}
    }

    :hover::after {
      ${tw`
        w-[110%]
        opacity-100
      `}
    }
  }

  @keyframes rotateAni {
    0% {
      transform: rotate(-5deg);
    }
    20% {
      transform: rotate(5deg);
    }
    40% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(5deg);
    }
  }
`

export default Footer
