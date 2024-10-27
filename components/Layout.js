import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { MdOutlineShoppingCart } from "react-icons/md";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gadget Nest</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
