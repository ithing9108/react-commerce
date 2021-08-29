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
        <title>DoSports!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <RecoilRoot>
        <Component />
      </RecoilRoot>
    </>
  );
}

export default DoSports;
