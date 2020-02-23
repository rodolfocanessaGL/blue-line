export const formatArticleId = (title: string): string => title.replace(/ /g, '-').toLocaleLowerCase().trim();
