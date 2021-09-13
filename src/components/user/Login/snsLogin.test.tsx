import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SnsWrapper from './SnsLogin';

describe('<SnsWrapper />', () => {
  const setup = () => {
    const { getAllByText } = render(<SnsWrapper />);
    const snsButtons = getAllByText('로그인');
    return { snsButtons };
  };
  it('has two button', () => {
    const { snsButtons } = setup();
    expect(snsButtons.length).toBe(2);
  });
  it('click Login button', () => {
    const { snsButtons } = setup();
    window.open = jest.fn();
    fireEvent.click(snsButtons[0]);
    expect(window.open).toHaveBeenCalled();
  });
});
