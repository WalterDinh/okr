import Footer from "components/Footer";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import React, { Fragment } from "react";

const DefaultLayout: React.FC = ({ children }) => {
  //! State

  //! Function

  //! Render
  return (
    <div id="root">
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
