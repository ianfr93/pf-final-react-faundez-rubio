import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import CategoryBar from "../CategoryBar/CategoryBar"; 
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <NavBar />
      <CategoryBar />
      <main className="main-container">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
