import React from "react";
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
      <CategoryBar /> {/* Añade CategoryBar aquí */}
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
}
