import React from "react";
import styled from "styled-components";
import { color, motion } from "framer-motion";
import Button from "../components/Button";

const AboutContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1900px;
  margin: 0 auto;
  background-color: #fffbeb;

  background-image: url("https://images.template.net/103700/soft-brown-background-1btgz.png");
  background-size: cover;
  background-position: center;
  border-radius: 12px; /* Optional: To add rounded corners to the container */
  opacity: 1;
  z-index: -1;

  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20231205/pngtree-creamy-textured-milk-colored-background-image_13815875.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  padding-top: 1.5rem; /* Adjusted padding for top */
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;

  color: color: #5e2e0d;
  font-weight: bolder;

  color: #7c2214;
  letter-spacing: 4px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  p {
    color:color: #5e2e0d;
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-weight:bold;
  }
`;

const ImageContent = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative; /* To contain the overlay */
`;

const HoverImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%; /* Prevent image from overflowing */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  cursor: pointer;
  /* Image scaling and hover effect */
  &:hover img {
    transform: scale(1.1); /* Scale image on hover */
  }
  /* Dark overlay that appears on hover */
  &:hover .overlay {
    opacity: 1;
  }
  /* Image styling */
  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease; /* Smooth image scaling */
  }
  /* Overlay effect */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    opacity: 0;
    transition: opacity 0.3s ease;

  filter: grayscale(100%) ;
  transition: all 0.3s ease;
  border: 4px solid black;
  &:hover {
    filter: grayscale(0%);
    box-shadow: 0 0 20px rgba(255, 10, 0, 0.8);
    border-width: 6px;
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.05);

  }
`;

function About() {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About grammingo
      </Title>
      <Content>
        <TextContent
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            <p>
              With this passion for language, we are excited to introduce
              grammingo:an interactive, game-based learning app designed to
              improve spelling, grammar, and word usage in English & Hindi.
              Through AI-driven challenges, voice interactions, and real life
              scenarios, It makes learning languages fun, immersive, and
              effective.
            </p>
            <Button primary>Learn More</Button>
          </p>
        </TextContent>
        <ImageContent
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <HoverImage>
            <img src="pin.png" alt="Zumar Cafe Interior" />
          </HoverImage>
        </ImageContent>
      </Content>
    </AboutContainer>
  );
}

export default About;
