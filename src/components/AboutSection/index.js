import React from 'react'
import { Button } from 'react-scroll'
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubHeading,
  BtnWrap,
  ImgWrap,
  Img
} from './AboutElements'

const AboutSection = () => {
  return (
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <SubHeading>Subheading</SubHeading>
                <BtnWrap>
                  {/* <Button to='home' /> */}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
  )
}

export default AboutSection
