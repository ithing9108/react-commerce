import React, { ReactElement, useCallback } from 'react';
import { Button } from 'antd';
import useInput from '@/hooks/common/useInput';
import styles from './LoginForm.module.css';

function LoginForm(): ReactElement {
  const idInput = useInput('');
  const pwInput = useInput('');
  const handleLoginClick = useCallback(() => {
    idInput.setValue('');
    pwInput.setValue('');
  }, [idInput, pwInput]);
  return (
    <>
      <form>
        <input
          type="email"
          className={styles.input}
          value={idInput.value}
          onChange={idInput.onChange}
          placeholder="이메일"
        />
        <input
          type="password"
          className={styles.input}
          value={pwInput.value}
          onChange={pwInput.onChange}
          placeholder="비밀번호"
        />
        <Button type="primary" className={styles.button} onClick={handleLoginClick}>
          로그인
        </Button>
      </form>
      <section className={styles.authWrapper}>
        <a className={styles.authLink} href="/user/password/find">
          비밀번호 찾기
        </a>
        <a className={styles.authLink} href="/user/signup">
          회원가입
        </a>
      </section>
    </>
  );
}

export default LoginForm;
