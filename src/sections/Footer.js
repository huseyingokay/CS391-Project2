import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <p id="footerp">
          <strong>Address:</strong> Özyeğin Üniversitesi Kampüsü
          Çekmeköy/İSTANBUL/TÜRKİYE
        </p>
      </div>
      <div className="footer-bottom">
        <p id="copyright">Copyright &copy;2021 Meme Page</p>
      </div>
    </div>
  );
}
export default Footer;
