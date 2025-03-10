import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const FAQContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
  box-shadow: 1px 1px 5px 6px #888888;
`;

const FAQHeading = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #78350f;
  font-family: "Playfair Display", serif;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const FAQContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
`;

const FAQItem = styled(motion.div)`
  background-color: white;
  padding: 2.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    background-color: rgb(241, 224, 198); /* Coffee color */
  }
`;

const Question = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #78350f;
  font-family: "Playfair Display", serif;
  cursor: pointer;
  font-weight: 550;
  display: flex;
  align-items: center; /* Aligns text and arrow horizontally */
  justify-content: space-between; /* Distributes space between question text and arrow */
  width: 100%; /* Ensure the question occupies full width */
`;

const Answer = styled(motion.p)`
  font-size: 1.1rem;
  color: #6b4423;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s ease-out;
`;

const ArrowIcon = styled.div`
  font-size: 2rem; /* Ensures arrow is large enough */
  transition: transform 1s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(180deg)")};
  margin-left: 1rem;
  display: inline-block;
  vertical-align: middle;
`;

function FAQ() {
  
  const [openFAQ, setOpenFAQ] = useState(null); // State to track the currently open FAQ

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle the FAQ or close if clicked again
  };

  return (
    
    <FAQContainer>
      <FAQHeading
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions (FAQs)
      </FAQHeading>
      <FAQContent>
        <FAQItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => toggleFAQ(1)}
        >
          <Question
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            What is this grammingo and how does it work?
          </Question>
          <Answer isOpen={openFAQ === 1}> {/* Pass the isOpen prop */}
          Our AI powered grammar assistant helps users enhance their writing by providing real-time grammar, spelling and style suggestions. It understands the context of your text to offer accurate corrections
        </Answer>

        </FAQItem>
        <FAQItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => toggleFAQ(2)}
        >
          <Question
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 , delay: 0.4 }}
          >
            Does it supports multiple language support?
          </Question>
          <Answer isOpen={openFAQ === 2}>
          Yes, Our assistant provides grammar and style suggestions in multiple languages, making it a valuable tool for multilingual users
          </Answer>
        </FAQItem>
        <FAQItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => toggleFAQ(3)}
        >
          <Question
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Can I use it for professional writing?
          </Question>
          <Answer isOpen={openFAQ === 3}>
            yes, Whether you're writing emails, reports, essays, or social media posts, our AI ensures your writing is clear, professional and error free
          </Answer>
        </FAQItem>
        <FAQItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={() => toggleFAQ(4)}
        >
          <Question
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Is it free to use?
          </Question>
          <Answer isOpen={openFAQ === 4}>
          We offer both a free version with essential features and a premium version with advanced grammar, style and AI powered suggestions
          </Answer>
        </FAQItem>
      </FAQContent>
    </FAQContainer>
  );
}

export default FAQ;
