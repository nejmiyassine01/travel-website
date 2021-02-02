import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDesc>
        <h2>Explorix</h2>
        <p>We strive to create the best experiences for our customers</p>
      </FooterDesc>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/">About</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h2 {
    margin-bottom: 3rem;
    color: #df2935;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    place-items: center;
    text-align: center;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled.div`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #df2935;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }
`
