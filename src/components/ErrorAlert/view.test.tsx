import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import View from './view';

describe('ErrorAlert', () => {
  it('View', () => {
    const onClose = jest.fn();
    const heading = "heading";
    const message = "message";
    const { getByText } = render(
      <View
        show={true}
        heading={heading}
        message={message}
        onClose={onClose}
      />
    );

    expect(getByText(heading)).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
  });
});
