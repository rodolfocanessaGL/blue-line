import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs/internal/observable/of';

import api from '../api';

jest.mock('rxjs/ajax');

describe('Utils - api', () => {
  it('Call', () => {
    ajax.mockImplementation(() => of({ response: {
      message: 'pass!'
    }}));

    api({ url: 'test' })
      .subscribe(res => {
        expect(res).toEqual({ message: 'pass!' });
      });
  });
});
