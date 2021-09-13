import React, { ReactElement, MouseEvent, KeyboardEvent } from 'react';
import styles from './SnsLogin.module.css';

interface SnsWrapperProps {
  title?: string;
}
function SnsLogin({ title = '' }: SnsWrapperProps): ReactElement {
  const handlePressKakao = () => window.open('https://kakao.com');
  const handlePressNaver = () => window.open('https://naver.com');
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <button className={styles.kakaoLink} type="button" onClick={handlePressKakao}>
        <img className={styles.snsLogo} src="/user/sns/kakao_btn_small.png" alt="kakao" />
        <span>로그인</span>
      </button>
      <button className={styles.naverLink} type="button" onClick={handlePressNaver}>
        <img className={styles.snsLogo} src="/user/sns/naver_btn_small.png" alt="naver" />
        <span>로그인</span>
      </button>
    </section>
  );
}

export default SnsLogin;
