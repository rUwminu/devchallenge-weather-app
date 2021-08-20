import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const getWindowHeight = () => {
  const { innerHeight: height } = window
  return height
}

const VerticalSlider = () => {
  const [windowHeight, setWindowHeight] = useState()
  const [slideLength, setSlideLength] = useState()
  const [currentSlide, setCurrentSlide] = useState(0)

  const intentCount = () => {
    setSlideLength(document.querySelectorAll('.image-slide').length)
  }

  const handleResize = () => {
    setWindowHeight(getWindowHeight())
  }

  useEffect(() => {
    intentCount()

    window.addEventListener('resize', handleResize)
  }, [])

  const handleUpButon = (e) => {
    e.preventDefault()

    if (currentSlide >= slideLength - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handleDownButon = (e) => {
    e.preventDefault()

    if (currentSlide === 0) {
      setCurrentSlide(slideLength - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <SliderContainer>
      <SliderLeft
        style={{
          top: `-${(slideLength - 1) * 100}vh`,
          transform: `translateY(${currentSlide * windowHeight}px)`,
        }}
      >
        <div className='info-slide bg-red-400'>
          <h1>Nature Flower</h1>
          <p>all in pink</p>
        </div>
        <div className='info-slide bg-blue-400'>
          <h1>Nature Flower</h1>
          <p>all in pink</p>
        </div>
        <div className='info-slide bg-gray-800'>
          <h1>Nature Flower</h1>
          <p>all in pink</p>
        </div>
        <div className='info-slide bg-yellow-400'>
          <h1>Nature Flower</h1>
          <p>all in pink</p>
        </div>
      </SliderLeft>
      <SliderRight
        style={{ transform: `translateY(-${currentSlide * windowHeight}px)` }}
      >
        <div className='image-slide bg-yellow-600'></div>
        <div className='image-slide bg-gray-200'></div>
        <div className='image-slide bg-blue-600'></div>
        <div className='image-slide bg-red-600'></div>
      </SliderRight>
      <SliderButton className='-translate-x-1/2'>
        <button
          onClick={(e) => handleUpButon(e)}
          className='up-btn translate-y-full'
        >
          U
        </button>
        <button onClick={(e) => handleDownButon(e)} className='down-btn '>
          D
        </button>
      </SliderButton>
    </SliderContainer>
  )
}

const SliderContainer = styled.div`
  ${tw`
    relative
    overflow-hidden
    w-screen
    h-screen
  `}
`

const SliderLeft = styled.div`
  ${tw`
    h-screen
    w-[35%]
    absolute
    top-0
    left-0
    transition
    duration-500
    ease-in-out
  `}

  .info-slide {
    ${tw`
        h-full
        w-full
        flex
        flex-col
        items-center
        justify-center
    `}

    h1 {
      ${tw`
        -mt-2
        mb-2
        text-white
        text-3xl
        md:text-4xl
      `}
    }

    p {
      ${tw`
        text-white
        text-lg
        md:text-xl
      `}
    }
  }
`

const SliderRight = styled.div`
  ${tw`
    h-full
    w-[65%]
    absolute
    top-0
    left-[35%]
    transition
    duration-500
    ease-in-out
  `}

  .image-slide {
    ${tw`
        w-full
        h-full
    `}
  }
`

const SliderButton = styled.div`
  ${tw`
    absolute
    left-[35%]
    top-[45%]
    z-30
  `}

  button {
    ${tw`
        py-2
        px-4
        text-lg
        bg-white
        text-gray-600
        font-semibold
        hover:shadow-md
        hover:text-gray-800
        cursor-pointer
        transition
        duration-200
        ease-out
    `}
  }

  .up-btn {
    ${tw`
        rounded-l-md
    `}
  }

  .down-btn {
    ${tw`
        rounded-r-md
    `}
  }
`

export default VerticalSlider
