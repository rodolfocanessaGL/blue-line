import formatArticleId from '../format-article-id';

describe('Utils - formatArticleId', () => {
  it('Format article name', () => {
    const name = 'The article test';
    const expected = 'the-article-test';
    const result = formatArticleId(name);

    expect(expected).toEqual(result);
  });
});
