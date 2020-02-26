import React from 'react';
import { render } from '@testing-library/react';

import { useBreakpoint } from '../../hooks';
import { Devices } from '../../utils';
import View from './view';

jest.mock('../../hooks');

describe('Ellipsis', () => {
  it('View', () => {
    useBreakpoint.mockImplementation(() => Devices.MD);

    const { getByText } = render(<View md={3}>0123456789</View>);
    const text = '012...';
    const expected = getByText(text);

    expect(expected).toBeInTheDocument();
  });
});
