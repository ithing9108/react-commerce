import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  const setup = () => {
    const utils = render(<LoginForm />);
    const { getByPlaceholderText, getByText } = utils;
    const idInput = getByPlaceholderText('이메일');
    const pwInput = getByPlaceholderText('비밀번호');
    const button = getByText('로그인');
    return {
      ...utils,
      idInput,
      pwInput,
      button,
    };
  };
  it('has 2 input, 1 button, 2 link', () => {
    const { idInput, pwInput, button, getByText } = setup();
    expect(idInput).toBeTruthy();
    expect(pwInput).toBeTruthy();
    expect(button).toBeTruthy();
    getByText('비밀번호 찾기');
    getByText('회원가입');
  });
  it('change id input', () => {
    const { idInput } = setup();
    fireEvent.change(idInput, {
      target: {
        value: 'tdd@naver.com',
      },
    });
    expect(idInput).toHaveAttribute('value', 'tdd@naver.com');
  });
  it('change password input', () => {
    const { pwInput } = setup();
    fireEvent.change(pwInput, {
      target: {
        value: 'qwer1234!',
      },
    });
    expect(pwInput).toHaveAttribute('value', 'qwer1234!');
  });
  it('click login and clear input', () => {
    const { idInput, pwInput, button } = setup();
    fireEvent.change(idInput, {
      target: {
        value: 'tdd@naver.com',
      },
    });
    fireEvent.change(pwInput, {
      target: {
        value: 'qwer1234!',
      },
    });
    fireEvent.click(button);
    expect(idInput).toHaveAttribute('value', '');
    expect(pwInput).toHaveAttribute('value', '');
  });
});
