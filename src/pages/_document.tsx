import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class RootDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="og:title" content="DoSports" />
          <meta name="og:url" content="" />
          <meta name="og:image" content="" />
          <meta name="og:description" content="DoSports에서 다양한 스포츠 정보를 만나 보세요" />
          <style global jsx>
            {`
              #__next {
                height: 100%;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
