// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";



export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <title>Gadget Nest</title>
        <meta name="Description" content="An e-commerce website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
