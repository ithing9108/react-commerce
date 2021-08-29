import React, { ReactFragment } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@/styles/global.css';
import '@/styles/antd.less';

function DoSports({ Component }: AppProps): ReactFragment {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>DoSports!</title>
      </Head>
      <RecoilRoot>
        <Component />
      </RecoilRoot>
    </>
  );
}

export default DoSports;
