import React from 'react';
import { render } from '@testing-library/react';

import withRouter from '../../utils/__test__/with-router';
import View from './view';

const Bomb = ({shouldThrow}) => {
  if (shouldThrow) {
    throw new Error('💣');
  } else {
    return null;
  }
};

describe('ErrorBoundary', () => {
  it('View', async () => {
    const result = '/error';
    const { history } = withRouter(
      <View>
        <Bomb shouldThrow={true} />
      </View>
    );

    expect(history.location.pathname).toEqual(result);
  });
});
