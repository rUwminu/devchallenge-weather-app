import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { SidebarSearch, Dashboard } from '../Components/index'

const MainPage = () => {
  return (
    <MainSection className=''>
      <SidebarSearch />
      <Dashboard />
    </MainSection>
  )
}

const MainSection = styled.div`
  ${tw`
    md:h-screen
    w-auto
    flex
    items-center
    justify-center
    flex-col
    md:flex-row
    bg-gray-900
  `}
`

export default MainPage
