// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Preload the Cherish font */}
          <link
            rel="preload"
            href="/fonts/Cherish-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

            


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
