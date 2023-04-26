import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-manu">
      <div className="footer-part-one">
        <h2>BONGO-JOB</h2>
        <p>
          There are many variations of passages of Lorem Ipsum , <br /> but the
          majority have suffered alteration in some form.
        </p>
        <div className="social-icon">
          <img src="/src/assets/img/Group 9969.png" alt="" />
        </div>
      </div>
      <div className="footer-part">
        <h4>Company</h4> 
        <p>About Us</p>
        <p>Work</p>
        <p>Latest News</p>
        <p>Careers</p>
      </div>
      <div className="footer-part">
        <h4>Product</h4> 
        <p>Prototype</p>
        <p>Plans & Pricing</p>
        <p>Customers</p>
        <p>Integrations</p>
      </div>
      <div className="footer-part">
        <h4>Support</h4> 
        <p>Help Desk</p>
        <p>Sales</p>
        <p>Become a Partner</p>
        <p>Developers</p>
      </div>
      <div className="footer-part">
        <h4>Contact</h4> 
        <p>524 Broadway , NYC</p>
        <p>+1 777 - 978 - 5570</p>
      </div>
      </div> 
      <div className="copyright">
        <p>@2023 Bongo-Job. All Rights Reserved</p>
        <p>Powered by MD.Shahadat Hossain</p>
      </div>
    </div>
  );
};

export default Footer;
