import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";
import logo from "../../assets/blanco.svg"; // Asegúrate de poner la ruta correcta de tu logo

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="text-center mb-50">
            <img src={logo} alt="TecnoVentas Logo" className="footer-logo" />
          </div>
          <div className="text-center mb-50">
            <div className="footer-contact-info">
              
              <span>
                <i className="fas fa-phone"></i> +56 1234 5678
              </span>
              <span>
                <i className="far fa-envelope-open"></i> contacto@tecnoventas.com
              </span>
            </div>
          </div>
          <div className="text-center mb-50">
            <div className="footer-widget">
           
           
              <div className="footer-text">
                <h4>
                  En TecnoVentas, nos dedicamos a ofrecer lo último en tecnología <br /> y electrónica, con una amplia gama de productos de alta calidad.
                </h4>
              </div>
              <div className="footer-social-icon">
                <a href="#">
                  <i className="fab fa-facebook-f facebook-bg"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram instagram-bg"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube youtube-bg"></i>
                </a>
                <a href="#">
                  <i className="fab fa-tiktok tiktok-bg"></i>
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp whatsapp-bg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, Todos los derechos reservados por {" "}
                  <a href="https://www.iafru.cl">iafru-desing</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
