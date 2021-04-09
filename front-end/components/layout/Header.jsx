/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import Link from "next/link";

import NavBar from "./NavBar";
const Header = () => {
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  return (
    <header>
      <NavBar />
    </header>
  );
};
export default Header;
