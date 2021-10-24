import React from 'react'
import Icon1 from '../../images/Icon1.jpg'
import Icon2 from '../../images/Icon2.jpg'
import Icon3 from '../../images/Icon3.jpg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Modern</ServicesH2>
          <ServicesP>We offer a full range of modern plastering and drywall including applications of plasterboard, wet plaster and rendering</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Micro Cement</ServicesH2>
          <ServicesP>Polished work-surfaces, bespoke tables and a range of bathroom additions for the sleek yet industrial look.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Third Skill</ServicesH2>
          <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
