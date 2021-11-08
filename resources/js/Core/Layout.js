import React from "react";
import Header from './Header';
import NavBar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div class="container">
      <Header />
      <NavBar />
      <Breadcrumbs />

      { children }

      <hr class="featurette-divider" />

      <Footer />
    </div>
  );
};

export default Layout;
