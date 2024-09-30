import React from "react";
import { Toaster } from "react-hot-toast";

import Layout from "../components/Layout.js";
import "../styles/global.css";
// import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
