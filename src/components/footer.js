import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FooterImg from './FooterImg.png'; 

// Styled components for the footer
const FooterContainer = styled.footer`
background: linear-gradient(90deg, rgb(39, 16, 1), rgb(54, 24, 3));
color: #fffbeb;
padding: 1.5rem 2rem;
text-align: center;
position: relative;
bottom: 0;
width: 100%;
box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
max-width: 1200px;
margin: 0 auto;

p {
  margin: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.5;

  &:first-child {
    font-weight: 500;
  }
}

@media (max-width: 768px) {
  text-align: center;
  padding: 1rem;
}
`;

const InfoSection = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
margin: 2rem 0;
flex-wrap: wrap; /* Allow columns to wrap on smaller screens */

.infoimg {
  height: auto;
  max-height: 10rem;
  width: 90%;
  max-width: 10rem; /* Restrict size for smaller devices */
  margin-bottom: 1rem;
  margin-left:-130px;
}

.info-wrapper {
  display: flex;
  flex-wrap: wrap;
 
  width: 90%; /* Ensure it adapts to smaller devices */
}

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;

  .infoimg {
    max-width: 8rem;
    max-height: auto;
  }

  .info-wrapper {
    justify-content: center;
    gap: 2rem;
  }
}
`;

const InfoColumn = styled.div`
flex: 1 1 calc(25% - 2rem); /* Flexible width with margin space */
margin: 0 1rem;
text-align: left;

h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ffd6a5;
}

p,
a {
  font-size: 0.9rem;
  color: #fffbeb;
  text-decoration: none;
  margin-bottom: 0.5rem;
  display: block;
}

a:hover {
  color: #fbbf24;
  text-decoration: underline;
}

@media (max-width: 768px) {
  flex: 1 1 100%; /* Full width on smaller devices */
  text-align: center;
}
`;

const SocialIcons = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
margin-top: 1.5rem;

@media (max-width: 768px) {
  gap: 1.2rem;
}
`;

const SocialIcon = styled(motion.a)`
color: #fffbeb;
font-size: 1.8rem;
text-decoration: none;
padding: 0.5rem;
border-radius: 50%;
transition: color 0.3s ease, transform 0.3s ease;

&:hover {
  transform: scale(1.2);
  color: #fbbf24;
}

&[href*="facebook.com"]:hover {
  color: #3b5998; /* Facebook Blue */
}

&[href*="twitter.com"]:hover {
  color: #000000; /* X Black */
}

&[href*="instagram.com"]:hover {
  color: #e4405f; /* Instagram Pink */
}

&[href*="linkedin.com"]:hover {
  color: #0077b5; /* LinkedIn Blue */
}

  &[href*="github.com"]:hover {
    color: #1C2025; /* GitHub Black */
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Divider = styled.hr`
border: none;
height: 2px;
background: #ffd6a5;
margin: 2rem auto;
width: 80%; /* Adjust width for responsiveness */
`;

const PaymentIcons = styled.div`
  display: flex;
  align-items: center; 
  gap: 1.5em; 
  margin-top: 1rem;

  @media(max-width: 768px) {
  justify-content: center;
  align-items: centre;
  gap: 1rem;
  i {
  height: 0.5rem;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>

        {/* Social Icons */}
        <SocialIcons>

          <SocialIcon
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Facebook">
            <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
          </SocialIcon>

          <SocialIcon
            href="https://www.linkedin.com/in/mansi-ruhil-7a00a0228/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="LinkedIn"
            role="link">
          <i className="fab fa-linkedin-in"></i>  {/* LinkedIn icon */}
          </SocialIcon>

          <SocialIcon
            href="https://x.com/cantexitvim"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Twitter"
            role="link">
            <i className="fab fa-x-twitter"></i>  {/* Twitter icon */}
          </SocialIcon>

      

          <SocialIcon
            href="https://www.instagram.com/m.ansi.ruhil/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </SocialIcon>

          <SocialIcon
            href="https://github.com/vimistify/gramminGo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="GitHub"
            role="link"
          >
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </SocialIcon>

        </SocialIcons>

        {/* Divider */}
        <Divider />

        {/* Informational Sections */}
        <InfoSection>
        <img src={FooterImg} alt="Footer" className="infoimg"/>
        <div className="info-wrapper">
        <InfoColumn>
            <h3>About Us</h3>
            <p>
            Founded in 2025.
            <br></br>
            grammingo is dedicated to redefining the way words 
            inspire and connect
            </p>
          </InfoColumn>
          <InfoColumn  >
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </InfoColumn>
          <InfoColumn>
            <h3>Contact Us</h3>
            <p><a href="mailto:contact@grammingo.com"> contact@gramminGo.com</a></p>
            <p><a href="tel:+11234567890"> (123) 456-7890</a></p>
  
          </InfoColumn>
          <InfoColumn>
            <h3>Location</h3>
            <p>123 Edu St, spell Town, USA</p>
            <p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>
            </p>
          </InfoColumn>
        </div>
        
        </InfoSection>

        {/* Footer Text */}
        <p>&copy; {new Date().getFullYear()} gramminGo. All rights reserved.</p>
        <p>Made with ♥</p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
