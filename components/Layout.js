import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Roboto} from 'next/font/google';

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Choose the weights you need
    variable: "--font-roboto", // Optional: to use as CSS variable
  });

const Layout = ({ children }) => {
  return (
    <>
        <header>
          <Navbar />
        </header>
        <main className={roboto.className}>{children}</main>
        <footer>
          <Footer />
        </footer>
    </>
  );
};

export default Layout;
