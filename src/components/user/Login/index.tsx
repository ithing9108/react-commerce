import React, { ReactElement } from 'react';
import SnsLogin from '@/components/user/Login/SnsLogin';
import LoginForm from '@/components/user/Login/LoginForm';

function Login(): ReactElement {
  return (
    <>
      <LoginForm />
      <SnsLogin title="SNS계정으로 간편 로그인/회원가입" />
    </>
  );
}

export default Login;
