import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
<<<<<<< HEAD
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
=======
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h6 id="footerp"><strong>Address:</strong> Özyeğin Üniversitesi Kampüsü Çekmeköy/İSTANBUL/TÜRKİYE</h6>
            <hr></hr>
            <ul className="list-unstyled">
              <li className="copyright">Copyright &copy;{new Date().getFullYear()} Meme Page</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
>>>>>>> 7450cfec48f668c6ed03ef8151547871afc6ad90
}
export default Footer;
