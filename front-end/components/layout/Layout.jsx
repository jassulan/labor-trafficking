import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <style jsx>
        {`
          div {
            min-height: 100vh;
            position: relative;
            background-color: #f2f2f2;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
