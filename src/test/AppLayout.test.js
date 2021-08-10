import { render, fireEvent } from '@testing-library/react';
import AppLayout from '../components/AppLayout';

it("AppLayout", () => {
  const { getByText } = render(<AppLayout />);
  const loginMenu = getByText(/^로그인/);
  // fireEvent.click(loginMenu);
  expect(loginMenu).toBeInTheDocument();
  // expect(paragraph).toHaveTextContent("로그인");
});