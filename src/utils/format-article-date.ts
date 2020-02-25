import getMonth from './get-month';

export default (dateStr: string): string => {
  const date = new Date(dateStr);
  const monthName = getMonth(date.getMonth());
  const day = date.getDate();
  const year = date.getFullYear();

  return `${monthName} ${day}, ${year}`;
};
