import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Like from '../../Assets/Like.svg'
import TwitterBlue from '../../Assets/TwitterBlue.svg'
import { data, reviews } from '../../Assets/dumbdata'

const Review = () => {
  return (
    <ReviewsSection>
      <InnerContainer>
        <ReviewsContainer>
          <h1 className='info-title'>What our customers say</h1>
          <ReviewsGrid>
            {reviews.map((x) => {
              const { id, img, username, tweeterlink, body, likes, createdAt } =
                x

              return (
                <ReviewsCard key={id}>
                  <div className='card-top'>
                    <div className='user-profile'>
                      <img src={img} alt='' />
                      <div className='user-info'>
                        <h3>{username}</h3>
                        <p>{tweeterlink}</p>
                      </div>
                    </div>
                    <img src={TwitterBlue} alt='' />
                  </div>
                  <div className='card-body'>
                    <p>{body}</p>
                  </div>
                  <div className='card-bottom'>
                    <div className='like-container'>
                      <img src={Like} alt='' />
                      <p>{likes}</p>
                    </div>
                    <h4>{createdAt}</h4>
                  </div>
                </ReviewsCard>
              )
            })}
          </ReviewsGrid>
        </ReviewsContainer>
      </InnerContainer>
    </ReviewsSection>
  )
}

const ReviewsSection = styled.section`
  ${tw`
    flex
    items-center
    justify-center
    bg-blue-50
  `}
`

const InnerContainer = styled.div`
  ${tw`
    pt-14
    pb-16
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
      mb-6
    `}
  }
`

const ReviewsContainer = styled.div`
  ${tw`
    w-full
  `}
`

const ReviewsGrid = styled.div`
  ${tw`
    w-full
    grid
    grid-cols-1
    md:grid-cols-3
    gap-5
  `}
`

const ReviewsCard = styled.div`
  ${tw`
    w-full
    md:max-w-sm
    p-5
    bg-white
    rounded-md
    hover:shadow-md
    transition
    duration-200
    ease-out
  `}

  .card-top {
    ${tw`
        flex
        items-center
        justify-between
    `}

    .user-profile {
      ${tw`
        flex
        items-center
        justify-start
      `}

      .user-info {
        ${tw`
        flex
        flex-col
        items-start
        justify-center
        text-gray-700
        ml-3
      `}

        h3 {
          ${tw`
            font-bold
          `}
        }
      }
    }
  }

  .card-body {
    ${tw`
        my-3
        text-gray-700
    `}
  }

  .card-bottom {
    ${tw`
        flex
        flex-row
        items-center
        justify-between
    `}

    .like-container {
      ${tw`
            flex
            flex-row
            items-center
            justify-center
        `}

      img {
        ${tw`
            h-5
            w-5
        `}
      }

      p {
        ${tw`
            ml-2
            text-gray-700
        `}
      }
    }
  }
`

export default Review
