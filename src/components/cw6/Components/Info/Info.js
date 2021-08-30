import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { data, reviews } from '../../Assets/dumbdata'

const Info = () => {
  const infoContainer = document.querySelector('.info-container')
  const infoCard = document.querySelectorAll('.info-card')

  return (
    <InfoSection>
      <InnerContainer>
        <FeatureContainer>
          <h1 className='info-title'>
            Features that help you <br /> Tweet smarter
          </h1>
          <InfoGrid className='info-container'>
            {data.map((x) => {
              const { id, img, title, body } = x

              return (
                <InfoCard key={id} className='info-card'>
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
`

export default Info
