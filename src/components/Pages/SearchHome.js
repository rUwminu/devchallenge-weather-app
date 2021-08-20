import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import SearchBar from '../Mix/SearchBar'

import BookData from '../../asset/Data.json'

const SearchHome = () => {
  return (
    <Section>
      <SearchBar placeholder='Enter a Book name' data={BookData} />
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    flex
    justify-center
    w-screen
    h-screen
    bg-indigo-700
  `}
`

export default SearchHome
