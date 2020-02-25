export default (title: string): string => title.replace(/ /g, '-').toLocaleLowerCase().trim();
