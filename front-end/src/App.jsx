import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LgoinPoPUp from "./components/loginPopUp/LgoinPopUp";
import Chatbot from "./components/Chatbot/Chatbot";
import MyOrders from "./pages/myorders/MyOrders";
import AgriCare from "./components/AgriCareHub/AgriCare.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {showLogin ? <LgoinPoPUp setShowLogin={setShowLogin} /> : <></>}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/palceOrder" element={<PlaceOrder />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/agricare" element={<AgriCare />} />
        </Routes>
      </div>
      <Footer data-aos="fade-down" />
    </>
  );
}

export default App;
