import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '@/components/AppLayout';

function About(): ReactElement {
  return (
    <>
      <Head>
        <title>news | DoSports</title>
      </Head>
      <AppLayout>
        <div>news</div>
      </AppLayout>
    </>
  );
}

export default About;
