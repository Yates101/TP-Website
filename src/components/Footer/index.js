import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
       <SocialMedia>
         <SocialMediaWrap>
           <SocialLogo to="/">
             TP
           </SocialLogo>
           <WebsiteRights>West and Country © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
           <SocialIcons>
             <SocialIconLink href="/" target="_blank" aria-label="Instagram">
               <FaInstagram />
             </SocialIconLink>
           </SocialIcons>
         </SocialMediaWrap>
       </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
