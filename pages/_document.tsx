import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Favicon */}
          {/* Webfont */}
          {/* Stylesheet */}
          {/* Script/js */}
        </Head>
        <body className='my-body-class'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
