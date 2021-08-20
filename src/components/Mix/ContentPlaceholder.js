import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const ContentPlaceholder = () => {
  return (
    <SectionTemp>
      <CardContainer>
        <div className='card-header animated-bg'>&nbsp;</div>
        <div className='card-content'>
          <div className='card-title animated-bg animated-bg-text'>&nbsp;</div>
          <p className='card-except'>
            &nbsp;
            <span className='animated-bg animated-bg-text'>&nbsp;</span>
            <span className='animated-bg animated-bg-text'>&nbsp;</span>
            <span className='animated-bg animated-bg-text'>&nbsp;</span>
          </p>

          <div className='author'>
            <div className='profile-img animated-bg'>&nbsp;</div>
            <div className='author-info'>
              <strong className='animated-bg animated-bg-text'>&nbsp;</strong>
              <small className='animated-bg animated-bg-text'>&nbsp;</small>
            </div>
          </div>
        </div>
      </CardContainer>
    </SectionTemp>
  )
}

const SectionTemp = styled.section`
  width: 100vw;
  height: 100vh;

  ${tw`
    flex
    flex-col
    items-center
    justify-center
    bg-gray-100
  `}
`

const CardContainer = styled.div`
  width: 350px;
  max-width: 350px;
  height: 450px;

  ${tw`
    px-4
    py-4
    bg-white
    shadow-md
  `}

  img {
    ${tw`
        w-full
    `}
  }

  .card-header {
    width: 100%;
    height: 200px;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .card-content {
    position: relative;
    width: 100%;
    background-color: white;
    padding: 10px 20px;
  }

  .card-title {
    width: 100%;
  }

  .card-except {
    width: 100%;
    color: #777;
    margin: 10px 0 20px;
  }

  .author {
    display: flex;
  }

  .profile-img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  .author-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    width: 100px;

    small {
      color: #aaa;
      margin-top: 5px;
    }
  }

  .animated-bg-text {
    border-radius: 50px;
    display: inline-block;
    width: 100%;
    margin: 0;
    height: 10px;
  }

  .animated-bg {
    background-image: linear-gradient(
      to right,
      #f6f7f8 10%,
      #edeef1 20%,
      #f6f7f8 30%,
      #f6f7f8 100%
    );
    background-size: 200% 100%;
    animation: animate1 1s linear infinite;
  }

  @keyframes animate1 {
    0% {
      background-position: 50% 0;
    }
    100% {
      background-position: -150% 0;
    }
  }
`

export default ContentPlaceholder
