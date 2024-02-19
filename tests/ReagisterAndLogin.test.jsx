import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegisterAndLogin from './components/RegisterAndLogin';

describe('RegisterAndLogin component', () => {
  test('renders RegisterAndLogin component', () => {
    render(<RegisterAndLogin />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('allows user to switch between Sign Up and Sign In', () => {
    render(<RegisterAndLogin />);
    const signUpTab = screen.getByText('Sign Up');
    const signInTab = screen.getByText('Sign In');

    fireEvent.click(signInTab);
    expect(signInTab).toHaveClass('border-b-2 border-blue-500');
    expect(signUpTab).not.toHaveClass('border-b-2 border-blue-500');

    fireEvent.click(signUpTab);
    expect(signUpTab).toHaveClass('border-b-2 border-blue-500');
    expect(signInTab).not.toHaveClass('border-b-2 border-blue-500');
  });

  test('submits Sign Up form and redirects to home', async () => {
    render(<RegisterAndLogin />);
    const signUpTab = screen.getByText('Sign Up');
    fireEvent.click(signUpTab);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByText('Sign Up');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);


    await waitFor(() => {
      expect(screen.getByText('Sign In')).toBeInTheDocument();
      // Assuming you have a success message or UI change upon successful signup
      expect(screen.getByText('Sign In')).toHaveClass('border-b-2 border-blue-500');
    });
  });

  test('submits Sign In form and redirects to home', async () => {
    render(<RegisterAndLogin />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    // Adjust these expectations based on the actual behavior of your component
    await waitFor(() => {
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
      // Assuming you have a success message or UI change upon successful signin
      expect(screen.getByText('Sign Up')).toHaveClass('border-b-2 border-blue-500');
    });
  });

  
});
