import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Logo from '../../Assets/Logo.svg'
import Burger from '../../Assets/Menu.svg'
import SearchIcon from '../../Assets/Search.svg'
import { XIcon } from '@heroicons/react/solid'

const Navbar = () => {
  let lastScroll = 0

  const [isSearch, setIsSearch] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState()

  const handleCheckWidth = () => {
    let windowWidth = window.innerWidth

    console.log(windowWidth)

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
    <Nav className={`${isScrollTop ? 'py-10 bg-none' : 'p-4 bg-white'}`}>
      <NavContainer>
        <img className='z-30' src={Logo} alt='Logo' />
        <NavRight>
          <XContainer
            onClick={() => setIsSearch(false)}
            className={`py-1 px-1 hover:bg-gray-200 rounded-full ${
              isSearch ? 'inline-flex' : 'hidden'
            }`}
          >
            <XIcon
              className={`w-8 h-8 text-gray-500 ${
                isSearch ? 'inline-flex' : 'hidden'
              }`}
            />
          </XContainer>

          <SearchBar
            onClick={() => setIsSearch(true)}
            className={`${
              isSearch ? 'w-52 h-10 rounded-3xl' : 'w-10 h-10 rounded-full'
            }`}
          >
            <input
              type='text'
              className={`${
                isSearch
                  ? 'bg-gray-100 bg-opacity-70 rounded-3xl pl-10 pr-4'
                  : 'hidden rounded-full'
              }`}
            />
            <img
              className={`${isSearch ? 'left-3' : ''}`}
              src={SearchIcon}
              alt='Search-icon'
            />
          </SearchBar>
          <AbsoluteNav
            className={`${
              isMobile &&
              `absolute top-0 left-0 w-full h-screen bg-gradient-to-bl from-white via-red-300 to-pink-600 z-20 ${
                isActive
                  ? 'translate-x-0 opacity-1'
                  : 'translate-x-full opacity-70'
              }`
            }`}
          >
            <a href='#'>Sign in</a>
            <button>
              Get Started <span>- it's free</span>
            </button>
          </AbsoluteNav>
          <BurgerMenu
            onClick={() => setIsActive(!isActive)}
            className={`${isMobile ? 'inline-flex z-30' : 'hidden'}`}
            src={Burger}
            alt='Menu-icon'
          />
        </NavRight>
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
    lg:px-0
    w-full
    transition-all
    duration-500
    ease-in-out
    z-30
  `}
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

  img {
    ${tw`
      cursor-pointer
    `}
  }
`

const NavRight = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}
`

const SearchBar = styled.div`
  ${tw`
    relative
    flex
    items-center
    justify-center
    transition-all
    duration-200
    ease-in-out
    hover:bg-gray-200
  `}

  input {
    ${tw`
      w-full
      h-full
      focus:outline-none
    `}
  }

  img {
    ${tw`
      absolute
      top-[50%]
      mt-[-12px]
      w-6
      h-6
      cursor-pointer
    `}
  }
`

const XContainer = styled.div`
  ${tw`
    transition-all
    duration-500
    ease-in-out
  `}
`

const BurgerMenu = styled.img`
  ${tw`
    px-2
    py-2
    rounded-md
    hover:bg-gray-200
  `}
`

const AbsoluteNav = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    transition-all
    duration-700
    ease-in-out
    font-bold
    md:font-semibold
    flex-col
    md:flex-row
  `}

  a {
    ${tw`
      relative
      py-2
      px-4
      mb-4
      md:mb-0
      rounded-md
      transition-all
      duration-500
      ease-in-out
      text-center
      w-full
      max-w-xs
      md:w-auto
      md:hover:bg-transparent
    `}

    ::before {
      content: '';
      ${tw`
        absolute
        bottom-0
        w-[0%]
        border-b-2
        border-black
        opacity-0
        transition-all
        duration-500
        ease-in-out
      `}
    }

    ::after {
      content: '';
      ${tw`
        absolute
        bottom-0
        w-[0%]
        border-b-2
        border-black
        opacity-0
        transition-all
        duration-500
        ease-in-out
      `}
    }

    ::before {
      right: 50%;
    }

    ::after {
      left: 50%;
    }

    :hover::after {
      ${tw`
        w-[50%]
        opacity-100
      `}
    }

    :hover::before {
      ${tw`
        w-[50%]
        opacity-100
      `}
    }
  }

  button {
    ${tw`
      py-2
      px-4
      text-white
      bg-black
      w-full
      max-w-xs
      md:w-auto
      rounded-md
      transition-all
      duration-200
      ease-in-out
      md:hover:-mt-2
      hover:shadow-md
      hover:bg-gray-800
    `}
  }

  span {
    ${tw`
      font-normal
      text-gray-300
    `}
  }
`

export default Navbar
