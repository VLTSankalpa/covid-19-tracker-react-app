import { render, screen } from '@testing-library/react';
import React from 'react';
import CountryPicker from './CountryPicker.jsx';

test('renders Hello World as a text', () => {
  // Arrange
  render(<CountryPicker />);

  // Act
  // ... nothing

  // Assert
  const helloWorldElement = screen.getByText('United States');
  expect(helloWorldElement).toBeInTheDocument();
});