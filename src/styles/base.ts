// Constants

export const GUTTER = 16;

// Functions

export const toRem = (px: number, isNumb: boolean = false): string | number => {
  const remNumb = px / GUTTER;

  if (isNumb) {
    return remNumb;
  }

  return `${remNumb}rem`;
};
