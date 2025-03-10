import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "./Navitems";

const NavbarContainer = styled(motion.nav)`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(44, 19, 11, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(30, 12, 5, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: 2px solid #8b4513;
  transition: all 0.3s ease;
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    color: #d2691e;
    text-decoration: none;
    background: linear-gradient(to right, #d2691e, #cd853f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
  }

  img {
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1175px) {
    display: none;
  }
`;

const NavLink = styled(motion.div)`
  position: relative;

  a {
    color: #deb887;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: "Poppins", sans-serif;
    padding: 20px;
    transition: all 0.3s ease;

    &:hover {
      color: #ffe4b5;
    }
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 40px;
  left: 0;
  background: rgba(44, 19, 11, 0.95);
  border: 1px solid #8b4513;
  border-radius: 5px;
  overflow: hidden;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  a {
    display: block;
    padding: 10px 20px;
    color: #deb887;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffe4b5;
    }
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (key, state) => {
    setDropdownOpen((prev) => ({ ...prev, [key]: state }));
  };

  return (
    <NavbarContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={scrolled ? "scrolled" : ""}
    >
      <Logo>
        <Link to="/">grammingo</Link>
      </Logo>

      <NavLinks>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/About">About Us</Link>
        </NavLink>

        <NavLink>
          <Link to="/About">Dictionary</Link>
        </NavLink>

        {/* User Dropdown */}
        <NavLink
          onMouseEnter={() => toggleDropdown("user", true)}
          onMouseLeave={() => toggleDropdown("user", false)}
        >
          <a href="#">User </a>
          <DropdownMenu isOpen={dropdownOpen.user}>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </DropdownMenu>
        </NavLink>
        <NavLink>
          <Link to="/Feedback">Feedback</Link>
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
