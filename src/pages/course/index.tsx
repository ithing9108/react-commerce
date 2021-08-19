import React, { ReactElement } from 'react';
import Head from 'next/head';
import AppLayout from '@/components/AppLayout';

function Course(): ReactElement {
  return (
    <>
      <Head>
        <title>Course | DoSports</title>
      </Head>
      <AppLayout>
        <div>course (후순위) </div>
      </AppLayout>
    </>
  );
}

export default Course;
