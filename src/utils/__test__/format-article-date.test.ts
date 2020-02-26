import formatArticleDate from '../format-article-date';

describe('Utils - formatArticleDate', () => {
  it('Format date', () => {
    const dateStr = '2020-01-25T12:41:11Z';
    const expected = 'January 25, 2020';
    const result = formatArticleDate(dateStr);

    expect(expected).toEqual(result);
  });
});
