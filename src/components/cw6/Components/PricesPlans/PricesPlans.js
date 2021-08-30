import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Icons & Image
import TwitterWhite from '../../Assets/Twitter.svg'
import Checkmark from '../../Assets/Checkmark.svg'

const plansData = [
  {
    id: 1,
    subscription: 9,
    type: 'month',
    benefit: [
      'Unilimited* schedule tweets and threads.',
      'Schedule up to 3 weeks in advance',
      'Real-Time audience analytics up to 5k followers.',
    ],
  },
//   {
//     id: 2,
//     subscription: 9,
//     type: 'month',
//     benefit: [
//       'Unilimited* schedule tweets and threads.',
//       'Schedule up to 3 weeks in advance',
//       'Real-Time audience analytics up to 5k followers.',
//     ],
//   },
//   {
//     id: 3,
//     subscription: 9,
//     type: 'month',
//     benefit: [
//       'Unilimited* schedule tweets and threads.',
//       'Schedule up to 3 weeks in advance',
//       'Real-Time audience analytics up to 5k followers.',
//     ],
//   },
]

const PricesPlans = () => {
  return (
    <PlansContainer>
      <CardContainer>
        <h1 className='title-header'>One simple price plan.</h1>
        <p className='title-info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit.
        </p>
        <CardList>
          {plansData.map((plan) => {
            const { id, subscription, type, benefit } = plan

            const TypePlan = () => {
              if (type === 'month') {
                return (
                  <>
                    <h2>Monthly</h2>
                    <h1>
                      ${subscription}
                      <span>/mo</span>
                    </h1>
                  </>
                )
              }
            }

            return (
              <Card key={id}>
                <div className='card-top'>
                  <TypePlan />
                </div>
                <div className='card-body'>
                  {benefit.map((x) => (
                    <h3>
                      <img src={Checkmark} alt='' />
                      {x}
                    </h3>
                  ))}
                </div>
                <div className='card-bottom'>
                  <div className='sign-in-btn'>
                    <img src={TwitterWhite} alt='' />
                    Sign in with Twitter
                  </div>
                </div>
              </Card>
            )
          })}
        </CardList>
      </CardContainer>
    </PlansContainer>
  )
}

const PlansContainer = styled.div`
  ${tw`
    w-screen
    flex
    items-center
    justify-center
  `}
`

const CardContainer = styled.div`
  ${tw`
    pt-14
    pb-16
    mx-auto
    w-full
    md:max-w-6xl
    flex
    flex-col
    items-center
    justify-center
  `}

  .title-header {
    ${tw`
        mb-2
        max-w-md
        text-xl
        lg:text-2xl
        font-bold
        text-gray-900
    `}
  }

  .title-info {
    ${tw`
        max-w-md
        text-center
        text-gray-400
    `}
  }
`

const CardList = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-around
    mt-8
  `}
`

const Card = styled.div`
  ${tw`
    w-full
    max-w-xs
    p-6
    mb-4
    border
    border-yellow-400
    bg-yellow-50
    rounded-md
  `}

  .card-top {
    ${tw`
        flex
        flex-col
        items-start
        justify-center
        pb-4
        border-b
    `}

    h2 {
      ${tw`
        text-base
        lg:text-lg
        text-gray-500
      `}
    }

    h1 {
      ${tw`
        text-2xl
        lg:text-3xl
        font-bold
      `}

      span {
        ${tw`
            text-base
            font-normal
            text-gray-500
        `}
      }
    }
  }

  .card-body {
    ${tw`
        flex
        flex-col
        items-start
        justify-center
        py-4
        border-b
    `}

    h3 {
      ${tw`
        flex
        items-center
        justify-start
        mb-3
      `}

      img {
        ${tw`
            h-4
            w-4
            lg:h-5
            lg:w-5
            mr-3
        `}
      }
    }
  }

  .card-bottom {
    ${tw`
        pt-3
    `}

    .sign-in-btn {
      ${tw`
        flex
        items-center
        justify-center
        py-2
        px-4
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
  }
`

export default PricesPlans
