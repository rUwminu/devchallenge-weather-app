import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { ChipIcon } from '@heroicons/react/solid'

const Parallax = () => {
  const [bankName, setBankName] = useState('')
  const [cardNo, setCardNo] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpire, setCardExpire] = useState('')
  const [cardCCV, setCardCCV] = useState('')
  const [activeSubmit, setActiveSubmit] = useState(false)

  const checkCardInfo = () => {
    if (
      bankName !== '' &&
      cardNo !== '' &&
      cardName !== '' &&
      cardExpire !== '' &&
      cardCCV !== ''
    ) {
      setActiveSubmit(true)
    } else {
      setActiveSubmit(false)
    }
  }

  useEffect(() => {
    checkCardInfo()
  }, [bankName, cardNo, cardName, cardExpire, cardCCV])

  return (
    <Container>
      <InnerContainer>
        <CardBg className='bgcolor'></CardBg>
        <Card className='main-card'>
          <div className='logo'></div>
          <TopCard>
            <ChipStyle />
            <input
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder='Bank Name'
              className='text-lg font-semibold bank-name'
            />
          </TopCard>

          <form>
            <InputBox>
              <span>Card No.</span>
              <input
                value={cardNo}
                onChange={(e) => setCardNo(e.target.value)}
                type='text'
                placeholder='0123 4567 9081 2323'
                maxLength='19'
              />
            </InputBox>
            <InputBox>
              <span>Card Holder</span>
              <input
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                type='text'
                placeholder='John Doe'
              />
            </InputBox>
            <GroupBox>
              <InputBox>
                <span>Valid Thru</span>
                <input
                  value={cardExpire}
                  onChange={(e) => setCardExpire(e.target.value)}
                  type='text'
                  placeholder='MM/YY'
                  maxLength='5'
                />
              </InputBox>
              <InputBox>
                <span>CCV</span>
                <input
                  value={cardCCV}
                  onChange={(e) => setCardCCV(e.target.value)}
                  type='password'
                  placeholder='123'
                  maxLength='3'
                />
              </InputBox>
            </GroupBox>
          </form>
        </Card>
        <Button>Comfirm and Pay</Button>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    h-screen
    bg-gradient-to-b
    from-blue-400
    to-white
  `}
`

const InnerContainer = styled.div`
  ${tw`
    relative
    pb-10
    px-10
    flex
    flex-col
    items-center
    justify-center
  `}

  transition: 0.5s;

  form {
    ${tw`
        py-4
        w-full
    `}
  }

  :hover {
    .bgcolor {
      ${tw`         
            w-full
            md:max-w-4xl
            translate-y-0
        `}
    }

    .main-card {
      transform: translateY(0px);
    }
  }
`

const CardBg = styled.div`
  ${tw`
    absolute
    bottom-0
    h-[60%]
    w-full
    md:w-[200px]
    bg-gradient-to-b
    from-purple-500
    to-pink-400
    rounded-xl
    transition-all
    duration-500
    ease-in-out
  `}
`

const Card = styled.div`
  transform: translateY(120px);

  ${tw`
    py-4
    px-8
    md:p-10
    relative
    w-full
    md:max-w-xl
    h-[300px]
    md:h-[350px]
    bg-red-50
    rounded-xl
    shadow-lg
    overflow-hidden
    transition
    duration-500
    ease-in-out
    z-30
  `}

  .logo {
    ${tw`
        absolute
        top-[100px]
        right-[40px]
        w-10
        h-10
        md:w-12
        md:h-12
        rounded-full
        bg-red-300
    `}
    box-shadow: -30px 0 0 rgba(255, 164,36, 0.5);
  }
`

const TopCard = styled.div`
  ${tw`
    flex
    items-center
    justify-between
  `}

  .bank-name {
    ${tw`
        text-right
        items-end
        bg-transparent
        focus:outline-none
    `}
  }
`

const ChipStyle = styled(ChipIcon)`
  ${tw`

    h-16
    w-20
  `}
`

const InputBox = styled.div`
  ${tw`
    w-full
    mb-4
    flex
    flex-col
    justify-center
  `}

  span {
    ${tw`
        text-indigo-600
        font-semibold
    `}
  }

  input {
    ${tw`
        text-xl
        lg:text-2xl
        bg-transparent
        focus:outline-none
    `}
  }
`

const GroupBox = styled.div`
  ${tw`
    w-full
    flex
    flex-row
  `}
`

const Button = styled.button`
  ${tw`
    mt-6
    px-8
    py-2
    text-lg
    font-semibold
    bg-gray-200
    hover:bg-gray-100
    focus:bg-gray-400
    hover:shadow-md
    transition
    duration-200
    ease-in-out
    rounded-md
    z-20
  `}
`

export default Parallax
