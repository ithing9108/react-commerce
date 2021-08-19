import React, { ReactFragment } from 'react';
import Head from 'next/head';
import AppLayout from '@/components/AppLayout';

function Store(): ReactFragment {
  return (
    <>
      <Head>
        <title> Store | DoSports </title>
      </Head>
      <AppLayout>
        <div>store (후순위) </div>
      </AppLayout>
    </>
  );
}

export default Store;
