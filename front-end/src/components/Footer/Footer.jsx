import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer" data-aos="slide-up">
      <div className="footer-content"  data-aos="flip-right">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste assumenda quaerat quos amet ratione earum id ipsum! Distinctio quasi blanditiis odit possimus accusantium rerum, reiciendis molestias dolorum libero voluptas!</p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} />
            
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>

                <li>HOME</li>
                <li> ABOUT US</li>
                <li> DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>



        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-3456789090</li>
                <li>contact@agronect.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">copyright @ Agronect.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;
