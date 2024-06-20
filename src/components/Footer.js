import React from "react";
import "./footer.css"; // Assuming your CSS file is named footer.css

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: mizaanurrehman@gmail.com</p>
          <p>Phone: +121 56556 565556</p>
          <p>Address: Your Address 123 street</p>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/in/mizaan-ur-rehman-278706249/" target="blank">
                <i className="fab fa-linkedin" >f</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 your company. All rights reserved. Created by Mizaan ur Rehman</p>
      </div>
    </footer>
  );
};

export default Footer;
