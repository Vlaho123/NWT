import React from 'react'
import { Button } from '../../globalStyles'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membership to receive the latest education offers.
            </FooterSubHeading>
            <FooterSubText>
                You can subsribe at any time.
            </FooterSubText>
            <Form>
              <FormInput name="email" type="email" placeholder="Your email" />
                <Button fontBig>Subscribe</Button>
              
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink >How it works</FooterLink>
              <FooterLink >Testimonials</FooterLink>
              <FooterLink>Professors</FooterLink>
              <FooterLink >Students</FooterLink>
              <FooterLink >Terms of Service</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink >Contact</FooterLink>
              <FooterLink >Support</FooterLink>
              <FooterLink >Sponsorships</FooterLink>
              
            </FooterLinksItems>
            </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Courses</FooterLinkTitle>
              <FooterLink >Curriculum</FooterLink>
              <FooterLink >Lectures</FooterLink>
              <FooterLink >Assignments</FooterLink>
              <FooterLink >Professors</FooterLink>
              
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink >Facebook</FooterLink>
              <FooterLink >Instagram</FooterLink>
              <FooterLink >YouTube</FooterLink>
              <FooterLink >Twitter</FooterLink>
              <FooterLink >LinkedIn</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>
            


          
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon/>
              AWT
            </SocialLogo>
            <WebSiteRights>
              AWT 2024
            </WebSiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/?locale=hr_HR' target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href='https://www.instagram.com/' target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href='https://youtu.be/SqcY0GlETPk?si=eUAdX9CzjFFBE8dU' target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href='https://x.com/' target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href='https://hr.linkedin.com/' target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
      
  )
}

export default Footer
