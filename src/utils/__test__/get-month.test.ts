import getMonth from '../get-month';

describe('Utils - getMonth', () => {
  it('Get month name by index', () => {
    const monthIndex = 1;
    const expected = 'February';
    const result = getMonth(monthIndex);

    expect(expected).toEqual(result);
  });
});
