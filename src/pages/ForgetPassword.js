import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Background = styled.section`
  background-image: url("https://img.freepik.com/free-photo/hot-latte-art-coffee-cup-wood-table-coffee-shop_1150-8937.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const ForgetPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.6);
`;

const ForgetPasswordForm = styled(motion.form)`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.5rem;
  background-color: #7c2214;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Message = styled.div`
  margin-top: 1rem;
  color: ${({ success }) => (success ? "green" : "red")};
  text-align: center;
`;

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    // Regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage("Credentials sent to your email successfully.");
      setIsValid(true);
      setTimeout(() => {
        setEmail("");
      }, 2000);
    } else {
      setMessage("Please enter a valid email address.");
      setIsValid(false);
    }
  };

  return (
    <Background>
      <ForgetPasswordContainer>
        <ForgetPasswordForm
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <h2>Forgot Password</h2>
          <Input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Send Credentials
          </Button>
          {message && <Message success={isValid}>{message}</Message>}
        </ForgetPasswordForm>
      </ForgetPasswordContainer>
    </Background>
  );
}

export default ForgetPassword;
