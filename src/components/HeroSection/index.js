import React, { useState } from 'react'
import image from '../../images/plasterBG.jpg'
import { Button } from '../ButtonElement'
import { 
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={image} type='image/jpg' />
      </HeroBg>
      <HeroContent>
        <HeroH1>West and Country Plastering Sevices</HeroH1>
        <HeroP>
          Experienced and professional plastering company offering a range of specialist services.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Contact us with any enquiries {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
