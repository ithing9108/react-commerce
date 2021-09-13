import React, { ReactElement } from 'react';
import Head from 'next/head';
import Login from '@/components/user/Login';
import styles from './login.module.css';
import Refresh from '../../../public/common/logo/refresh.svg';

function LoginPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Login | DoSports</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            <Refresh fill="#0f376a" />
            <span className={styles.title}>DoSports</span>
          </a>
          <Login />
        </div>
        <footer className={styles.footer}>
          <a className={styles.footerLink} href="/">
            doSports, All Rights Reserved
          </a>
        </footer>
      </main>
    </>
  );
}

export default LoginPage;
