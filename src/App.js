import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./store/index";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Login from "./pages/login";
// import Register from "./pages/Register";
// import Shop from "./pages/Shop";
// import Cart from "./pages/cart";
import About from "./pages/About";
// import Blog from "./pages/blog";
// import Blog1 from "./pages/blog1";
// import Blog2 from "./pages/blog2";
// import Blog3 from "./pages/blog3";
import Faq from "./pages/Faq";
// import Contact from "./pages/contact";
// import Profile from "./pages/profile";
// import Checkout from "./pages/checkOut";
// import Cake from "./pages/cake";
// import Coffee from "./pages/coffee";
// import Soup from "./pages/soup";
// import Milkshakes from "./pages/milkshake";
// import PremiumBeans from "./pages/PremiumBeans";
import ForgetPassword from "./pages/ForgetPassword";
// import ExpertBaristas from "./pages/ExpertBaristas";
// import CozyAmbiance from "./pages/CozyAmbiance";
import AnimatedCursor from "react-animated-cursor";
import Feedback from "./pages/Feedback";
import Agent from "./components/Agent/Agent";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #7c2214;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <AppContainer>
          <Navbar />
          <AnimatedCursor
            innerSize={20}
            outerSize={20}
            color="104, 225, 239"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />
          <ToastContainer position="top-right" autoClose={3000} />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/agent" element={<Agent />} />
              {/* <Route path="/register" element={<Register />} /> */}
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/shop" element={<Shop />} /> */}
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/about" element={<About />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              {/* <Route path="/blog1" element={<Blog1 />} /> */}
              {/* <Route path="/blog2" element={<Blog2 />} /> */}
              {/* <Route path="/blog3" element={<Blog3 />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/* <Route path="/checkout" element={<Checkout />} /> */}
              <Route path="/faq" element={<Faq />} />
              {/* <Route path="/shop/cake" element={<Cake />} /> */}
              {/* <Route path="/shop/coffee" element={<Coffee />} /> */}
              {/* <Route path="/shop/soup" element={<Soup />} /> */}
              {/* <Route path="/shop/milkshake" element={<Milkshakes />} /> */}
              {/* <Route path="/premiumbeans" element={<PremiumBeans />} /> */}
              <Route path="/feedback" element={<Feedback />} />
              {/* <Route path="/expertbaristas" element={<ExpertBaristas />} /> */}
              {/* <Route path="/cozyambiance" element={<CozyAmbiance />} /> */}
            </Routes>
          </ContentContainer>
          <Footer />
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;
