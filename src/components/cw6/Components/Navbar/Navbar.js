import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

// Icons & Image
import TwitterWhite from '../../Assets/Twitter.svg'
import Menu from '../../Assets/Menu.svg'

const Navbar = () => {
  let lastScroll = 0

  const [isSearch, setIsSearch] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState()

  const handleCheckWidth = () => {
    let windowWidth = window.innerWidth

    if (windowWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleScroll = () => {
    const currentTop = window.scrollY

    if (currentTop <= 0) {
      setIsScrollTop(true)
    }
    if (currentTop > lastScroll) {
      setIsScrollTop(false)
    }

    lastScroll = currentTop
  }

  useEffect(() => {
    handleCheckWidth()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Nav className={`${isScrollTop ? 'py-10 bg-none' : 'p-4 bg-white shadow-md'}`}>
      <NavContainer>
        <h1>Chip.</h1>
        <NavRight
          className={
            isMobile
              ? `absolute-nav ${
                  isActive ? 'translate-x-0' : 'translate-x-full'
                }`
              : 'flex-row'
          }
        >
          <div
            onClick={() => setIsActive(false)}
            className='links hover:-translate-y-1'
          >
            Home
          </div>
          <div
            onClick={() => setIsActive(false)}
            className='links hover:-translate-y-1'
          >
            Pricing
          </div>
          <div
            onClick={() => setIsActive(false)}
            className='links hover:-translate-y-1'
          >
            FAQ
          </div>
          <div className='sign-in-btn'>
            <img src={TwitterWhite} alt='' />
            Sign in with Twitter
          </div>
        </NavRight>
        <BurgerMenu
          onClick={() => setIsActive(!isActive)}
          className={isMobile ? 'inline-flex' : 'hidden'}
          src={Menu}
        />
      </NavContainer>
    </Nav>
  )
}

const Nav = styled.div`
  ${tw`
    fixed
    top-0
    right-0
    px-4
    xl:px-0
    w-full
    transition-all
    duration-500
    ease-in-out
    z-30   
  `}

  .absolute-nav {
    ${tw`
        absolute
        top-0
        right-0
        h-screen
        w-screen
        flex-col
        bg-white
    `}
  }
`

const NavContainer = styled.div`
  ${tw`
    w-full
    max-w-6xl
    mx-auto
    flex
    items-center
    justify-between
  `}

  h1 {
    ${tw`
      text-lg
      font-semibold
      text-blue-500
      cursor-pointer
      z-30
    `}
  }
`

const NavRight = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    transition
    duration-500
    ease-in-out
    z-20
  `}

  .links {
    ${tw`
        py-2
        px-2
        mx-2
        mb-4
        md:mb-0
        font-semibold
        text-gray-500
        cursor-pointer
        transition
        duration-200
        ease-in-out
    `}

    :nth-child(3) {
      ${tw`
        ml-2
        mr-4
      `}
    }
  }

  .sign-in-btn {
    ${tw`
        flex
        items-center
        justify-between
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
`

const BurgerMenu = styled.img`
  ${tw`
    px-2
    py-2
    rounded-md
    hover:bg-gray-200
    z-30
  `}
`

export default Navbar
