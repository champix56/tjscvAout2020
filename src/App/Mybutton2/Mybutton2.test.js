import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Mybutton2 from './Mybutton2';

describe('<Mybutton2 />', () => {
  test('it should mount', () => {
    render(<Mybutton2 />);
    
    const mybutton2 = screen.getByTestId('Mybutton2');

    expect(mybutton2).toBeInTheDocument();
  });
});