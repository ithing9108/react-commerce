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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="og:title" content="DoSports" />
        <meta name="og:url" content="" />
        <meta name="og:image" content="" />
        <meta name="og:description" content="DoSports에서 다양한 스포츠 정보를 만나 보세요" />
      </Head>
      <RecoilRoot>
        <Component />
      </RecoilRoot>
    </>
  );
}

export default DoSports;
