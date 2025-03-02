import React, {useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './componets/ScrollToTop'; 
import { Provider } from 'react-redux';
import { store } from './Store/index';
import styled from 'styled-components';
import Navbar from './componets/Navbar';
import Footer from './componets/footer';
import Home from './Pages/Home';
import Login from './Pages/login';
import Register from './Pages/Register';
import Shop from './Pages/Shop';
import Cart from './Pages/cart';
import About from './Pages/About';
import Blog from './Pages/blog';
import Blog1 from './Pages/blog1';
import Blog2 from './Pages/blog2';
import Blog3 from './Pages/blog3';
import Faq from './Pages/Faq';
import Contact from './Pages/contact';
import Profile from './Pages/profile';
import Checkout from './Pages/checkOut';
import Cake from './Pages/cake';
import Coffee from './Pages/coffee';
import Soup from './Pages/soup';
import Milkshakes from './Pages/milkshake';
import PremiumBeans from './Pages/PremiumBeans';
import ForgetPassword from "./Pages/ForgetPassword";
import ExpertBaristas from "./Pages/ExpertBaristas";
import CozyAmbiance from "./Pages/CozyAmbiance";
import AnimatedCursor from "react-animated-cursor";
import Feedback from './Pages/Feedback';
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
            color='104, 225, 239'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />
          <ToastContainer position="top-right" autoClose={3000} />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog1" element={<Blog1 />} />
              <Route path="/blog2" element={<Blog2 />} />
              <Route path="/blog3" element={<Blog3 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/shop/cake" element={<Cake />} />
              <Route path="/shop/coffee" element={<Coffee />} />
              <Route path="/shop/soup" element={<Soup />} />
              <Route path="/shop/milkshake" element={<Milkshakes />} />
              <Route path="/premiumbeans" element={<PremiumBeans />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/expertbaristas" element={<ExpertBaristas />} />
              <Route path="/cozyambiance" element={<CozyAmbiance />} />
            </Routes>
          </ContentContainer>
          <Footer />
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;
