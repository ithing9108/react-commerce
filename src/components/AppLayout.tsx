/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Menu, Input } from 'antd';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: React.ReactElement;
}
function AppLayout({ children }: AppLayoutProps): ReactElement {
  return (
    <>
      <header>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="community">
            <Link href="/community">
              <a>커뮤니티</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="store">
            <Link href="/store">
              <a>스토어</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="course">
            <Link href="/course">
              <a>강의</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="/about">
              <a>소식</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Input.Search className={styles.header_search} enterButton />
          </Menu.Item>
          <Menu.Item>
            <Link href="/users/login">
              <a>로그인</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/users/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        </Menu>
      </header>
      {children}
      <footer className={styles.footer}>
        <div className="footer_top">
          <address className={styles.footer_cs}>
            <a href="/">고객센터</a>
            <a href="tel:0000-0000">0000-0000</a>
            <span>평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</span>
          </address>
        </div>
        <ul className="footer_shortcut">
          <li>회사소개</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
        </ul>
        <address className="footer_address" />
        <p className="footer_copyright">Copyright 2021. DoSports, Co., Ltd. All rights reserved</p>
      </footer>
    </>
  );
}

export default AppLayout;
