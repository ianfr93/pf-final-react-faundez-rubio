import React from "react";
import PropTypes from "prop-types";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../CategoryBar/CategoryBar"; 
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <div className="header-wrapper">
        <Brand />
        <NavBar />
      </div>
      <CategoryBar />
      <main className="main-container">
        {/* Aquí se renderizan los `children`, que en este caso son las rutas */}
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
