import React, { ReactFragment } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { AppProps } from 'next/app';

function DoSports({ Component }: AppProps): ReactFragment {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>DoSports!</title>
      </Head>
      <Component />
    </>
  );
}

export default DoSports;
